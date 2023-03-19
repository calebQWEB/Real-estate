import React from 'react'

const Categories = ({ category, value }) => {
    return (
        <div>
            <div>
                <div>
                    <span className='lg:text-sm md:text-xs text-gray-500  cursor-pointer md:rounded-tr-lg font-bold'>{category}</span>
                    <p className='md:text-sm lg:text-lg font-bold'>{value}</p>
                </div>
            </div>
        </div>
    )
}

export default Categories