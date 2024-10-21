import { useLang } from '../LangProvider'
import Button from './Button'
import PlayCircle from '../../assets/icons/Play_Circle.png'
import PlayCircleWhite from '../../assets/icons/Play_Circle_white.png'

import { useEffect, useState } from 'react';





function MainIntro({headingSize,headingSpanSize, introTextSize, whereUse, category }) {

    const {selectedLang} = useLang()

    const [playCircleIcon, setPlayCircleIcon] = useState(true);

    useEffect(() => {
      const updateBackgroundImage = () => {
        if (window.innerWidth < 768) {
          setPlayCircleIcon(true);
        } else {
          setPlayCircleIcon(false)
        }
      };
      updateBackgroundImage();
  
      window.addEventListener('resize', updateBackgroundImage);
  
      return () => {
        window.removeEventListener('resize', updateBackgroundImage);
      };
    }, []);
  


  return (
    <div className={`flex flex-col ${whereUse == 'card' ? 'justify-center items-end max-lg:items-center max-lg:justify-start' : 'justify-center items-start'} ${category ? 'max-md:justify-start max-sm:items-start' : ''}  `}>
        <h1 className={`  ${category ? 'text-white max-md:text-start max-md:text-[#002A48]' : 'text-[#002A48]'} ${headingSize} ${whereUse == 'card' ? 'text-right leading-tight max-sm:text-4xl max-lg:text-center' : 'text-left'} font-gillroy  ${whereUse == 'hero'? 'mt-60 max-sm:mt-32' : ''}  relative z-50`}>{selectedLang.heading} <br /><span className={` max-sm:text-3xl ${headingSpanSize} ${whereUse == 'card' ? 'max-sm:text-2xl' : ''} font-sfpro font-bold`}>{selectedLang.headingSpan}</span></h1>
        <p className={` max-sm:text-xs max-sm:mt-3  ${category ? 'text-[#CCD1D2] max-md:text-darkBlue max-md:text-start' : 'text-[#242B33]'} ${whereUse == 'card' ? 'text-right max-w-[394px]  leading-[18px] mt-4 max-lg:text-center ' : 'text-left leading-6 mt-8 '} font-sfpro  max-w-[500px]  ml-2  font-medium ${introTextSize ? introTextSize : ''}  `}>{selectedLang.introText}</p>
        <div className={`flex justify-center items-center mt-7 ml-2 gap-5 ${whereUse == 'card' ? 'max-sm:gap-2 max-sm:text-sm' : ''}`}>
          <Button bgColor='bg-transparent' textColor={`${category ? 'text-white max-md:text-darkBlue' : 'text-darkBlue'}`} value={selectedLang.introButton} icon={category ? playCircleIcon ? PlayCircle : PlayCircleWhite  : PlayCircle} radius='rounded-[57px]' borderColor={`${category ? 'border-white max-md:border-darkBlue' : 'border-darkblue'}`} />
          <Button bgColor={`${category ? 'bg-white max-md:bg-darkBlue' : 'bg-darkBlue'}`} textColor={`${category ? 'text-darkBlue max-md:text-white' : 'text-white'}`} value={selectedLang.exploreButton} radius='rounded-[57px]'  />
        </div>
  </div>

  )
}

export default MainIntro