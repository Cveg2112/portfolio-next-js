import cx from 'classnames';

interface HeadingProps {
  tag?: string;
  text?: string;
  className?: string;
}

export function HeadingStyle({tag, text, className}: HeadingProps){

  const headingStyles = 'font-bold tracking-wider text-pink-700';
  const h1Styles = 'text-5xl';
  const h2Styles = 'text-4xl';
  const h3Styles = 'text-2xl';
  let heading;

  switch(tag){
    case 'h1':
    case 'H1':
      heading = <h1 className={cx(headingStyles, h1Styles, className)}>{text}</h1>
      break;
    case 'h2':
    case 'H2':
      heading = <h2 className={cx(headingStyles, h2Styles, className)}>{text}</h2>
      break;
    case 'h3':
    case 'H3':
      heading = <h3 className={cx(headingStyles, h3Styles, className)}>{text}</h3>
      break;
    default:
      heading = <h2 className={cx(headingStyles, h2Styles, className)}>{text}</h2>
  }

  return heading;
}