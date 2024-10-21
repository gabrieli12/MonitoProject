import FilterSection from "../FilterSection"
import arrow from '../../assets/icons/arrow-right.png'
import arrow2 from '../../assets/icons/Arrow_Right_SM.png'
import filterIcon from '../../assets/icons/filterIcon.png'


import Card from "../simpleComponents/PetsCard"
import { useLang } from "../LangProvider"
import {puppies} from "../../data/pupiesData/data"
import { useState } from "react"
import { Link } from "react-router-dom"



function Filter() {

    const {selectedGenders, setSelectedGenders, selectedColors, setSelectedColors, minPrice, setMinPrice, maxPrice, setMaxPrice, selectedBreeds, setSelectedBreeds, filterDisplay, setFilterDisplay} = useLang()

    const [sortOption, setSortOption] = useState("low-to-high")
    

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 15


    




    let filteredArr = puppies.filter(elem => selectedGenders.length > 0 ? selectedGenders.includes(elem.gender) : true)
    .filter(elem => selectedColors.length > 0 ? selectedColors.includes(elem.color) : true)
    .filter(elem => Number(elem.price.slice(0,3)) >= minPrice && Number(elem.price.slice(0,3)) <= maxPrice)
    .filter(elem => selectedBreeds.length > 0 ? selectedBreeds.includes(elem.breedSize) : true)


    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    }

    const sortedPuppies = [...filteredArr].sort((a, b) => {
        if (sortOption === "low-to-high") {
          return Number(a.price.slice(0,3)) - Number(b.price.slice(0,3))
        } else if (sortOption === "high-to-low") {
          return Number(b.price.slice(0,3)) - Number(a.price.slice(0,3))
        }
        return 0
    });


    const totalPages = Math.ceil(sortedPuppies.length / itemsPerPage);
    const currentPuppies = sortedPuppies.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);


    


  return (
    <section className="flex max-md:flex-col mb-20  ">
        <div className="flex justify-between items-center mb-8 md:hidden">
            <div className="flex relative">
                <select onChange={handleSortChange} className="border border-[#CCD1D2] pt-1.5 pb-1 pr-11 pl-5 rounded-[20px] outline-none gap-2 text-[#667479] text-sm font-medium font-sfpro appearance-none " name="" id="">
                    <option className="flex justify-center items-center p-2" value="">Sort by:  </option>
                    <option className="flex justify-center items-center p-2" value="high-to-low">Sort by price: High to Low</option>
                    <option className="flex justify-center items-center p-2" value="low-to-high">Sort by price: Low to High</option>

                </select>

                <img className="absolute top-1/2 -translate-y-1/2 right-3 mt-[1px] rotate-90 " src={arrow} alt="arrow" ></img>
            </div>

            <p onClick={() => setFilterDisplay(!filterDisplay) } className="flex justify-center items-center gap-2 text-[#002A48] font-bold font-sfpro cursor-pointer">
                <img src={filterIcon} alt="filter icon" />
                Filter
            </p>
        </div>

        <FilterSection />
        <div className="w-full ml-10 max-md:m-0 ">
            <div className="flex justify-between items-center w-full">
                <p className="text-darkBlue font-bold text-2xl flex justify-center items-end gap-4  ">Small Dog <span className="text-[#667479] font-medium text-sm font-sfpro ">{filteredArr.length} puppies</span></p>

                <div className="flex relative max-md:hidden">
                    <select onChange={handleSortChange} className="border border-[#CCD1D2] pt-1.5 pb-1 pr-11 pl-5 rounded-[20px] outline-none gap-2 text-[#667479] text-sm font-medium font-sfpro appearance-none " name="" id="">
                        <option className="flex justify-center items-center p-2" value="">Sort by:  </option>
                        <option className="flex justify-center items-center p-2" value="high-to-low">Sort by price: High to Low</option>
                        <option className="flex justify-center items-center p-2" value="low-to-high">Sort by price: Low to High</option>

                    </select>

                    <img className="absolute top-1/2 -translate-y-1/2 right-3 mt-[1px] rotate-90 " src={arrow} alt="arrow" ></img>
                </div>
            </div>
        
            {/* cards */}
            <div className="my-10 grid grid-cols-undeLargeDevice 2xl:grid-cols-aboveLargeDevice  gap-7 max-md:my-5 ">
                {
                    currentPuppies.map((item, index) => {
                        // console.log(item)
                        return <Link to={'/moreInfo'}><Card id={item.id} age={item.age} gender={item.gender} price={item.price} img={item.photo} key={index} /></Link> 
                    })
                }
            </div>


            {/* pages */}
            <div className="flex justify-center items-center gap-3 my-5">
                <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1} className="px-0.5 py-0.5 rounded-lg" >
                    <img src={arrow2} alt="arrow right" />
                </button>

                {Array.from({ length: totalPages }, (_, i) => (
                    <button key={i} onClick={() => setCurrentPage(i + 1)} className={`pt-1.5 pb-1 px-3.5 py-2  rounded-lg font-sfpro font-bold text-lg text-darkBlue  ${currentPage === i + 1 ? 'bg-darkBlue text-white' : ''}`} >
                        {i + 1}
                    </button>
                ))}

                <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages} className="px-0.5 py-0.5 rounded-lg" >
                    <img className="rotate-180" src={arrow2} alt="arrow right" />
                </button>
            </div>

        </div>
    </section>
  )
}

export default Filter