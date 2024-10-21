import { register } from "swiper/element"
import image1 from '../assets/images/slider2Images/image 22.png'
import image2 from '../assets/images/slider2Images/image 22-1.png'
import image3 from '../assets/images/slider2Images/image 22-2.png'
import image4 from '../assets/images/slider2Images/image 22-3.png'
import image5 from '../assets/images/slider2Images/image 22-4.png'

import { useState, useEffect } from "react"




register()


function SliderInMoreInfoPage() {


  


  return (
    <div className="flex justify-center items-start flex-col pt-6 pb-[26px] gap-3 w-full  overflow-hidden padding ">
        <p className="text-[#00171F] font-sfpro font-bold text-2xl">Our lovely customer</p>
        <div className="overflow-hidden flex">
            <swiper-container  space-between="10" slides-per-view={"5"} pagination="true"  pagination-clickable="true" style={
            {
                "--swiper-pagination-color": "darkBlue",
                "--swiper-pagination-width": "20px",
                "--swiper-pagination-bottom": "0px",
                
                height: '370px',
                width: '1300px'
                
            }}  >
                <swiper-slide lazy="true">
                    <img  className="rounded-[10px]" src={image1} loading="lazy" alt="" />
                </swiper-slide>

                <swiper-slide lazy="true">
                    <img className="rounded-[10px]" loading="lazy" src={image2} alt="" />
                </swiper-slide>

                <swiper-slide lazy="true">
                    <img className="rounded-[10px]"  loading="lazy" src={image3} alt="" />
                </swiper-slide>

                <swiper-slide lazy="true">
                    <img className="rounded-[10px]" loading="lazy" src={image4} alt="" />
                </swiper-slide>


                <swiper-slide lazy="true">
                    <img className="rounded-[10px]" src={image1} loading="lazy" alt="" />
                </swiper-slide>

                <swiper-slide lazy="true">
                    <img className="rounded-[10px]" loading="lazy" src={image2} alt="" />
                </swiper-slide>

                <swiper-slide lazy="true">
                    <img className="rounded-[10px]"  loading="lazy" src={image3} alt="" />
                </swiper-slide>

                <swiper-slide lazy="true">
                    <img className="rounded-[10px]" loading="lazy" src={image4} alt="" />
                </swiper-slide>


            </swiper-container>

        </div>
    </div>
  )
}

export default SliderInMoreInfoPage