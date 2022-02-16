interface Props {
  className?: string;
  width?: string;
}

export function HorizontalRule(props: Props){
  return (
    <hr 
      className={`w-12 border-primary my-4 ${props?.className || ''}`}
      style={{'width': props?.width || ''}}
    />
  );
}