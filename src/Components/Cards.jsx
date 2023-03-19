import React from 'react'
import { motion } from 'framer-motion'


const Cards = ({ icons, title, description }) => {
    return (
        <div className='card-container'>
            <div className='card-front'>
                <div className='inner-card text-center bg-blue-400 shadow shadow-gray-400 p-4 h-72 md:h-52 md:w-52 lg:w-60 lg:h-60 xl:w-80 xl:h-80 flex items-center justify-center flex-col gap-3 cursor-pointer'>
                    <div>{icons}</div>
                    <h1 className='text-xl font-bold'>{title}</h1>
                    <p className='text-base md:hidden'>{description}</p>
                </div>
            </div>
            <div className='card-back'>
                <div className='inner-card text-center bg-red-300 p-4 h-72 md:h-52 md:w-52 lg:w-60 lg:h-60 xl:w-80 xl:h-80 flex items-center justify-center flex-col gap-3 cursor-pointer'>
                    <h1 className='text-xl font-bold'>Back of card</h1>
                    <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <button className='bg-blue-500 text-white p-2 rounded-md'>Click me</button>
                </div>
            </div>
        </div>
    )
}

export default Cards