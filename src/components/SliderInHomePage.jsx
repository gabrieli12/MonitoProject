import React, { useState, useEffect } from 'react';
import image1 from '../assets/images/sliderImages/image-1.png'
import image2 from '../assets/images/sliderImages/image-2.png'
import image3 from '../assets/images/sliderImages/image-3.png'


function SliderInHomePage() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const [number, setNumber] = useState(3);


    useEffect(() => {
      const updateBackgroundImage = () => {
        if (window.innerWidth < 768) {
          setNumber(2);
        } else{
          setNumber(3)
        }
        if(window.innerWidth < 640) {
          setNumber(1)
          console.log('sas')
        }
      };
      updateBackgroundImage();
  
      window.addEventListener('resize', updateBackgroundImage);
  
      return () => {
        window.removeEventListener('resize', updateBackgroundImage);
      };
    }, []);
  
  
    const slides = [
      {
        title: "What is a Pomeranian? How to Identify Pomeranian Dogs",
        description: "The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed.",
        imgSrc: image3,
      },
      {
        title: "Dog Diet You Need To Know",
        description: "Dividing a dog's diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially newborn puppies with relatively weak resistance.",
        imgSrc: image1,
      },
      {
        title: "Why Dogs Bite and Destroy Furniture and How to Prevent It",
        description: "Dog bites are common during development. However, no one wants to see their furniture or important items being bitten by a dog.",
        imgSrc: image2,
      },
    ];


    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const visibleSlides = [
      slides[currentSlide],
      slides[(currentSlide + 1) % slides.length],
      slides[(currentSlide + 2) % slides.length],
    ];

  return (
    <section className='flex flex-col my-20 gap-5'>
      <div className="flex justify-between items-center">
          <div className="flex flex-col gap-1">
              <p className="font-sfpro font-medium">You already know ?</p>
              <p className="font-sfpro font-bold text-2xl text-darkBlue">Useful Pet Knowledge</p>
          </div>

          <div className='flex relative gap-8 max-sm:hidden'>
              <button onClick={prevSlide} className="w-[76px] bg-white py-3 px-7 rounded-[57px] border-[1.5px] border-darkBlue font-bold " >
                &lt;
              </button>
              <button onClick={nextSlide} className="w-[76px] bg-white py-3 px-7 rounded-[57px] border-[1.5px] border-darkBlue font-bold ">
                &gt;
              </button>
          </div>


      </div>


      <div className="flex justify-between items-start gap-10 max-sm:justify-center ">
        {visibleSlides.slice(0,number).map((slide, index) => (
          <div key={index} className="p-2 rounded-xl my-shadow flex flex-col justify-start items-start gap-3 w-1/2 max-h-[424px)] max-sm:w-full ">
            <img src={slide.imgSrc} alt={slide.title} className="w-full rounded-xl " />
            <div className="p-2 flex flex-col justify-start items-start gap-2">
              <p className='bg-[#00A7E7] rounded-[28px] text-white font-sfpro font-bold text-[10px] py-0.5 px-2.5 '>Pet Knowledge</p>
              <h2 className="w-5/6 text-base font-sfpro text-[#00171F] font-bold leading-6">{slide.title}</h2>
              <p className="text-[#242B33] text-sm font-sfpro">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className='flex justify-center relative gap-8 sm:hidden'>
              <button onClick={prevSlide} className="w-[76px] bg-white py-3 px-7 rounded-[57px] border-[1.5px] border-darkBlue font-bold " >
                &lt;
              </button>
              <button onClick={nextSlide} className="w-[76px] bg-white py-3 px-7 rounded-[57px] border-[1.5px] border-darkBlue font-bold ">
                &gt;
              </button>
      </div>



    </section>
  )}

export default SliderInHomePage