import Image, { ImageProps } from 'next/image';

interface MyLoaderProps {
  src: string;
  width?: number;
  quality?: number;
}

const myLoader = ({ src, width, quality }: MyLoaderProps) => {
  return `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${src}?w=${width}&q=${quality || 75}`
}

export const ImageLoader = ({...rest}: ImageProps) => {
  return (
    <Image
      loader={myLoader}
      {...rest}
    />
  )
}