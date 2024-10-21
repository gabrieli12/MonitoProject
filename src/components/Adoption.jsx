import banner from '../assets/images/Banner-2.png'
import MainIntro from './simpleComponents/MainIntro'
import paw from '../assets/icons/fontisto_paw.png'
import PlayCircle from '../assets/icons/Play_Circle.png'

import Button from './simpleComponents/Button'
import { useLang } from './LangProvider'



function Adoption() {

  const {selectedLang} = useLang()


  return (
    <section style={{backgroundImage: `url(${banner})`}} className='bg-cover bg-right w-full rounded-[20px] py-16 px-24 my-3 mb-10 flex justify-start items-center mt-10 max-sm:hidden'>
      <div className={`flex flex-col justify-center items-start`}>
        <h1 className={`text-[52px] text-left leading-tight font-gillroy text-[#002A48] relative z-50  `}>
          <span className='flex justify-start items-center gap-4'>
            Adoption 
            <img src={paw} alt="paw" />
          </span>
          <span className={`text-4xl font-sfpro font-bold`}>We need help. so do they.</span>
        </h1>
        <p className={`mt-3 text-left leading-[18px] font-sfpro  text-[#242B33] ml-2 w-[394px] font-medium text-xs`}>Adopt a pet and give it a home, <br />
        it will be love you back unconditionally.</p>
        <div className='flex justify-center items-center mt-7 ml-2 gap-5'>
        <Button bgColor='bg-darkBlue' textColor='text-white' value={selectedLang.exploreButton} radius='rounded-[57px]'  />
        <Button bgColor='bg-transparent' textColor='text-darkBlue' value={selectedLang.introButton} icon={PlayCircle} radius='rounded-[57px]' />
        </div>
      </div>
      {/* <MainIntro whereUse={'adoption'} headingSize={''} headingSpanSize={''} introTextSize={''} /> */}
    </section>
  )
}

export default Adoption