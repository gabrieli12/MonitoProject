import { useLang } from "../../components/LangProvider";

import arrow from '../../assets/icons/arrow.png'



function Lang() {
    const { changeChoosenLang, langSwitch, setLangSwitch, selectLang, otherLang, exitBtnHandle } = useLang();



  return (
    
    <div onClick={() => {setLangSwitch(!langSwitch)}} className={`flex flex-col justify-start items-start  overflow-hidden transition-all ${langSwitch ? 'h-[4.4rem]' : 'h-6' } mt-3.5  `}>
        <div className='flex justify-center items-center gap-2 font-sfpro cursor-pointer relative'>
            <img className='w-5' src={selectLang.langIcon} alt="" />
            <p className='flex justify-center items-center'>{selectLang.lang} <img src={arrow} /> </p>
        </div>
        <div onClick={() => {
          exitBtnHandle()
          changeChoosenLang()
        }} className='flex justify-center items-center gap-2 font-sfpro mt-2 cursor-pointer'>
            <img className='w-5 object-contain  rounded-3xl' src={otherLang.langIcon} alt="" />
            <p className='flex justify-center items-center'>{otherLang.lang}</p>
        </div>
    </div>
  )
}


export default Lang


