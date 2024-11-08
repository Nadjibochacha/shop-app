import React from 'react'
import prod3 from '../assets/prod3.png'
import prod4 from '../assets/prod4.png'

const TopRate = () => {

    const Products = [
        {
            id:0,
            name:"product 1",
            img: prod3,
            rate:5,
        },
        {
            id:1,
            name:"product 2",
            img: prod3,
            rate:4.9,
        },
        {
            id:2,
            name:"product 3",
            img: prod4,
            rate:5,
        }
    ]

  return (
    <div>
        <div className="container">
            <div className="text-center mb-10 max-w-[600px] mx-auto">
                <p data-aos='fade-up' className="text-sm text-primary capitalize">
                    top selling products for you
                </p>
                <h1 data-aos='fade-up' className="text-3xl uppercase font-bold">
                    top rated products
                </h1>
                <p data-aos='fade-up' className="text-xs text-gray-400">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Unde cum voluptate facilis esse commodi fugit!
                </p>
            </div>
            <div>
                

            </div>
        </div>
    </div>
  )
}

export default TopRate