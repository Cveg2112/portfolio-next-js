import { HeroImage } from "../components/flex/hero-image";
import { HomeBlock } from "../components/flex/home-block";
import { Client } from '../prismicConfiguration';
const Prismic = require('@prismicio/client');

export default function Pages(props:any) {
  const currentPage = props.page.results[0];
  const pageBody = currentPage?.data?.body;
  const flexComponents = pageBody?.map((flex: any, key: string | number) => {
    switch(flex?.slice_type){
      case 'homepage_block':
        return (
          <HomeBlock
            key={'-' + flex.slice_type}
            title={flex?.primary?.title}
            subtitle={flex?.primary?.subtitle}
            copy={flex?.primary?.copy}
            buttons={flex?.items}
          />
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
        return 'Copy_Block';
      default: 
        return 'No flexible fields chosen.';
    }
  });

  return (
    <div>
      {flexComponents}
    </div>
  )
}

export async function getStaticProps(context:any) {
  // get all navigation types
  const nav = await Client.query(Prismic.Predicates.at('document.type', 'navigation'), { lang: '*' })
  // get all page types
  const pages = await Client.query(Prismic.Predicates.at('document.type', 'pages'), { lang: '*' })
  // get a page based on path
  const page = await Client.query(Prismic.Predicates.at('my.pages.uid', context.params.slug[0]), { lang: '*' })

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
  const paths = pages?.results?.map((page:any) => ({
    params: { slug: [page.uid] },
  }))

  // We'll pre-render only these paths at build time.
  return { paths, fallback: false }
}