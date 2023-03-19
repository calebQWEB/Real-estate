import React, { useState } from 'react'
import HeroDuplex from '../assets/duplex.png'
import Categories from './categories'
import { BsChevronCompactUp, BsChevronCompactDown } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Header = () => {

    const city = ['Lagos', 'Abuja', 'Enugu']
    const property_type = ['Duplex', 'Commercial Property', 'Apartment']
    const price_range = ['$1,000 - $1,500', '$2,000 - $3,000', '$5,000 - $7,000']

    const [count, setCount] = useState(0);
    const [propertyCount, setPropertyCount] = useState(0)
    const [priceCount, setPriceCount] = useState(0)

    const [buy, setBuy] = useState(true)
    const [rent, setRent] = useState(false)
    const [coLiving, setCoLiving] = useState(false)

    const handleClick = (type) => {

        switch (type) {
            case 'buy':
                setBuy(true)
                setRent(false)
                setCoLiving(false)
                break
            case 'rent':
                setBuy(false)
                setRent(true)
                setCoLiving(false)
                break
            case 'coLiving':
                setBuy(false)
                setRent(false)
                setCoLiving(true)
                break

            default:
                break

        }
    };

    const incrementCount = () => {
        if (count < city.length - 1) {
            setCount(count + 1)
        }
    };

    const decrementCount = () => {
        if (count !== 0) {
            setCount(count - 1);
        }
    };

    const incrementProperty = () => {
        if (propertyCount < property_type.length - 1) {
            setPropertyCount(propertyCount + 1);
        }
    };

    const decrementProperty = () => {
        if (propertyCount !== 0) {
            setPropertyCount(propertyCount - 1);
        }
    };

    const incrementPrice = () => {
        if (priceCount < price_range.length - 1) {
            setPriceCount(priceCount + 1);
        }
    };

    const decrementPrice = () => {
        if (priceCount !== 0) {
            setPriceCount(priceCount - 1);
        }
    };

    const cityValue = city[count]
    const propertyValue = property_type[propertyCount]
    const priceValue = price_range[priceCount]

    return (
        <header className='px-8 py-8 md:px-10 lg:px-20'>
            <div className='flex items-center flex-col gap-8 md:bg-gray-300 md:flex md:flex-row rounded-lg relative'>
                <article className='text-center md:text-start px-6'>
                    <h1 className='font-medium text-3xl md:text-xl lg:text-3xl xl:text-5xl'>The ease of buying a dream house</h1>
                    <p className='pt-4 text-base md:text-sm lg:text-xl'>Get expert advice on the real estate market, talk to our team today!</p>
                    <button className='mt-6 md:mt-4 rounded-lg bg-blue-400 p-3 text-white md:text-sm lg:text-xl button'>Contact us</button>
                </article>
                <picture>
                    <img src={HeroDuplex} className='rounded-r-lg' />
                </picture>

                {/* Categories Overall Container*/}
                <div className='categories'>

                    {/* Categories */}
                    <div className='flex items-center justify-center md:justify-start'>
                        <button className={`text-xs md:text-xs lg:text-base py-3 px-7 sm:w-40 md:w-40 lg:px-10 ${buy ? ' bg-white' : 'bg-gray-400'} cursor-pointer border-l-2 border-l-black border-t-2 border-t-black md:border-none`} onClick={() => handleClick('buy')}>Buy</button>
                        <button className={`text-xs md:text-xs lg:text-base py-3 px-7 sm:w-40 md:w-40 lg:px-10 ${rent ? ' bg-white' : 'bg-gray-400'} bg-gray-400 cursor-pointer border-t-2 border-t-black md:border-none`} onClick={() => handleClick('rent')}>Rent</button>
                        <button className={`text-xs md:text-xs lg:text-base py-3 px-7 sm:w-40 md:w-40 lg:px-10 ${coLiving ? ' bg-white' : 'bg-gray-400'} bg-gray-400 md:rounded-tr-lg cursor-pointer border-r-2 border-r-black border-t-2 border-t-black md:border-none`} onClick={() => handleClick('coLiving')}>Co-Living</button>
                    </div>

                    {/* Choices Container*/}
                    <div className='md:bg-white py-10 md:py-4 lg:py-8 md:px-4 flex flex-col md:flex-row gap-10 items-center text-center md:text-start justify-between shadow-md shadow-blue-300 md:rounded-r-lg md:rounded-br-lg w-full md:w-full border'>
                        <div className='flex items-end justify-center gap-4'>
                            <Categories category='City' value={city[count]} count={count} setCount={setCount} />
                            <div>
                                <BsChevronCompactUp className='cursor-pointer hover:bg-gray-400' onClick={decrementCount} />
                                <BsChevronCompactDown className='cursor-pointer hover:bg-gray-400' onClick={incrementCount} />
                            </div>
                        </div>

                        <div className='flex items-end justify-center gap-4'>
                            <Categories category='Property Type' value={property_type[propertyCount]} />
                            <div>
                                <BsChevronCompactUp className='cursor-pointer hover:bg-gray-400' onClick={decrementProperty} />
                                <BsChevronCompactDown className='cursor-pointer hover:bg-gray-400' onClick={incrementProperty} />
                            </div>
                        </div>

                        <div className='flex items-end justify-center gap-4'>
                            <Categories category='Price Range' value={price_range[priceCount]} />
                            <div>
                                <BsChevronCompactUp className='cursor-pointer hover:bg-gray-400' onClick={decrementPrice} />
                                <BsChevronCompactDown className='cursor-pointer hover:bg-gray-400' onClick={incrementPrice} />
                            </div>
                        </div>
                        <Link to={`/Pages/${cityValue}/${propertyValue}/${priceValue}/details`}>
                            <button className='rounded-lg bg-blue-400 py-3 px-8 text-white lg:text-xl md:text-sm button'>Search</button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header