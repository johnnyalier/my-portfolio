import React from 'react'

const HomePage = () => {
    return (
        <div className='w-[80rem] flex flex-row justify-between items-center pt-5'>
            <div className='flex flex-col gap-8'>
                <h1 className='font-extrabold text-8xl'>David Kenyi</h1>
                <p>Welcome to my portfolio website</p>
            </div>
            <div className="h-[54rem]">
                <img className='rounded-3xl h-full' src='/Headshot.jpeg' alt='profile' />
            </div>
        </div>
    )
}

export default HomePage