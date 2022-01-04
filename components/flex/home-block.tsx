import { Logo } from '../../assets/icons/logo';
import { HeadingStyle } from '../util/heading-style';
import { TitleProps } from '../interface';

interface HomeProps {
  title: TitleProps[];
  subtitle: TitleProps[];
  copy?: string;
  buttons?: any;
}

export function HomeBlock(props: HomeProps){
  console.log(props)
  return (
    <section>
      <div className="h-screen flex flex-col items-center justify-center text-center m-auto">
        <Logo className="w-full inline-block max-w-screen-xl" />
        <HeadingStyle 
          tag="h1"
          text={props?.title[0]?.text}
          className="ml-20 developerText text-5xl text-secondary uppercase font-body sr-only"
        />
        <HeadingStyle 
          tag="h2"
          text={props?.subtitle[0]?.text}
          className="developerText ml-20 text-5xl text-secondary uppercase font-body"
        />

        {/* cta */}
      </div>
    </section>
  );
}