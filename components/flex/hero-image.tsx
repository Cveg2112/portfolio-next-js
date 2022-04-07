import { HeadingStyle } from '../util/heading-style';
import { ImageLoader } from '../util/image-loader';
import Img from 'next/image';

interface HeroImageProps {
  image: {
    url: string;
    alt?: string;
    width?: number;
    height?: number;
  };
  overlayTitle?: string;
  overlayCopy?: string;
}

export function HeroImage({image, overlayCopy, overlayTitle}: HeroImageProps){
  return (
    <section className="relative w-full h-screen flex justify-center items-center">
      <div>
        <Img 
          src={image.url}
          alt={image.alt}
          layout="fill"
          className="object-cover"
        />
      </div>
      {/* <div className="bg-gray-800 text-white p-8 z-10">
        {(overlayCopy || overlayTitle) ?
          <>
            {overlayTitle ? <HeadingStyle tag="h1" text={overlayTitle} /> : null}
            {overlayCopy ? <div>{overlayCopy}</div> : null}
          </>
          : null
        }
      </div> */}
    </section>
  )
}