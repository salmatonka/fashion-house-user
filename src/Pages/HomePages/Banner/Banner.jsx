import React from 'react'
import { Link } from 'react-router-dom'
import { Parallax } from 'react-parallax';
import { Typewriter } from 'react-simple-typewriter';
const Banner = () => {
  return (

    // <div >
    //     <div className="dark:bg-gray-100 dark:text-gray-800 max-w-screen-xl mx-auto">
    //         <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
    //             <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
    //                 <p className="text-3xl font-bold leading-none sm:text-2xl">Gifting made easy</p>
    //                 <h1 className="text-6xl font-bold leading-none sm:text-3xl pt-2">Super value deals</h1>
    //                 <h1 className="text-5xl font-bold leading-none sm:text-3xl pt-2">On all products</h1>
    //                 <p className="mt-4 mb-8 text-lg sm:mb-12">Save more with coupons & up to 50% off
    //                 </p>
    //                 <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
    //                     <Link  to="/" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50">fff</Link>
    //                     <Link to="/" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800">Shop Now</Link>
    //                 </div>
    //             </div>
    //             <div className=" flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
    //                 <img src="https://timely-melba-4eb98e.netlify.app/images/aotcbsc_summer-fashion_625x300_27_April_22-removebg-preview.png" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
    //             </div>
    //         </div>
    //     </div>
    // </div>

    //   <Parallax
    //   blur={{ min: -50, max: 50 }}
    //   bgImage='https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg'
    //   bgImageAlt="the menu"
    //   strength={-200}
    // >
    //   {/* <div className="hero h-[700px]">
    //           <div className="hero-overlay bg-opacity-60"></div>
    //           <div className="hero-content text-center text-neutral-content">
    //               <div className="max-w-md">
    //                   <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
    //                   <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

    //               </div>
    //           </div>
    //       </div> */}

    //   <div className="hero min-h-screen" >
    //     {/* <div className="hero-overlay bg-opacity-60"></div> */}
    //     <div className="hero-content text-center text-neutral-content">
    //       <div className="text-center pt-20 mx-auto   h-96 lg:w-[1000px] bg-black bg-opacity-30 text-gray-600">
    //         <h1 className="text-5xl font-semibold text-white mt-8 mb-4">Gifting made easy</h1>
    //         <p className=" text-white text-xl  px-10">SR Fashion House is the easiest way
    //          to exchange gifts with friends and family for birthdays, holidays, and more!</p>


    //       </div>
    //     </div>
    //   </div>

    // </Parallax>

    <>
      <div className=''>

        <div className="carousel w-full h-[650px]">
          <div id="slide1" className="carousel-item relative w-full">
            <img src='https://asset20.ckassets.com/blog/wp-content/uploads/sites/5/2021/12/Womens-Clothing.jpg' alt="" className="w-full bannerimg" />
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
              <a href="#slide4" className="btn btn-circle bg-green-500 mr-8">❮</a>
              <a href="#slide2" className="btn btn-circle bg-green-500">❯</a>
            </div>
            <div className='absolute  left-3 md:left-36 top-1/3'>
              <h2 className='text-5xl text-white font-bold'>
                <Typewriter
                  words={['SR Fashion House']}
                  loop={5}
                  cursor
                  cursorStyle='_'
                  typeSpeed={100}
                  deleteSpeed={100}
                  delaySpeed={3000}

                />
              </h2>
              <p className='text-2xl text-white mt-3 font-semibold'>SR Fashion House is the easiest way to exchange gifts with friends and family for birthdays, holidays, and more!</p>

            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src='https://asset20.ckassets.com/blog/wp-content/uploads/sites/5/2021/12/Womens-Clothing.jpg' alt="" className="w-full bannerimg" />
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
              <a href="#slide1" className="btn btn-circle bg-green-500 mr-8">❮</a>
              <a href="#slide3" className="btn btn-circle bg-green-500">❯</a>
            </div>
            <div className='absolute  left-3 md:left-36 top-1/3'>
              <h2 className='text-5xl text-white font-bold'>SR Fashion House</h2>
              <p className='text-2xl text-white mt-3 font-semibold'>SR Fashion House is the easiest way to exchange gifts with friends and family for birthdays, holidays, and more!</p>

            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src='https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg' alt="" className="w-full bannerimg" />
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
              <a href="#slide2" className="btn btn-circle bg-green-500 mr-8">❮</a>
              <a href="#slide1" className="btn btn-circle bg-green-500">❯</a>
            </div>
            <div className='absolute left-3 md:left-36 top-1/3'>
              <h2 className='text-5xl text-white font-bold'>SR Fashion House</h2>
              <p className='text-2xl text-white mt-3 font-semibold'>SR Fashion House is the easiest way to exchange gifts with friends and family for birthdays, holidays, and more!</p>

            </div>
          </div>

        </div>
        {/* web title and web description */}
        <div className='mt-20 max-w-[1240px] mx-auto'>
          {/* <h3 className='text-3xl uppercase text-center text-[#1159AB] font-bold'>Select the Category</h3> */}

        </div>
      </div>

    </>

  )
}

export default Banner
