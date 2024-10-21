import { Link } from "react-router-dom";



function Button({bgColor, textColor, value, icon, fontWeight, radius, width, height, x, y, font, textSize, borderColor, sd}) {
  return (
    <button className={` ${bgColor} ${textColor} ${y ? y : 'pt-3.5 pb-2.5'}  px-7 ${radius} ${font ? font : 'font-sfpro'} leading-6 tracking-wide flex justify-center items-center gap-2 border-[1.5px] font-medium ${borderColor ? borderColor : 'border-darkBlue'  }   ${width} ${textSize} ${fontWeight} ${sd} ` }>{value}<img src={icon} /></button>
  )
}

export default Button