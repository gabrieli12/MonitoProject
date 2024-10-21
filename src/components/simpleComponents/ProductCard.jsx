import giftIcon from '../../assets/icons/gift-icon.png'



function ProductCard({id, type, size, price, img, promotion}) {
  return (
    <div className='flex flex-col relative p-2 bg-white gap-2 justify-center items-center my-shadow rounded-xl'>
      <img className='rounded-[10px] w-full' src={img} alt="pupie image" />
      <div className='flex flex-col px-2 py-2 pb-3 gap-0.5 font-sfpro w-full'>
          <p className='text-[#00171F] font-bold'>{id}</p>
          <div className='flex justify-start items-center gap-2 mt-1'>
              <p className='text-xs text-gray tracking-wide'>Product: <span className='font-semibold'>{type}</span></p>
              <div className='w-[5px] h-[5px] bg-gray rounded-full'></div>
              <p className='text-xs text-gray tracking-wide'>Size: <span className='font-semibold'>{size}</span></p>
          </div>
          <p className='text-[#00171F] font-bold text-sm'>{price}</p>
          <button className='flex gap-0.5 text-[#002A48] bg-[#FCEED5] px-2.5 pt-1.5 pb-1 rounded-lg mt-3' >
            <img src={giftIcon} alt="gift icon" />
            <div className='w-[5px] h-[5px] bg-darkBlue rounded-full'></div>
            {promotion}
          </button>
      </div>
    </div>

  )
}

export default ProductCard