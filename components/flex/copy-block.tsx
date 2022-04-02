import { HeadingStyle } from '../util/heading-style';
import { TitleProps } from '../interface';
// import { useSpring, animated } from 'react-spring';

interface CopyBlockProps {
  title: string;
  copy?: {
    type: string;
    text: string;
  }[];
  buttons?: any;
}

export function CopyBlock(props: CopyBlockProps){
  const paragraphs = props?.copy?.map((p) => {
    return <p>{p.text}</p>
  });
  return (
    <section className="block">
      <div className="container m-auto p-8 border-l-2 border-primary text-secondary">
        <HeadingStyle 
          tag="h1"
          text={props.title}
          className="text-3xl text-secondary uppercase"
        />
        {paragraphs}
      </div>
    </section>
  )
}