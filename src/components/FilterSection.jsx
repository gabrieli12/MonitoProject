import React, { useEffect, useState } from 'react'
import { useLang } from './LangProvider';
import { puppies } from '../data/pupiesData/data';

function FilterSection() {

    const {selectedGenders, setSelectedGenders, selectedColors, setSelectedColors, minPrice, setMinPrice, maxPrice, setMaxPrice, selectedBreeds, setSelectedBreeds, filterDisplay} = useLang()




    


    const handleCheckboxChange = (value, setter) => {
        setter(prevState => {
            if (prevState.includes(value)) {
                return prevState.filter(item => item !== value);
            } else {
                return [...prevState, value];
            }

        });
        console.log('changded')
    };

    // useEffect(() => {
    //     console.log('Selected Genders: ', selectedGenders);
    // }, [selectedGenders]);


      


    return (
        <aside className={`flex flex-col text-[#00171F] font-sfpro w-[280px] mb-20 ${filterDisplay ? 'max-md:visible' : 'max-md:hidden'} `}>
            <h2 className='text-darkBlue font-sfpro text-2xl font-bold'>Filter</h2>
            {/* gender */}
            <div className='flex flex-col gap-2 py-4 border-b border-[#EBEEEF] '>
                <p className='font-bold'>Gender</p>
                <label className="flex gap-2 font-medium text-sm justify-start items-center">
                    <input type="checkbox" value="Male" checked={selectedGenders.includes('Male')} onChange={() => handleCheckboxChange('Male', setSelectedGenders)} /> Male
                </label>

                <label className="flex gap-2 font-medium text-sm justify-start items-center ">
                    <input type="checkbox" value="Female" checked={selectedGenders.includes('Female')} onChange={() => handleCheckboxChange('Female', setSelectedGenders)} /> Female
                </label>
            </div>

            {/* colors */}
            <div className='flex flex-col gap-2 py-4 border-b border-[#EBEEEF] ' >
                <p className='font-bold'>Gender</p>

                <label className="flex justify-start items-center gap-2 font-medium text-sm ">
                    <input type="checkbox" value="Red" checked={selectedColors.includes('Red')} onChange={() => handleCheckboxChange('Red', setSelectedColors)} /> <div className='w-4 h-4 rounded-full bg-[#FF564F]'></div> Red
                </label>

                <label className="flex justify-start items-center gap-2 font-medium text-sm ">
                    <input type="checkbox" value="Apricot" checked={selectedColors.includes('Apricot')} onChange={() => handleCheckboxChange('Apricot', setSelectedColors)} /> <div className='w-4 h-4 rounded-full bg-[#FFB672]'></div> Apricot
                </label>

                <label className="flex justify-start items-center gap-2 font-medium text-sm ">
                    <input type="checkbox" value="Black" checked={selectedColors.includes('Black')} onChange={() => handleCheckboxChange('Black', setSelectedColors)} /> <div className='w-4 h-4 rounded-full bg-[#242B33]'></div> Black
                </label>

                <label className="flex justify-start items-center gap-2 font-medium text-sm ">
                    <input type="checkbox" value="Black & White" checked={selectedColors.includes('Black & White')} onChange={() => handleCheckboxChange('Black & White', setSelectedColors)} /> <div className='w-4 h-4 rounded-full gradient'></div> Black & White
                </label>

                <label className="flex justify-start items-center gap-2 font-medium text-sm ">
                    <input type="checkbox" value="Silver" checked={selectedColors.includes('Silver')} onChange={() => handleCheckboxChange('Silver', setSelectedColors)} /> <div className='w-4 h-4 rounded-full bg-[#CECECE]'></div> Silver
                </label>

                <label className="flex justify-start items-center gap-2 font-medium text-sm ">
                    <input type="checkbox" value="Tan" checked={selectedColors.includes('Tan')} onChange={() => handleCheckboxChange('Tan', setSelectedColors)} /> <div className='w-4 h-4 rounded-full bg-[#FFF7CE]'></div> Tan
                </label>




                

            </div>

            {/* price */}
            <div className='flex flex-col gap-2 py-4 border-b w-full relative border-[#EBEEEF] ' >
                <p className='font-bold'>Price</p>
                <div className='flex justify-between items-center gap-4 w-full'>
                    <input type="number" placeholder="Min Price" value={minPrice} onChange={(e) => setMinPrice(Number(e.target.value))} className="text-sm font-medium font-sfpro border-b outline-none border-[#EBEEEF] p-2.5 w-1/2 " />
                    <input type="number" placeholder="Max Price" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} className="text-sm font-medium font-sfpro border-b outline-none border-[#EBEEEF] p-2.5 w-1/2" />
                </div>

        
            </div>

            {/* breed */}
            <div className='flex flex-col gap-2 py-4 border-b border-[#EBEEEF] '>
                <p className='font-bold'>Breed</p>
                <label className="flex gap-2 font-medium text-sm justify-start items-center">
                    <input type="checkbox" value="small" checked={selectedBreeds.includes('small')} onChange={() => handleCheckboxChange('small', setSelectedBreeds)} /> Small
                </label>

                <label className="flex gap-2 font-medium text-sm justify-start items-center">
                    <input type="checkbox" value="medium" checked={selectedBreeds.includes('medium')} onChange={() => handleCheckboxChange('medium', setSelectedBreeds)} /> Medium
                </label>

                <label className="flex gap-2 font-medium text-sm justify-start items-center">
                    <input type="checkbox" value="large" checked={selectedBreeds.includes('large')} onChange={() => handleCheckboxChange('large', setSelectedBreeds)} /> Large
                </label>
            </div>
        </aside>
    )
}

export default FilterSection