import { useEffect, useState } from 'react'
import axios from 'axios'
import { experienceSummaryRoute } from '../utils/apiRoutes'
import { Alert } from 'flowbite-react'

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
        <div className='min-h-screen max-w-7xl mx-auto flex flex-col justify-around items-center pt-5'>
            <div className='mx-4 h-full flex flex-col md:flex-row justify-between p-6 gap-10'>
                <div className='h-full flex-1'>
                    <div className='flex justify-center'>
                        <img className='rounded-xl lg:h-[40rem] object-cover self-center' src='/Headshot.jpeg' alt='profile' />
                    </div>
                </div>
                <div className='flex-1 flex-col pb-10 gap-5'>
                    <h1 className='text-green-600 font-bold text-xl'>About Me</h1>
                    <h1 className='font-extrabold text-xl md:text-3xl pt-6'>
                        I Develop Software Systems that Solve Real World Problems.
                    </h1>
                    <div className='text-justify text-md md:text-xl pt-5'>
                        <span className='text-wrap'>I&rsquo;m a software engineer and graphic designer with a passion for creativity and innovation. </span>
                        <span className='text-wrap'>I&rsquo;ve been working remotely for the past 5 years, focusing primarily on web development and design. I have a strong background in programming languages, including JavaScript, React, and Node.js, and a strong interest in user experience and interface design. </span>
                        <br />
                        <br />
                        <span className='text-wrap'>Outside of work, I play sports (football, chess & various board games) with my friends. I also enjoy evening walk around the block with my family.</span>
                    </div>
                    <div className='flex justify-between items-start gap-5 p-4'>
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
            <div className='w-screen bg-slate-800 flex justify-center items-center mb-5'>
                <div className='flex flex-row justify-between items-center py-10 px-5 gap-5'>
                    <div className='flex gap-2 items-center'>
                        <h1 className='text-green-600 text-3xl md:text-6xl font-bold'>{experienceSummary.duration}+</h1>
                        <h2 className='text-white text-xl md:text-3xl'>Years of Experience</h2>
                    </div>                
                    <div className='flex gap-2 items-center'>
                        <h1 className='text-green-600 text-3xl md:text-6xl font-bold'>{experienceSummary.clients}+</h1>
                        <h2 className='text-white text-xl md:text-3xl'>Clients</h2>
                    </div>                
                    <div className='flex gap-2 items-center'>
                        <h1 className='text-green-600 text-3xl md:text-6xl font-bold'>{experienceSummary.projects}+</h1>
                        <h2 className='text-white text-xl md:text-3xl'>Total Projects</h2>
                    </div>                
                </div>
            </div>
            <div className='flex justify-center items-center'>
                {errorMessage && <Alert className='mt-5' color='failure'>{errorMessage}</Alert>}
            </div>
        </div>
    )
}

export default AboutPage