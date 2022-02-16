interface Props {
  src: string;
  className?: string;
  autoplay?: 0 | 1;
  mute?: 0 | 1;
  loop?: 0 | 1;
}

export function YoutubeEmbed(props: Props){
  const videoEmbedUrl = (src: string) => {
    const videoId = src.split('/').slice(-1).pop();
    const auto = props?.autoplay || 0;
    const mute = props?.mute || 0;
    const loop = props?.loop || 0;
    return `https://youtube.com/embed/${videoId}?autoplay=${auto}&mute=${mute}&loop=${loop}&controls=0&modestbranding=1&playlist=${videoId}`
  }

  return (
    <iframe 
      src={videoEmbedUrl(props.src)}
      className={props?.className}
      frameBorder={0} 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media;" 
    />
  );
}