import { url } from 'inspector';
import Image, { ImageProps } from 'next/image';

interface MyLoaderProps {
  src: string;
  width?: number;
  height?: number;
  quality?: number;
}

const myLoader = ({ src, width, quality }: MyLoaderProps) => {
  if( !src ) return '';

  const baseUrl = "https://images.prismic.io/conorportfolio/";

  if( !src.startsWith(baseUrl) ) return '';

  const finalUrl = `${src}&w=${width}&h=${quality || null}&fit=crop`;
  return finalUrl;
}

export const ImageLoader = ({...rest}: ImageProps) => {
  return (
    <Image
      loader={myLoader}
      {...rest}
    />
  )
}