import title from '../../assets/images/title.png'
import hamburgerMenu from '../../assets/icons/Hamburger.png'
import user from '../../assets/icons/user.png'
import logOutIcon from '../../assets/icons/log-out.png'

import Nav from "./Nav"
import Button from '../simpleComponents/Button';
import Lang from '../../data/lang/Lang';


import { useLang } from '../LangProvider';
import { Outlet, Link } from "react-router-dom";
import { useState, useEffect } from 'react'



 

function Header() {
  const {selectedLang, isMobile, setIsMobile, location, isAutorized, setIsAutorized} = useLang()
  let [isProfile, setIsProfile] = useState(false)

  const burgerHandle = () => {
    setIsMobile(true)
  }

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
    <header className={`flex justify-between items-start py-7 padding relative z-50 ${location.pathname == '/register' || location.pathname == '/forgotPass'  ? 'hidden' : 'visible'}`}>
      <div className='flex justify-center items-center gap-12'>
        <img src={title} alt="website title" />
        <Nav isMobile={isMobile} textColor="text-darkBlue" />
      </div>
  
      <div className='flex justify-center items-start gap-3.5 max-2md:hidden'>
        <Link className={`${isAutorized ? 'hidden' : 'visible'}`}to='/login'>
          <Button bgColor='bg-darkBlue' textColor='text-white' value={selectedLang.joinButton} radius='rounded-[57px]' />
        </Link>
        <div className={`flex relative flex-col justify-end items-end gap-3 ${isAutorized ? 'visible' : 'hidden'}`}>
          <p onClick={handleClick} className={`mt-3 font-inter font-medium text-lg cursor-pointer`}>{localStorage.getItem('name')}</p>

          <div className={`absolute top-10 flex flex-col bg-white rounded-[10px] p-5 shadow-lg shadow-[#5C73A040] ring-1 ring-black ring-opacity-5 z-50 mt-2 w-72 gap-4 font-notoGeorgian ${isProfile ? 'visible' : 'hidden'}`}>
            <div className="absolute -top-2 right-8 w-4 h-4 bg-white transform rotate-45  z-0"></div>
            <p className='font-normal'>{localStorage.getItem('name')}</p>
            <hr className='bg-darkBlue border border-darkBlue' />
            <div className='flex justify-start items-center gap-2 cursor-pointer'>
              <img src={user} alt="userLogo" />
              <p className='text-sm font-medium'>profile</p>
            </div>

            <div onClick={logOut} className='flex justify-start items-center gap-2 cursor-pointer'>
              <img src={logOutIcon} alt="logOut Icon" />
              <p className='text-sm font-medium'>log out</p>
            </div>

          </div>
        </div>
        
        <Lang />

      </div>
      <img onClick={burgerHandle} className='2md:hidden cursor-pointer' src={hamburgerMenu} alt="hamburger menu" />



    </header>
  )
}

export default Header