import React from 'react'
import prod1 from '../assets/prod.png'
import prod2 from '../assets/prod1.jpg'
import prod3 from '../assets/shopping.png'
import { FaStar } from 'react-icons/fa6'



const Products = () => {

    const Products = [
        {
            id:0,
            name:"product 1",
            img: prod1,
            rate:5,
        },
        {
            id:1,
            name:"product 2",
            img: prod2,
            rate:3.4,
        },
        {
            id:2,
            name:"product 3",
            img: prod3,
            rate:4.7,
        },
        {
            id:3,
            name:"product 4",
            img: prod2,
            rate:5,
        },
        {
            id:4,
            name:"product 5",
            img: prod1,
            rate:4.6,
        },
    ]

  return (
    <div className='mt-14 mb-10'>
        <div className="container">
            <div className="text-center mb-10 max-w-[600px] mx-auto">
                <p data-aos='fade-up' className="text-sm text-primary capitalize">
                    top selling products for you
                </p>
                <h1 data-aos='fade-up' className="text-3xl uppercase font-bold">
                    prodacts
                </h1>
                <p data-aos='fade-up' className="text-xs text-gray-400">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Unde cum voluptate facilis esse commodi fugit!
                </p>
            </div>
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
                    {
                        Products.map((product) => (
                            <div key={product.id} data-aos='fade-up' data-aos-delay={800} className='space-y-3'>
                                <img src={product.img} alt="" className='h-[220px] w-[150px] object-cover rounded-md'/>
                                <div>
                                    <h3 className="font-semibold">{product.name}</h3>
                                    <div className='flex items-center gap-2'>
                                        <FaStar className='text-yellow-500'/>
                                        <span>{product.rate}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='my-3'>
                <button className="bg-secondary transition-all duration-300 hover:bg-secondary/70 text-white py-1 px-4 rounded-full">
                    all products
                </button>
            </div>
        </div>
    </div>
  )
}

export default Products