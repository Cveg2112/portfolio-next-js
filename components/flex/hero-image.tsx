import { HeadingStyle } from '../util/heading-style';
import { ImageLoader } from '../util/image-loader';

interface HeroImageProps {
  images: {
    url: string;
    altText?: string;
    width?: number;
    height?: number;
  }[];
  overlayTitle?: string;
  overlayCopy?: string;
}

export function HeroImage({images, overlayCopy, overlayTitle}: HeroImageProps){
  return (
    <section className="relative h-screen flex justify-center items-center">
      <div>
        <ImageLoader 
          src={images[0].url}
          alt={images[0].altText}
          layout="fill"
          className="object-cover"
        />
      </div>
      <div className="bg-gray-800 text-white p-8 z-10">
        {(overlayCopy || overlayTitle) ?
          <>
            {overlayTitle ? <HeadingStyle tag="h1" text={overlayTitle} /> : null}
            {overlayCopy ? <div>{overlayCopy}</div> : null}
          </>
          : null
        }
      </div>
    </section>
  )
}