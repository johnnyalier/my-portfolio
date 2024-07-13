import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { experienceSummaryRoute } from '../utils/apiRoutes'

const AboutPage = () => {
    const [experienceSummary, setExperienceSummary] = useState({})
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        const fetchExperienceSummary = async () => {
            try {
                const response = await axios.get(experienceSummaryRoute)
                if (response.status === 200) {
                    setExperienceSummary(response.data.experienceSummary)
                } else {
                    setErrorMessage(response.data.msg)
                }
            } catch (error) {
                console.error("Error fetching experience summary:", error)
            }
        }
        fetchExperienceSummary()
    },[])

    return (
        <div className='w-[80rem] flex flex-col justify-between items-center pt-5'>
            <div className='h-full flex flex-row justify-between p-6 gap-10'>
                <div className='h-full'>
                    <img className='rounded-3xl min-h-[40rem] min-w-[40rem]' src='/Headshot.jpeg' alt='profile' />
                </div>
                <div className='flex flex-col pb-10 gap-5'>
                    <h1 className='text-green-600 font-bold text-xl'>About Me</h1>
                    <h1 className='font-extrabold text-6xl'>
                        I Develop Software Systems that Solve Real World Problems.
                    </h1>
                    <div className='text-wrap text-justify text-xl'>
                        <span>I'm a software engineer and graphic designer with a passion for creativity and innovation. </span>
                        <span>I've been working remotely for the past 5 years, focusing primarily on web development and design. I have a strong background in programming languages, including JavaScript, React, and Node.js, and a strong interest in user experience and interface design. </span>
                        <br />
                        <br />
                        <span>Outside of work, I play sports (football, chess & various board games) with my friends. I also enjoy evening walk around the block with my family.</span>
                    </div>
                    <div className='flex justify-between items-start gap-5'>
                        <div className='flex flex-col gap-2'>                            
                            <div className='flex justify-between gap-5'>
                                <h3 className='font-bold'>Name</h3>
                                <p>David Kenyi</p>
                            </div>
                            <div className='flex justify-between gap-5'>
                                <h3 className='font-bold'>Age</h3>
                                <p>30+ Years</p>
                            </div>
                            <div className='flex justify-between gap-5'>
                                <h3 className='font-bold'>Occupation</h3>
                                <p>Software Engineer</p>
                            </div>
                            <div className='flex justify-between gap-5'>
                                <h3 className='font-bold'>Education</h3>
                                <p>B. Comp Sci</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <div className='flex justify-between gap-5'>
                                <h3 className='font-bold'>Phone</h3>
                                <p>+1(613) 600-6016</p>
                            </div>
                            <div className='flex justify-between gap-5'>
                                <h3 className='font-bold'>Email</h3>
                                <p>davidkenyi@outlook.com</p>
                            </div>
                            <div className='flex justify-between gap-5'>
                                <h3 className='font-bold'>Nationality</h3>
                                <p>CAN & SSD</p>
                            </div>
                            <div className='flex justify-between gap-5'>
                                <h3 className='font-bold'>Freelance</h3>
                                <p>Available</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-screen bg-slate-800 flex justify-center items-center'>
                <div className='w-[80rem] flex flex-row justify-between items-center py-10 px-5'>
                    <div className='flex gap-4 items-center'>
                        <h1 className='text-green-600 text-6xl font-bold'>{experienceSummary.duration}+</h1>
                        <h2 className='text-white text-3xl'>Years of Experience</h2>
                    </div>                
                    <div className='flex gap-4 items-center'>
                        <h1 className='text-green-600 text-6xl font-bold'>{experienceSummary.clients}+</h1>
                        <h2 className='text-white text-3xl'>Clients</h2>
                    </div>                
                    <div className='flex gap-4 items-center'>
                        <h1 className='text-green-600 text-6xl font-bold'>{experienceSummary.projects}+</h1>
                        <h2 className='text-white text-3xl'>Total Projects</h2>
                    </div>                
                </div>
            </div>
        </div>
    )
}

export default AboutPage