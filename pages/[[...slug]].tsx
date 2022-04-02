import { HeroImage } from "../components/flex/hero-image";
import { CopyBlock } from "../components/flex/copy-block";
import { HomeBlock } from "../components/flex/home-block";
import { Client } from '../prismicConfiguration';
import { PageTransition } from "../components/HOC/page-transition";

const Prismic = require('@prismicio/client');

export default function Pages(props:any) {
  const currentPage = props?.page?.results[0];
  const pageBody = currentPage?.data?.body;
  const flexComponents = pageBody?.map((flex: any, key: string | number) => {
    switch(flex?.slice_type){
      case 'homepage_block':
        return (
          <PageTransition>
            <HomeBlock
              key={key + '-' + flex.slice_type}
              title={flex?.primary?.title[0].text}
              subtitle={flex?.primary?.subtitle[0].text}
              copy={flex?.primary?.copy}
              bgVideo={flex?.primary?.background_video?.embed_url}
              bgAnimations="circles" 
              buttons={flex?.items}
            />
          </PageTransition>
        );
      case 'hero_image':
        return 'Hero_Image';
        // return (
        //   <HeroImage 
        //     key={`hero-${flex.id}`}
        //     images={flex.images}
        //     overlayTitle={flex.OverlayTitle}
        //     overlayCopy={flex.OverlayCopy}
        //   />
        // );
      case 'copy_block':
        return (
          <PageTransition>
            <CopyBlock
              key={key + '-' + flex.slice_type}
              title={flex?.primary?.heading[0].text}
              copy={flex?.primary?.copy}
            />
          </PageTransition>
        );
      default: 
        return 'No flexible fields chosen.';
    }
  });

  return (
    <main id="main">
      {flexComponents}
    </main>
  )
}

export async function getStaticProps(context) {
  // get all navigation types
  const nav = await Client.query(Prismic.Predicates.at('document.type', 'navigation'), { lang: '*' })
  // get all page types
  const pages = await Client.query(Prismic.Predicates.at('document.type', 'pages'), { lang: '*' })
  // get a page based on path
  const page = await Client.query(Prismic.Predicates.at('my.pages.uid', context.params.slug[0]), { lang: '*' })

  if (!page) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      nav,
      pages,
      page
    },
  }
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const pages = await Client.query(Prismic.Predicates.at('document.type', 'pages'), { lang: '*' })
  // Get the paths we want to pre-render based on posts
  const paths = await pages.results.map((page:any) => ({
    params: { slug: [page.uid] },
  }))
  // We'll pre-render only these paths at build time.
  return { paths, fallback: false }
}