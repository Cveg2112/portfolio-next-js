import { HeadingStyle } from '../util/heading-style';
import { ImageLoader } from '../util/image-loader';

interface HeroImageProps {
  isFirst: boolean;
  image: {
    url: string;
    alt?: string;
    width?: number;
    height?: number;
  };
  overlayTitle?: string;
  overlayCopy?: string;
}

export function HeroImage(props: HeroImageProps){
  const isFirst = props?.isFirst ? 'mt-24 lg:mt-28' : 'm-2';
  return (
    <section className="p-2">
      <div className={`${isFirst} max-w-screen-3xl mx-auto p-2 border border-primary relative w-full object-cover h-screen-2/5 lg:h-screen-3/5 flex justify-center items-center`}>
        <div>
          <ImageLoader 
            className="w-full"
            layout="fill"
            objectFit="cover"
            src={props?.image?.url}
            alt={props?.image?.alt}
            // width={1920}
            // height={1080}
            // quality={1080}
          />
        </div>
        {/* <div className="bg-gray-800 text-white p-8 z-10">
          {(props.overlayCopy || props.overlayTitle) ?
            <>
              {props.overlayTitle ? <HeadingStyle tag="h1" text={overlayTitle} /> : null}
              props.{overlayCopy ? <div>{overlayCopy}</div> : null}
            </>
            : null
          }
        </div> */}
      </div>
    </section>
  )
}