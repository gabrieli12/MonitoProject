import Button from "./simpleComponents/Button"
import arrowRight from '../assets/icons/arrow-right.png'
import Card from "./simpleComponents/PetsCard"
import {puppies} from "../data/pupiesData/data"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom";


function PetsForHomePage() {


  return (
    <section className="flex flex-col mt-16" >
      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-1">
          <p className="font-sfpro font-medium">Whats new?</p>
          <p className="font-sfpro font-bold max-md:text-[20px] text-2xl text-darkBlue">Take A Look At Some Of Our Pets</p>
        </div>
        <Link className="max-sm:hidden" to='/category'><Button bgColor='bg-transparent' textColor='text-darkBlue' value={'View more'} icon={arrowRight} radius='rounded-[57px]' y='py-3'  /></Link>
      </div>

      <div className="my-10 grid grid-cols-undeLargeDevice 2xl:grid-cols-aboveLargeDevice  gap-7">
        {
          puppies.slice(0, 8).map((item, index) => {
            console.log(item)
            return <Link to={'/moreInfo'}><Card id={item.id} age={item.age} gender={item.gender} price={item.price} img={item.photo} key={index} /></Link> 
          })
        }

      </div>

      <Link className="sm:hidden w-full" to='/category'><Button bgColor='bg-transparent' textColor='text-darkBlue' value={'View more'} icon={arrowRight} radius='rounded-[57px]' y='py-3' sd='w-full'  /></Link>




    </section>

  )
}

export default PetsForHomePage