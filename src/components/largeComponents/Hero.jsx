import { useEffect, useState } from 'react';
import heroBaner from '../../assets/images/HerroBanner.png';
import baner2 from '../../assets/images/HerroBannerForMobile.png';
import MainIntro from '../simpleComponents/MainIntro';

function Hero() {
  const [backgroundImage, setBackgroundImage] = useState(heroBaner);

  useEffect(() => {
    const updateBackgroundImage = () => {
      if (window.innerWidth < 640) {
        setBackgroundImage(baner2);
      } else {
        setBackgroundImage(heroBaner)
      }
    };
    updateBackgroundImage();

    window.addEventListener('resize', updateBackgroundImage);

    return () => {
      window.removeEventListener('resize', updateBackgroundImage);
    };
  }, []);

  return (
    <>
      <div className="relative h-[90vh]"></div>
      <section style={{ backgroundImage: `url(${backgroundImage})` }} className="w-full min-h-screen absolute top-0 z-0 bg-cover bg-center flex flex-col items-start py-7 padding rounded-b-[40px] max-sm:items-start">
        <MainIntro whereUse={'hero'} headingSize={'text-6xl'} headingSpanSize={'text-[46px]'} />
      </section>
    </>
  );
}

export default Hero;
