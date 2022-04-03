import { useState, useEffect } from "react"

export const linkResolver = (doc:any) => {
  // URL for a category type
  if (doc.type === 'category') {
    return `/category/${doc.uid}`
  }

  // URL for a product type
  if (doc.type === 'product') {
    return `/product/${doc.uid}`
  }

  // URL for a page type
  if (doc.type === 'page') {
    return `/${doc.uid}`
  }

  // Backup for all other types
  return '/'
}

export function convertTextToBinary(text: string){
  let binaryText: any = '';
  for( let i = 0; i < text.length; i++ ){
    binaryText += text[i].charCodeAt(0).toString(2);
  }
  return binaryText;
}

// random integer
export const getRandomInt = (min:number, max:number) => {
  return Math.random() * (max - min) + min;
}

// use window dimensions
export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0
  });

  useEffect(() => {
    setWindowDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });
    
    function handleResize() {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}