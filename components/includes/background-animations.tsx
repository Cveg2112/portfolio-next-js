import { useRef, useEffect } from 'react';
import { 
  convertTextToBinary, 
  getRandomInt 
} from '../util/helpers';

interface CommonProps {
  type: 'binary' | 'poly' | 'neon' | 'retro' | 'futuristic';
}

export interface AnimationTypes {
  type: 'binary' | 'poly' | 'neon' | 'retro' | 'futuristic';
}

type BinaryProps = 
  | { type: 'binary'; wordList?: string[]; }
  | { type: 'poly' | 'neon' | 'retro' | 'futuristic'; wordList: never; }

type Props = CommonProps & BinaryProps;

export function BackgroundAnimations(props: Props){
  let finalAnimation;
  switch(props.type){
    case 'binary':
      finalAnimation = <BinaryCanvas wordList={props?.wordList} />
  }
  return <>{finalAnimation}</>
}

/**
 * BINARY CANVAS ANIMATION
 * Takes an array of words, converts them to binary
 * and then spits them out into a canvas at a random place and size
 */

interface BinaryCanvasProps {
  wordList?: string[];
}

function BinaryCanvas(props: BinaryCanvasProps){
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const positionWords = (context:any, canvas:any) => {
    props?.wordList?.map((word) => {
      convertTextToBinary(word)
      const fontSizeArray = ['18px', '24px', '30px', '36px', '42px', '48px'];
      const randomFontSize = fontSizeArray[Math.floor(Math.random()*fontSizeArray.length)];
      context.font = `bold ${randomFontSize} Cairo`; 
      context.fillStyle = 'rgba(247, 33, 25, .4)';
      context.fillText(
        convertTextToBinary(word), 
        getRandomInt(0, canvas.width), 
        getRandomInt(0, canvas.height)
      );
    });
  }

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    const context:any = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    positionWords(context, canvas)
  });

  return (
    <canvas
      ref={canvasRef}
      className="fixed w-full h-full top-0 left-0"
    />
  )
}