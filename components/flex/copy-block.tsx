import { HeadingStyle } from '../util/heading-style';

interface CopyBlockProps {
  isFirst: boolean;
  title: string;
  copy?: {
    type: string;
    text: string;
  }[];
  buttons?: any;
}

export function CopyBlock(props: CopyBlockProps){
  const isFirst = props.isFirst ? 'mt-24 lg:mt-28' : 'my-8';
  const paragraphs = props?.copy?.map((p, key) => {
    return <p key={key}>{p.text}</p>
  });
  return (
    <section className={`${isFirst} mx-2 block`}>
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