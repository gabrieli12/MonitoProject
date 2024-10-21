import React, { useState } from 'react'

const TimeBox = ({number, name}) => {
  return (
    <div className='flex flex-col justify-center items-center bg-darkBlue rounded-[22px] w-[267.89px] h-[199px] '>
      <h2 className='font-poppins font-black text-[64px] text-center text-white'>{number}</h2>
      <p className='font-poppins text-center font-light text-white opacity-85'>{name}</p>
    </div>
  )
}


function Time() {
  const newYear = "2025-01-01"
  let [days, setDays] = useState(0)  
  let [hours, setHours] = useState(0) 
  let [minutes, setMinutes] = useState(0) 
  let [seconds, setSeconds] = useState(0)


  const countDown = () => {
    let newYearDate = new Date(newYear)
    let currentDate = new Date()

    let totalSeconds = (newYearDate - currentDate) / 1000

    setDays(Math.floor(totalSeconds / 3600 / 24))
    setHours(Math.floor((totalSeconds / 3600) % 24))
    setMinutes(Math.floor((totalSeconds / 60) % 60))
    setSeconds(Math.floor(totalSeconds % 60))
  }
  setInterval(countDown, 1000)



  return (
    <section className='mb-24 flex- flex-col justify-center items-center max-2md:hidden'>
      <h2 className='text-darkBlue text-5xl font-black font-notoGeorgian'>Big Summer Event</h2>

      <div className='w-full flex justify-between gap-10 mt-16'>
        <TimeBox number={days} name='DAYS' />
        <TimeBox number={hours} name='HOURS' />
        <TimeBox number={minutes} name='MINUTES' />
        <TimeBox number={seconds} name='SECONDS' />

      </div>

    </section>
  )
}

export default Time