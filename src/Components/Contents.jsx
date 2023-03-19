import React from 'react'
import pic1 from '../assets/pic-1.jpg'
import pic2 from '../assets/pic-2.jpg'
import pic3 from '../assets/pic-3.jpg'
import { BsSearch } from 'react-icons/bs'

const Contents = () => {
    return (
        <section className='mt-20'>
            <div className='flex flex-col items-center justify-center gap-20 md:gap-40'>
                <div className='md:flex items-center justify-between gap-3 md:gap-6 xl:gap-20'>
                    <picture><img src={pic1} alt='content picture' /></picture>
                    <article className='md:order-1 text-center md:text-start'>
                        <h2 className='text-xl lg:text-2xl xl:text-3xl font-semibold mt-2'>Proven expertise for luxury homes</h2>
                        <p className='text-sm lg:text-base xl:text-lg mt-2'>Whether you're searching for houses, apartments, or condos, it's easy to find a place you'll love.</p>
                        <button className='mt-5 bg-blue-400 py-3 px-6 rounded-lg button'>Learn more</button>
                    </article>
                </div>

                <div className='md:flex items-center justify-between gap-3 md:gap-6 xl:gap-20'>
                    <picture className='md:order-2'><img src={pic2} alt='content picture' /></picture>
                    <article className='md:order-1 text-center md:text-start'>
                        <h2 className='text-xl lg:text-2xl xl:text-3xl font-semibold mt-2'>Sell for more than the home next door</h2>
                        <p className='text-sm lg:text-base xl:text-lg mt-2'>For seven years running, independent research has proven that homes listed with Redfin sell for more than comparable homes.</p>
                        <div className='mt-5 flex items-center justify-center md:items-start md:justify-start gap-1'>
                            <input type='text' placeholder='Enter your street adress' className='border py-3 px-6 border-1 border-gray-500 rounded-lg' />
                            <button className='py-3 px-5 bg-blue-400 rounded-lg button'>Next</button>
                        </div>
                    </article>
                </div>

                <div className='md:flex items-center justify-between gap-3 md:gap-6 xl:gap-20'>
                    <picture><img src={pic3} alt='content picture' /></picture>
                    <article className='md:order-1 text-center md:text-start'>
                        <h2 className='text-xl lg:text-2xl xl:text-3xl font-semibold mt-2'>Proven expertise for luxury homes</h2>
                        <p className='text-sm lg:text-base xl:text-lg mt-2'>Whether you're searching for houses, apartments, or condos, it's easy to find a place you'll love.</p>
                        <div className='mt-5 flex items-center justify-center md:items-start md:justify-start gap-1'>
                            <input type='text' placeholder='Enter your street adress' className='border py-3 px-6 border-1 border-gray-500 rounded-lg' />
                            <button className='py-3 px-5 bg-blue-400 rounded-lg button'>Next</button>
                        </div>
                    </article>
                </div>

                <div className='text-center'>
                    <h2 className='text-xl lg:text-2xl xl:text-3xl font-semibold mt-2'>Talk to an agent</h2>
                    <p className='text-sm lg:text-base xl:text-lg mt-2'>You will be connected with an expert local agent- there's no pressure or obligation.</p>
                    <div className='mt-5 flex items-center justify-center'>
                        <input type='text' placeholder='Enter your street adress' className='border py-3 px-6 border-1 border-gray-500' />
                        <div className='p-3 bg-blue-400 button'><BsSearch className='text-2xl' /></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contents