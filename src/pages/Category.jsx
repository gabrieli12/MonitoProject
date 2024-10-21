import MainIntro from "../components/simpleComponents/MainIntro"
import Banner from '../assets/images/Banner-3.png'
import banner2 from '../assets/images/Frame 131.png'
import Card from "../components/Card"
import Filter from "../components/largeComponents/Filter"

import { useEffect, useState } from 'react';



function Category() {

  const [backgroundImage, setBackgroundImage] = useState(Banner);
  const [icon2, seticon2] = useState()

  useEffect(() => {
    const updateBackgroundImage = () => {
      if (window.innerWidth < 768) {
        setBackgroundImage(banner2);
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
    <section className="relative z-10 flex flex-col padding">
      <div className="flex flex-col justify-start items-start">
        <p className="text-gray font-sfpro font-medium text-sm">Home 	&nbsp; 	&nbsp;  &gt; 	&nbsp; 	&nbsp; Dog</p>
        <div style={{backgroundImage: `url(${backgroundImage})`}} className='bg-cover bg-right w-full rounded-[20px] py-16 px-24 my-3 mb-10 flex justify-end items-center  max-lg:h-[500px] max-lg:justify-start max-lg:items-start  max-md:px-3.5   '>
          <MainIntro category={true} whereUse={'card'} headingSize={'text-[52px]'} headingSpanSize={'text-4xl'} introTextSize={'text-xs'} />
        </div>
      </div>

      <Filter />
    </section>
  )
}

export default Category