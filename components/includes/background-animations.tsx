import { useRef, useEffect } from 'react';
import {  
  getRandomInt 
} from '../util/helpers';

interface CommonProps {
  type: 'circles';
}

export function BackgroundAnimations(props: CommonProps){
  
  let finalAnimation;
  switch(props.type){
    case 'circles':
      finalAnimation = <CircleCanvas />
  }
  return <>{finalAnimation}</>
}

/**
 * BINARY CANVAS ANIMATION
 * Takes an array of words, converts them to binary
 * and then spits them out into a canvas at a random place and size
 */

function CircleCanvas(props){
  const canvasRef = useRef<HTMLCanvasElement>(null);
  

  function getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

  const positionShapes = (context, canvas) => {
    const circleCount = getRandomNumberBetween(25, 50);
    for( let i = 0; i < circleCount; i++ ){
      const radiusArray = ['20', '25', '30', '35', '40', '45', '50', '55', '60'];
      const randomSize = radiusArray[Math.floor(Math.random()*radiusArray.length)];
      const opacityArray = [0.1, 0.2, 0.3, 0.4, 0.5];
      context.beginPath();
      context.arc(getRandomInt(0, canvas.width), getRandomInt(0, canvas.height), randomSize, 0, 2 * Math.PI, false);
      context.fillStyle = 'transparent';
      context.globalAlpha = opacityArray[Math.floor(Math.random()*radiusArray.length)];
      context.fill();
      context.lineWidth = 1;
      context.strokeStyle = '#f72119';
      context.stroke();
    }

    // props?.wordList?.map((word) => {
    //   convertTextToBinary(word)
    //   const fontSizeArray = ['18px', '24px', '30px', '36px', '42px', '48px'];
    //   const randomFontSize = fontSizeArray[Math.floor(Math.random()*fontSizeArray.length)];
    //   const binary = convertTextToBinary(word).toString();
    //   context.font = `bold ${randomFontSize} Cairo`; 
    //   context.fillStyle = 'rgba(247, 33, 25, .4)';
    //   context.fillText(
    //     binary, 
    //     getRandomInt(0, canvas.width), 
    //     getRandomInt(0, canvas.height)
    //   );
    // });
  }

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    const context:any = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    positionShapes(context, canvas)
  });

  return (
    <canvas
      ref={canvasRef}
      className="fixed w-full h-full top-0 left-0"
    />
  )
}