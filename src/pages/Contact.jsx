import map from '../assets/images/map.png'
import phone from '../assets/icons/phone.png'
import fax from '../assets/icons/fax.png'
import email from '../assets/icons/email.png'






function Contact() {
  return (
    <section className="flex justify-center items-center padding gap-14 my-28 max-lg:flex-col ">
      <div className='max-w-[545px] flex flex-col gap-10 '>
        <div className='flex flex-col gap-5'>
          <h2 className='font-montserrat text-darkBlue font-bold text-[54px] max-xl:text-5xl '>Get in Touch</h2>
          <p className='font-montserrat font-semibold text-sm leading-6'>Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.</p>
        </div>

        <form className='flex flex-col gap-5' action="">
          <input type="text" className='py-3 px-5 border border-[#E0E0E0] w-full text-sm font-montserrat font-normal ' placeholder='Name *' />
          <input type="text" className='py-3 px-5 border border-[#E0E0E0] w-full text-sm font-montserrat font-normal ' placeholder='Name *' />
          <input type="text" className='py-3 px-5 border border-[#E0E0E0] w-full text-sm font-montserrat font-normal ' placeholder='Name *' />
          <select name="name" className='py-3 px-5 border border-[#E0E0E0] outline-none text-sm font-montserrat font-normal text-[#000000]' >
            <option value="1">How did you find us?</option>
            <option value="2">How did you find us?</option>
            <option value="3">How did you find us?</option>
          </select>

          <button className='bg-darkBlue py-3 px-6 font-montserrat font-bold text-white  '>SEND</button>
        </form>

        <div className='flex justify-between items-center flex-wrap gap-4 '>
          <div className='flex justify-center items-center gap-[15px]'>
            <img src={phone} alt="phone icon" />
            <p className='font-montserrat font-bold text-sm'>PHONE <br /> <span className='text-[#003459] font-medium opacity-70'>03 5432 1234</span></p>
          </div>

          <div className='flex justify-center items-center gap-[15px]'>
            <img src={fax} alt="fax icon" />
            <p className='font-montserrat font-bold text-sm'>FAX <br /> <span className='font-medium opacity-70'>03 5432 1234</span></p>
          </div>

          <div className='flex justify-center items-center gap-[15px]'>
            <img src={email} alt="email icon" />
            <p className='font-montserrat font-bold text-sm'>EMAIL <br /> <span className='font-medium opacity-70'>info@marcc.com.au</span></p>
          </div>
        </div>

      </div>

      <img className='max-w-[545px] max-xl:max-w-[445px] max-lg:max-w-full ' src={map} alt="map" />

    </section>
  )
}

export default Contact