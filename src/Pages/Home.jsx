import React from 'react'
import Cards from '../Components/Cards'
import Header from '../Components/Header'
import { RiTodoLine } from 'react-icons/ri'
import { AiOutlinePieChart } from 'react-icons/ai'
import { BsFillBriefcaseFill } from 'react-icons/bs'
import Contents from '../Components/Contents'

const Home = ({ options, setOptions }) => {
    return (
        <div className='main'>
            <Header options={options} setOptions={setOptions} />
            <main className='mt-10 md:mt-20 xl:mt-40 px-8 py-8 md:px-10 lg:px-20'>
                <section className='flex flex-col items-center justify-center md:flex-row gap-4'>
                    <Cards title='Your Bid' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' icons={<RiTodoLine className='text-4xl xl:text-5xl' />} />
                    <Cards title='Data Driven' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' icons={<AiOutlinePieChart className='text-4xl xl:text-5xl' />} />
                    <Cards title='Unlimited' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' icons={<BsFillBriefcaseFill className='text-4xl xl:text-5xl' />} />
                </section>
                <Contents />
            </main>
        </div>
    )
}

export default Home