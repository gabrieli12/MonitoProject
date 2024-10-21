

function PetsCard({id, age, gender, price, img}) {
  return (
    <div className='flex flex-col relative p-2 bg-white gap-2 justify-center items-center my-shadow rounded-xl'>
        <img className='rounded-[10px] w-full' src={img} alt="pupie image" />
        <div className='flex flex-col px-2 py-2 pb-3 gap-0.5 font-sfpro w-full'>
            <p className='text-[#00171F] font-bold'>{id}</p>
            <div className='flex justify-start items-center gap-2 mt-1'>
                <p className='text-xs text-gray tracking-wide'>Gene: <span className='font-semibold'>{gender}</span></p>
                <div className='w-[5px] h-[5px] bg-gray rounded-full'></div>
                <p className='text-xs text-gray tracking-wide'>Age: <span className='font-semibold'>{age}</span></p>
            </div>
            <p className='text-[#00171F] font-bold text-sm'>{price}</p>
        </div>
    </div>
  )
}

export default PetsCard