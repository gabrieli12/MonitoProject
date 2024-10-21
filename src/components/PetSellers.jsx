import Button from "./simpleComponents/Button"

import arrowRight from '../assets/icons/arrow-right.png'
import seller1 from '../assets/icons/petSellersIcons/image 4.png'
import seller2 from '../assets/icons/petSellersIcons/image 6.png'
import seller3 from '../assets/icons/petSellersIcons/image 7.png'
import seller4 from '../assets/icons/petSellersIcons/image 8.png'
import seller5 from '../assets/icons/petSellersIcons/image 9.png'
import seller6 from '../assets/icons/petSellersIcons/image 10.png'
import seller7 from '../assets/icons/petSellersIcons/image 11.png'


const sellerArr = [seller1, seller2, seller3, seller4, seller5, seller6, seller7]



function PetSellers() {
  return (
    <section className="flex flex-col max-sm:hidden">
        <div className="flex justify-between items-center">
            <p className="text-black font-sfpro flex justify-start items-end gap-2 max-md:text-sm">Proud to be part of <span className="text-black text-2xl font-bold max-md:text-[20px]">Pet Sellers</span></p>
            <Button bgColor='bg-transparent' textColor='text-darkBlue' value={'View all our sellers'} icon={arrowRight} radius='rounded-[57px]' y='py-3'  />
        </div>

        <div className="flex justify-between items-center p-2 px-4 gap-4 flex-wrap ">
            {
                sellerArr.map((item, index) => {
                    return <img src={item} key={index} alt="pet seller icon" />
                })
            }
        </div>

    </section>
  )
}

export default PetSellers