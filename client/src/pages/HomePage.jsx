import React from 'react'

const HomePage = () => {
    return (
        <div className='min-h-screen max-w-6xl mx-auto flex flex-col md:flex-row md:items-center p-3 gap-6'>
            <div className='md:flex-1'>
                <div className='flex flex-col gap-10'>
                    <h1 className='font-extrabold text-4xl md:text-8xl text-center'>David Kenyi</h1>
                    <p className='text-center md:text-2xl text-wrap'>Welcome to my portfolio website. Here you&rsquo;ll get to know more about my professional background and the kind of projects I work during my free time. Feel free to reach out to me through the contact information provided in the about page</p>
                </div>
            </div>
            <div className="md:flex-1">
                <div className='flex justify-center'>
                    <img className='rounded-xl lg:h-[40rem] object-cover self-center' src='/Headshot.jpeg' alt='profile' />
                </div>
            </div>
        </div>
    )
}

export default HomePage