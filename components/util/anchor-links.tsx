import Link from 'next/link';

export interface LinkProps {
  text?: string;
  styles?: string;
  link_type?: string;
  slug?: string;
  uid?: string;
  url?: string;
  target?: string;
}

export function AnchorLinks(props: LinkProps){
  let finalLink;
  const classNames = `inline-block btn btn-${props?.styles || 'primary-outline'} mx-1`
  switch(props.link_type){
    case 'Web': 
      finalLink = <a className={classNames} href={`${props?.url}`} target={props?.target}><span>{props?.text}</span></a>
      break;
    case 'Document': 
      finalLink = <Link href={`/${props?.slug}`}><a className={classNames}><span>{props?.text}</span></a></Link>
      break;
  }

  return <>{finalLink}</>;
}
