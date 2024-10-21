import Button from "../simpleComponents/Button"
import Nav from "./Nav"
import { useLang } from '../LangProvider';


import facebook from '../../assets/social-icons/Facebook.png'
import instagrtam from '../../assets/social-icons/Instagram.png'
import twitter from '../../assets/social-icons/Twitter.png'
import youtube from '../../assets/social-icons/YouTube.png'
import title from '../../assets/images/title.png'






function Footer() {

  const { location } = useLang()


  return (
    <footer className={`w-full bg-footerBg h-full py-7 px-40 max-sm:px-5 max-xl:px-24 max-lg:px-16 relative z-10 rounded-t-[40px] pt-28 ${location.pathname == '/register' || location.pathname == '/forgotPass' ? 'hidden' : 'visible'}`}>
        <div className="w-full bg-darkBlue p-10 max-sm:p-5 flex gap-5 rounded-2xl font-sfpro max-2md:flex-col ">
            <p className="max-w-96 text-2xl max-sm:text-[20px] leading-9 tracking-wider font-bold text-white">Register Now So You Don't Miss Our Programs</p>
            <div className="bg-white flex justify-between items-center w-full p-3 gap-3 rounded-[14px] max-sm:flex-col" >
                <input className="w-full border py-3 px-7 rounded-lg font-sfpro" type="text" placeholder="Enter your Email" />
                <Button sd={'w-full'} bgColor='bg-darkBlue' textColor='text-white' value='Subscribe Now' radius='rounded-lg' width='max-w-44' borderColor={'border-[#99A2A5]' } />
            </div>
        </div>
        <div className="flex justify-between py-10 border-b-2 border-[#CCD1D2] max-2md:flex-col max-2md:justify-center max-2md:items-center gap-7">
            <Nav about='About' textColor="text-[#00171F]" notHide={true} isFooter={true} />
            <div className="flex justify-center items-center gap-11">
              <img src={facebook} alt="facebook icon" />
              <img src={twitter} alt="facebook icon" />
              <img src={instagrtam} alt="facebook icon" />
              <img src={youtube} alt="facebook icon" />
            </div>
        </div>

        <div className="flex justify-between items-center pb-8 pt-12 max-2md:flex-col-reverse gap-3">
          <p className="text-sm text-gray font-sfpro leading-5 tracking-wider max-2md:text-[10px] max-2md:leading-4 ">© 2022 Monito. All rights reserved.</p>
          <div className="flex w-[55%] justify-between max-2md:flex-col max-2md:justify-center max-2md:items-center gap-7">
            <img src={title} alt="main logo" />
            <p className="flex justify-between items-center text-gray text-sm leading-5 tracking-wider w-60 max-2md:tracking-wide max-2md:font-bold">
              Terms of Service <span>Privacy Policy</span>
            </p>
          </div>
        </div>
    </footer>
  )
}

export default Footer