import React from 'react'
import image1 from "../assets/women.png"
import image3 from "../assets/sale.png"
import image2 from "../assets/shopping.png"
import Slider from "react-slick"


const imageList = [
    {
        id: 1,
        img: image1,
        title: "30% off on all women's wear",
        description: "Lorem ipsum, accusamus a minima eaque, ipsa totam, reprehenderit at! Excepturi quia obcaecati libero.",
    },
    {
        id: 2,
        img: image2,
        title: "20% off on all men's wear",
        description: "Lorem ipsum, accusamus a minima eaque, ipsa totam, reprehenderit at! Excepturi quia obcaecati libero.",
    },
    {
        id: 3,
        img: image3,
        title: "70% off on all products",
        description: "Lorem ipsum, accusamus a minima eaque, ipsa totam, reprehenderit at! Excepturi quia obcaecati libero.",
    }
]

const Hero = () => {

    var settings = {
        dots: false,
        infinte: true,
        speed:900,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-out",
        pauseOnHover: true,
        pauseOnFocus: false
    }
    
  return (
    <div className='relative overflow-hidden bg-gray-100 flex justify-center items-center'>
        <div className="h-[700px] w-[700px] bg-primary/40 absolute
        -top-1/2 right-0 rounded-3xl rotate-45"></div>
        <div className="container pb-8 sm:pb-0">
            <Slider {...settings}>
                {
                    imageList.map((image, index)=>(
                        <div key={index}>
                            <div className="grid grid-cols-1 sm:grid-cols-2">
                                <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm: order-1 relative z-10'>
                                    <h1 data-aos='zoom-out' data-aos-duration='500' data-aos-once='true' className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                                        {image.title}
                                    </h1>
                                    <p data-aos='fide-up' data-aos-duration='500'  data-aos-delay='100' className="text-sm">
                                        {image.description}
                                    </p>
                                    <button data-aos='fide-up' data-aos-duration='500'  data-aos-delay='300' className='bg-secondary transition-all duration-300 hover:bg-secondary/70 text-white py-1 px-4 rounded-full'>order now</button>
                                </div>

                                <div className='order-1 sm:order-2'>
                                    <div>
                                        <img src={image.img} alt="" className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-125 object-contain mx-auto' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Slider>
            
        </div>
    </div>
  )
}

export default Hero