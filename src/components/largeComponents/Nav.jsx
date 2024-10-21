import { Outlet, Link } from "react-router-dom";
import { useLang } from "../LangProvider"; 



function Nav({about, textColor, notHide, gap}) {

  const {selectedLang, isMobile, setIsMobile, exitBtnHandle, isFooter} = useLang()


  return (
    <>
      <nav className={`${notHide ? 'max-2md:visible' : 'max-2md:hidden'} `}>
        <ul className={`flex gap-12  font-sfpro font-bold ${textColor} ${isMobile == true ? 'flex-col justify-between items-center gap-5 max-sm:gap-5' : 'flex-row' } max-sm:gap-7 `}>
          <li>
            <Link onClick={exitBtnHandle} to='/'>{selectedLang.nav.home}</Link>
          </li>
          <li>
            <Link onClick={exitBtnHandle} to='/category'>{selectedLang.nav.category}</Link>
          </li>
          <li>
            <Link onClick={exitBtnHandle} to='/contact'>{selectedLang.nav.contact}</Link>
          </li>
          <li>{about}</li>
        </ul>
      </nav>

      {/* <Outlet /> */}
    </>
  )
}

export default Nav