import React from 'react'

const ServicePage = () => {
    return (
        <div className='w-[80rem] flex flex-col justify-between items-center py-10 gap-10'>
            <div className='flex flex-col gap-10 justify-center items-center'>
                <h3 className='font-bold text-green-600 text-3xl'>Services</h3>
                <h1 className='font-bold text-6xl'>What can I do for you?</h1>
            </div>
            {/* <div className='flex flex-wrap gap-10 justify-stretch items-center rounded-lg'> */}
            <div className='grid grid-cols-2 py-10 gap-10 justify-center items-center rounded-lg'>
                <div className='flex gap-10 p-10 rounded-lg bg-slate-100'>
                    <div>
                        <img src="/web-design.png" alt="Web Design"/>
                    </div>
                    <div className='flex flex-col gap-10'>
                        <h2 className='font-bold text-3xl'>Web Design</h2>
                        <span>Let's start by making your imagination into reality. I'll use my creativity to make colours and themes that represent you. The design should avail all the interactive feature at your fingertip.</span>
                    </div>
                </div>
                <div className='flex gap-10 p-10 rounded-lg bg-slate-100'>
                    <div>
                        <img src="/web-development.png" alt="Web Development" />
                    </div>
                    <div className='flex flex-col gap-10'>
                        <h2 className='font-bold text-3xl'>Web Development</h2>
                        <span>With design satisfaction guranteed, I'll make your website dream become reality by choosing the best framework and tecnologies available. You should have a bug-free secure website catered to your needs.</span>
                    </div>
                </div>
                <div className='flex gap-10 p-10 rounded-lg bg-slate-100'>
                    <div>
                        <img src="/software-development.png" alt="Software Development" />
                    </div>
                    <div className='flex flex-col gap-10'>
                        <h2 className='font-bold text-3xl'>Software Development</h2>
                        <span>Be it integration into existing product or creation of a new proudct, I'm your go guy for the project. Just tell me what you want your software to achieve and I'll do the dity work.</span>
                    </div>
                </div>
                <div className='flex gap-10 p-10 rounded-lg bg-slate-100'>
                    <div>
                        <img src="/system-development.png" alt="System Development" />
                    </div>
                    <div className='flex flex-col gap-10'>
                        <h2 className='font-bold text-3xl'>System Development</h2>
                        <span>You want to build an ecosystem from scratch. We'll work closely to make sure your satistified with the solution even with minute detail. I'll build you product by breaking it down into smaller microservices, with each service doing just one thing. You'll love the architecture and future maintenance of your world.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicePage