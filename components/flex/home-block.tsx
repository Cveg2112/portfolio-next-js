import { Logo } from '../../assets/icons/logo';
import { HeadingStyle } from '../util/heading-style';
import { RichText, RichTextBlock } from 'prismic-reactjs';
import { linkResolver, useWindowDimensions } from '../util/helpers';
import { HorizontalRule } from '../includes/atoms/horizontal-rule';
import { AnchorLinks } from '../util/anchor-links';
import { YoutubeEmbed } from '../util/youtube-embeds';
import { BackgroundAnimations } from '../includes/background-animations';

interface HomeProps {
  title?: string;
  subtitle?: string;
  copy?: RichTextBlock[];
  bgVideo?: string;
  bgImage?: any;
  bgAnimations?: string;
  buttons?: any;
}

export function HomeBlock(props: HomeProps){
  return (
    <section>
      {props?.bgVideo ? 
        <YoutubeEmbed 
          className="fixed left-0 top-0 opacity-5 w-full h-screen lg:h-[150%] m-auto transform -translate-y-[15%] object-cover"
          src={props?.bgVideo}
          autoplay={1}
          mute={1}
          loop={1}
        />
      : null }

      {/* <BackgroundAnimations 
        type="circles"
      /> */}
      
      <div className="h-screen flex flex-col items-center justify-center text-center m-auto relative z-1 px-2">
          <Logo className="w-full inline-block max-w-screen-lg" />
          <HeadingStyle 
            tag="h1"
            text={props?.title}
            className="developerText text-5xl text-secondary uppercase font-body sr-only"
          />
          <HeadingStyle 
            tag="h2"
            text={props?.subtitle}
            className="developerText lg:text-3xl text-secondary uppercase font-body font-bold"
          />
          <HorizontalRule />
          <div className="text-secondary max-w-xl w-full mx-auto">
            <RichText 
              render={props?.copy}
              linkResolver={linkResolver}
            />
            <div className="my-6">
              {props?.buttons.map((link: any, key: string) => {
                return (
                  <AnchorLinks 
                    key={key}
                    text={link?.cta_text[0]?.text}
                    styles={link?.cta_style}
                    {...link?.cta_link}
                  />
                );
              })}
            </div>
          </div>
      </div>
    </section>
  );
}