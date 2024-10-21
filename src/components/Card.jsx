import Banner from '../assets/images/Banner-1.png'
import baner2 from '../assets/images/phoneBanner-2.png';
import MainIntro from './simpleComponents/MainIntro'

import { useState, useEffect } from 'react';



function Card() {

  const [backgroundImage, setBackgroundImage] = useState(Banner);

  useEffect(() => {
    const updateBackgroundImage = () => {
      if (window.innerWidth < 1024) {
        setBackgroundImage(baner2);
      } else {
        setBackgroundImage(Banner)
      }
    };
    updateBackgroundImage();

    window.addEventListener('resize', updateBackgroundImage);

    return () => {
      window.removeEventListener('resize', updateBackgroundImage);
    };
  }, []);


  return (
    <section style={{backgroundImage: `url(${backgroundImage})`}} className='relative bg-cover bg-center w-full rounded-[20px] py-16 px-24 my-3 mb-10 flex justify-end items-center max-lg:h-[900px] max-lg:justify-center max-lg:items-start max-md:px-5 max-sm:px-3.5 max-sm:mt-16 '>
      <MainIntro whereUse={'card'} headingSize={'text-[52px]'} headingSpanSize={'text-4xl'} introTextSize={'text-xs'} />
    </section>
  )
}

export default Card