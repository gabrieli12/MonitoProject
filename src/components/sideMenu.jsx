import Nav from "./largeComponents/Nav"
import Button from "./simpleComponents/Button"
import Lang from "../data/lang/Lang"
import { useLang } from './LangProvider';
import { Outlet, Link } from "react-router-dom";
import { useState, useEffect } from 'react'

import title from '../assets/images/title.png'
import exitBurger from '../assets/icons/exitBurger.png'

import user from '../assets/icons/user.png'
import logOutIcon from '../assets/icons/log-out.png'






function sideMenu() {
    const {selectedLang, isMobile, setIsMobile, exitBtnHandle, location, isAutorized, setIsAutorized} = useLang()
    let [isProfile, setIsProfile] = useState(false)
  
  
    const handleClick = () => {
      setIsProfile(!isProfile) 
      console.log(isProfile)
    }
  

    const logOut = () => {
        localStorage.setItem('isAutorized', false)
        setIsAutorized(false);
        setIsProfile(false)
      }
    
      useEffect(() => {
        const isUserAuthorized = Boolean(localStorage.getItem('isAutorized') === 'true');
        setIsAutorized(isUserAuthorized)
      }, []);
    


    return (
        <aside className={`fixed top-0 left-0 w-full h-full bg-[#12121299] z-50   justify-center items-center ${isMobile == true ? 'flex' : 'hidden'}  `}>
            <div className="max-w-96 bg-white py-12 px-16 flex flex-col justify-center items-center gap-7 rounded-xl relative m-5 ">
                <img onClick={exitBtnHandle} className="absolute left-7 top-7 cursor-pointer" src={exitBurger} alt="exit navigation menu" />

                <Nav isMobile={false} notHide={true} gap='gap-20' />
                <div className='flex justify-center items-start gap-3.5 '>
                    <Link className={`${isAutorized ? 'hidden' : 'visible'}`}to='/login'>
                        <Button bgColor='bg-darkBlue' textColor='text-white' value={selectedLang.joinButton} radius='rounded-[57px]' />
                    </Link>
                    <div className={`absolute flex flex-col justify-center items-center gap-3 ${isAutorized ? 'visible' : 'hidden'}`}>
                        <p onClick={handleClick} className={`mt-3 font-inter font-medium text-lg cursor-pointer`}>{localStorage.getItem('name')}</p>

                        <div className={`relative flex flex-col bg-white rounded-[10px] p-5 shadow-lg shadow-[#5C73A040] ring-1 ring-black ring-opacity-5 z-20 mt-2 w-72 gap-4 font-notoGeorgian ${isProfile ? 'visible' : 'hidden'}`}>
                            <div className="absolute -top-2 right-8 w-4 h-4 bg-white transform rotate-45  z-0"></div>
                            <p className='font-normal'>{localStorage.getItem('name')}</p>
                            <hr className='bg-darkBlue border border-darkBlue' />
                            <div className='flex justify-start items-center gap-2 cursor-pointer'>
                                <img src={user} alt="userLogo" />
                                <p className='text-sm font-medium'>profile</p>
                            </div>

                            <div onClick={logOut} className='flex justify-start items-center gap-2 cursor-pointer'>
                                <img src={logOutIcon} alt="logOut Icon" />
                                <p onClick={exitBtnHandle} className='text-sm font-medium'>log out</p>
                            </div>

                        </div>
                    </div>
                </div>
                
                <Lang />

                <img className="mt-7" src={title} alt="main logo" />
            </div>
        </aside>
    )
}

export default sideMenu