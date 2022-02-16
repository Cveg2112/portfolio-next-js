import { SVGProps } from '../types';
export function LeftArrow({className, fillColor}: SVGProps){
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden viewBox="0 0 38 44">
      <g>
        <path fill={fillColor} d="M15 0h23L21 22l17 22H15L0 22 15 0z"/>
      </g>
    </svg>
  )
}