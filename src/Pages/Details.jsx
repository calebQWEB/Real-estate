import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../../index'

const Details = () => {
    const { cityValue, propertyValue, priceValue } = useParams()

    const searched = data.find(item => item.city === cityValue && item.property_type === propertyValue && item.price_range === priceValue)
    console.log(searched)

    return (
        <div className='main px-8 py-8 md:px-10 lg:px-20'>
            <div className='flex flex-col items-center justify-between gap-4 text-center'>
                <img src={searched.picture} />
                <h1 className='text-xl font-bold sm:text-2xl xl:text-3xl'>{searched.city}, <span className=''>{searched.location}</span></h1>
                <p className='font-semibold sm:text-xl'>Type: <span className='font-medium text-sm lg:text-base'>{searched.property_type}</span></p>
                <p className='font-semibold sm:text-xl'>Price: <span className='font-medium text-sm lg:text-base'>{searched.price_range}</span></p>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non nisi est sit amet facilisis magna etiam tempor orci. Orci porta non</p>
                    <p>tempus iaculis urna id volutpat lacus. Vitae congue mauris rhoncus aenean vel elit. Enim nunc faucibus a pellentesque sit amet. Ut consequat semper viverra nam.</p>
                </div>
            </div>
        </div>
    )
}

export default Details