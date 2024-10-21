import React from 'react'
import dog from '../assets/images/Frame 93.png'
import dog2 from '../assets/images/image 2 (4).png';

import healthIcon from '../assets/icons/healthIcon.png'
import bearIcon from '../assets/icons/bearIcon.png'


import Slider from '../components/SliderInMoreInfoPage'
import chatIcon from '../assets/icons/chatIcon.png'
import { useLang } from '../components/LangProvider'
import ChatMonito from '../components/largeComponents/ChatMonito'

import facebookIcon from '../assets/social-icons/Facebook.png'
import instagramIcon from '../assets/social-icons/Instagram.png'
import twitterIcon from '../assets/social-icons/Twitter.png'
import youTubeicon from '../assets/social-icons/YouTube.png'

import shareIcon from '../assets/icons/Share_Android.png'

import PetsCard from '../components/simpleComponents/PetsCard'
import { puppies } from '../data/pupiesData/data'
import { Link } from 'react-router-dom';

import arrow from '../assets/icons/Caret_Left_SM.png';
import icon from '../assets/icons/Frame (6).png';



function MoreInfoPetCard() {

  const {chatIsOpen, setChatIsOpen} = useLang()

  const chatHandleClick = () => {
    localStorage.getItem('isAutorized') == 'true' ? setChatIsOpen(true) : alert('please SignIn in your account')
    
  }

  let randomPuppiesArr = []

  for(let i=0; i < 4; i++){
    let randomIndex = Math.floor(Math.random() * 36)        
    randomPuppiesArr.push(puppies[randomIndex])

  }




  return (
    <section className='padding overflow-hidden max-xs:p-0'>
      <img className='absolute top-0 left-0 z-50 xs:hidden w-full' src={dog2} alt="" />
      <img className='relative top-0 left-0 z-50 xs:hidden  invisible w-[400px]' src={dog2} alt="" />

      <Link to={'/'}><img  className="absolute left-3 top-7 cursor-pointer z-50" src={arrow} alt="exit navigation menu" />
      </Link>
      <img  className="absolute right-5 top-12 cursor-pointer z-50" src={icon} alt="exit navigation menu" />


      <div className='relative flex py-5 px-5 border border-[#EBEEEF] max-xs:border-none max-xs:my-shadow rounded-[20px] gap-[34px] max-2md:flex-col '>

        <div className='bg-[#CCD1D2] w-[40px] h-[6px] rounded-[10px] absolute left-1/2 -translate-x-1/2 xs:hidden'></div>
        <div className='flex flex-col gap-5'>
          <img className='rounded-[10px] max-xs:hidden' src={dog} alt="dog photo" />
          <div className='bg-[#FCEED5] py-[9px] px-3 rounded-[10px] flex gap-7 max-sm:hidden'>
            <p className='font-sfpro text-[#002A48] font-bold text-sm flex justify-center items-center gap-[9px]'>
              <img src={healthIcon} alt="health icon" />
              100% health guarantee for pets
            </p>
            <p className='font-sfpro text-[#002A48] font-bold text-sm flex justify-center items-center gap-[9px]'>
              <img src={bearIcon} alt="health icon" />
              100% guarantee of pet identification
            </p>
          </div>

          <div className='flex py-1.5 px-1.5 gap-[21px] max-sm:hidden'>
            <p className='flex justify-center items-center gap-2 text-[#002A48] text-sm font-sfpro font-bold '>
              <img src={shareIcon} alt="share icon" />
              Share:
            </p>
            <div className='flex justify-center items-center gap-5'>
              <img className='opacity-40' src={facebookIcon} alt="" />
              <img className='opacity-40' src={twitterIcon} alt="" />
              <img className='opacity-40' src={instagramIcon} alt="" />
              <img className='opacity-40' src={youTubeicon} alt="" />
            </div>

          </div>


        </div>


        <div className='flex flex-col'>
          <p className="text-gray font-sfpro font-medium text-sm">Home 	&nbsp; 	&nbsp;  &gt; 	&nbsp; 	&nbsp; Dog  &nbsp; 	&nbsp;  &gt; 	&nbsp; 	&nbsp; Large Dog  &nbsp; 	&nbsp;  &gt; 	&nbsp; 	&nbsp; Shiba Inu Sepia </p>

          <div className='flex flex-col gap-1.5 mt-5'>
            <div className='flex flex-col gap-0.5'>
              <p className='text-[#99A2A5] font-sfpro font-medium text-sm max-sm:hidden'>SKU #1000078</p>
              <p className='text-[#00171F] font-sfpro font-bold text-2xl ' >Shiba Inu Sepia</p>
            </div>
            <p className='font-sfpro text-[#002A48] text-xl font-bold '>34.000.000 VND</p>
          </div>

          <div className='flex gap-[18px] font-sfpro justify-start items-center mt-4'>
            <button className='bg-darkBlue pt-3.5 pb-2.5 px-7 rounded-[57px] text-white tracking-widest '>Contact us</button>
            <button onClick={chatHandleClick} className='border-2 border-darkBlue flex justify-center items-center pt-3 pb-1.5 pl-6 pr-7 rounded-[57px] text-[#002A48] font-bold gap-2.5'>
              <img src={chatIcon} alt="chat icon" />
              Chat with Monito
            </button>
          </div>

          <div className='flex justify-between items-center w-full mt-20 sm:hidden'>
            <p className='text-[#00171F] font-sfpro font-bold text-lg'>Information</p>

            <p className='flex justify-center items-center gap-2 text-[#002A48] text-sm font-sfpro font-bold '>
              <img src={shareIcon} alt="share icon" />
              Share
            </p>
          </div>

          <div className="w-full bg-white  rounded-lg overflow-hidden mt-7">
            <table className="table-auto w-full text-left text-sm text-gray font-medium font-sfpro">
              <tbody className='w-full'>
                <tr className="border-b: border-[#EBEEEF]">
                  <td className="py-2 max-sm:px-0 px-4 ">SKU</td>
                  <td className="py-2 max-sm:px-0 px-4">:#1000078</td>
                </tr>
                <tr className="border-b border-[#EBEEEF]">
                  <td className="py-2 max-sm:px-0 px-4">Gender</td>
                  <td className="py-2 max-sm:px-0 px-4">:Female</td>
                </tr>
                <tr className="border-b border-[#EBEEEF]">
                  <td className="py-2 max-sm:px-0 px-4">Age</td>
                  <td className="py-2 max-sm:px-0 px-4">:2 max-sm:px-0 Months</td>
                </tr>
                <tr className="border-b border-[#EBEEEF]">
                  <td className="py-2 max-sm:px-0 px-4">Size</td>
                  <td className="py-2 max-sm:px-0 px-4">:Small</td>
                </tr>
                <tr className="border-b border-[#EBEEEF]">
                  <td className="py-2 max-sm:px-0 px-4">Color</td>
                  <td className="py-2 max-sm:px-0 px-4">:Apricot & Tan</td>
                </tr>
                <tr className="border-b border-[#EBEEEF]">
                  <td className="py-2 max-sm:px-0 px-4">Vaccinated</td>
                  <td className="py-2 max-sm:px-0 px-4">:Yes</td>
                </tr>
                <tr className="border-b border-[#EBEEEF]">
                  <td className="py-2 max-sm:px-0 px-4">Dewormed</td>
                  <td className="py-2 max-sm:px-0 px-4">:Yes</td>
                </tr>
                <tr className="border-b border-[#EBEEEF]">
                  <td className="py-2 max-sm:px-0 px-4">Cert</td>
                  <td className="py-2 max-sm:px-0 px-4">:Yes (MKA)</td>
                </tr>
                <tr className="border-b border-[#EBEEEF]">
                  <td className="py-2 max-sm:px-0 px-4">Microchip</td>
                  <td className="py-2 max-sm:px-0 px-4">:Yes</td>
                </tr>
                <tr className="border-b border-[#EBEEEF]">
                  <td className="py-2 max-sm:px-0 px-4">Location</td>
                  <td className="py-2 max-sm:px-0 px-4">:Vietnam</td>
                </tr>
                <tr className="border-b border-[#EBEEEF]">
                  <td className="py-2 max-sm:px-0 px-4 w-1/3">Published Date</td>
                  <td className="py-2 max-sm:px-0 px-4">:12-Oct-2022</td>
                </tr>
                <tr className="border-b border-[#EBEEEF] ">
                  <td className="py-2 max-sm:px-0 px-4 w-1/3">Additional Information</td>
                  <td className="py-2 max-sm:px-0 px-4">: Pure breed Shih Tzu. Good body structure. With MKA cert and Microchip. Father from champion lineage..</td>
                </tr>
              </tbody>
            </table>
          </div>


        </div>
        
        <div className='bg-[#FCEED5] py-[9px] px-3 rounded-[10px] flex flex-col gap-7 sm:hidden'>
            <p className='font-sfpro text-[#002A48] font-bold text-sm flex justify-start items-center gap-[9px]'>
              <img src={healthIcon} alt="health icon" />
              100% health guarantee for pets
            </p>
            <p className='font-sfpro text-[#002A48] font-bold text-sm flex justify-start items-center gap-[9px]'>
              <img src={bearIcon} alt="health icon" />
              100% guarantee of pet identification
            </p>
          </div>

      </div>

      <Slider />
      <ChatMonito />

      <section className="flex flex-col mt-16 padding"  >
        <div className="flex justify-between items-end">
          <div className="flex flex-col gap-1">
            <p className="font-sfpro font-medium">Whats new?</p>
            <p className="font-sfpro font-bold max-md:text-[20px] text-2xl text-darkBlue">See more puppies</p>
          </div>
        </div>

        <div className="my-10 grid grid-cols-undeLargeDevice 2xl:grid-cols-aboveLargeDevice  gap-7">
          {

            randomPuppiesArr.map((item, index) => {
              console.log(item)
              return <PetsCard id={item.id} age={item.age} gender={item.gender} price={item.price} img={item.photo} key={index} />
            })
          }

        </div>
      </section>



    </section>
  )
}

export default MoreInfoPetCard