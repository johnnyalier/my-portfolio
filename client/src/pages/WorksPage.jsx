import React, { useState, useEffect } from 'react'
import { FaLaptopCode, FaUserGraduate } from "react-icons/fa";
import axios from 'axios'
import { myProjectRoute, jobRoute, educationRoute, skillRoute } from '../utils/apiRoutes'
import skillsIcons from '../utils/skillIcons'

const WorksPage = () => {
    const [projects, setProjects] = useState([])
    const [myJobs, setMyJobs] = useState([])
    const [myDegrees, setMyDegrees] = useState([])
    const [skills, setSkills] = useState([])

    const statusBackground = {
        "To do": "bg-slate-100",
        "In Progress": "bg-orange-100",
        "Completed": "bg-green-100"
    }

    const getMonthAndYear = (dateString) => {
        const dateObj = new Date(dateString).toLocaleString('en-us',{month:'short', year:'numeric'})
        return dateObj;
    }

    useEffect(() => {
        const getmyProjects = async () => {
            try {
                const response = await axios.get(myProjectRoute)
                if (response.status === 200) {
                    setProjects(response.data.projects)
                } else {
                    console.error(response.data.msg)
                }

            } catch (error) {
                console.error(error)
            }
        }
        getmyProjects()
    },[])

    useEffect(() => {
        const getMyJobs = async () => {
            try {
                const response = await axios.get(jobRoute)
                if (response.status === 200) {
                    setMyJobs(response.data.jobs)
                } else {
                    console.error(response.data.msg)
                }
                console.log(myJobs);

            } catch (error) {
                console.error(error)
            }
        }
        getMyJobs()
    }, [])

    useEffect(() => {
        const getMyDegrees = async () => {
            try {
                const response = await axios.get(educationRoute)
                if (response.status === 200) {
                    setMyDegrees(response.data.degrees)
                } else {
                    console.error(response.data.msg)
                }
                console.log(myDegrees);

            } catch (error) {
                console.error(error)
            }
        }
        getMyDegrees()
    }, [])

    useEffect(() => {
        const getSkills = async () => {
            try {
                const response = await axios.get(skillRoute)
                if (response.status === 200) {
                    setSkills(response.data.skills)
                } else {
                    console.error(response.data.msg)
                }
                console.log(skills);

            } catch (error) {
                console.error(error)
            }
        }
        getSkills()
    }, [])

    return (
        <div className='w-[80rem] flex flex-col justify-between items-center pt-5'>
            <div className='flex flex-col gap-10 w-full'>
                <div className='p-10 flex flex-col justify-center items-center gap-10'>
                    <h1 className='text-green-600 font-bold text-3xl'>Portfolio</h1>
                    <h1 className='font-bold text-6xl'>My Works</h1>
                </div>
                <div className='flex justify-center items-center gap-10'>
                    <button className='font-bold text-xl hover:text-green-600'>All</button>
                    <button className='font-bold text-xl hover:text-green-600'>Web Design</button>
                    <button className='font-bold text-xl hover:text-green-600'>Development</button>
                </div>
                <div className='p-10'>
                    <div className="grid grid-cols-3 grid-flow-row gap-4">
                        {projects && projects.map(project =>(
                            <div key={project._id} className={`row-span-10 p-10 hover:cursor-pointer ${statusBackground[project.status]} rounded-lg flex flex-col justify-center items-center`}>
                                <h1>{project.title}</h1>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-10 w-full'>
                <div className='py-10 flex flex-col justify-center items-center gap-10'>
                    <h1 className='text-green-600 font-bold text-3xl'>Work Experience</h1>
                    <h1 className='font-bold text-6xl'>My Experience</h1>
                    <div className='gap-10'>
                        <p className='text-xl text-wrap'>
                            Proven full-stack developer with passion for new technologies that drives our society.
                            I have over 2 years experience developing and integrating containerized backend IOT microservices.  Proficient in JavaScript, MongoDB, PostgreSQL, Python and Git. I also have knack of creating bug-free systems that meet the client expectations.
                        </p>
                    </div>
                    <div className='flex justify-between gap-10 py-5'>
                        <div className='basis-1/2'>
                            <div className='flex flex-col justify-center items-center'>
                                <div className='flex flex-col justify-center items-center h-full p-10 rounded-lg'>
                                    <img src='/work-station.jpg' alt='work' className='rounded-lg'/>
                                </div>
                            </div>
                        </div>
                        <div className='basis-1/2'>
                            <div className='flex flex-col gap-10'>
                                
                                {myJobs && myJobs.map(job => (
                                    <div key={job._id} className='flex gap-10'>
                                        <div>
                                            <div className='bg-green-600 rounded-full p-5'>
                                                <FaLaptopCode className='text-white size-10'/>
                                            </div>
                                        </div>
                                        <div className='flex flex-col gap-5'>
                                            <h1 className='text-3xl font-bold'>{job.position}</h1>
                                            <div className='flex justify-between text-xl font-bold'>
                                                <h2>{job.company} | {job.location}</h2>
                                                <h3 className='text-gray-500'> ({getMonthAndYear(job.startDate)} - {getMonthAndYear(job.endDate)})</h3>
                                            </div>
                                            {job.responsibilities.map((item, index) => (
                                                <span key={index} className='text-lg text-wrap'>
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-10 w-full'>
                <div className='p-10 flex flex-col justify-center items-center gap-10'>
                    <h1 className='text-green-600 font-bold text-3xl'>Education</h1>
                    <h1 className='font-bold text-6xl'>My Alma Mater</h1>
                    <div className='flex justify-between items-center gap-10 p-5'>
                        <div className='basis-2/3'>
                            <div className='flex flex-col gap-10'>
                                {myDegrees && myDegrees.map(item => (
                                    <div key={item._id} className='flex gap-10'>
                                        <div>
                                            <div className='bg-green-600 rounded-full p-5'>
                                                <FaUserGraduate className='text-white size-20'/>
                                            </div>
                                        </div>
                                        <div className='flex flex-col gap-5'>
                                            <h1 className='text-3xl font-bold'>{item.degree}</h1>
                                            <h2 className='text-xl font-bold'>
                                                {item.institution} | {item.location}
                                                <span className='text-gray-500'> (class of {item.graduationYear})</span>
                                            </h2>
                                            <p className='text-xl text-wrap'>
                                                {item.summary}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='basis-1/3'>
                            <div className='flex flex-col justify-center items-center'>
                                <div className='flex flex-col text-white justify-center items-center h-full p-10 rounded-lg bg-red-600'>
                                    <img src='/carleton.png' alt='education' />
                                    <h2 className='text-6xl font-bold'>Carleton</h2>
                                    <h2 className='text-3xl font-bold'>University</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-10 w-full'>
                <div className='p-10 flex flex-col justify-center items-center gap-10'>
                    <h1 className='text-green-600 font-bold text-3xl'>My Skills</h1>
                    <h1 className='font-bold text-6xl'>Always Learning New Skills</h1>
                    <div className='grid grid-cols-5 grid-flow-row gap-4'>
                        {skills && skills.map(skill =>(
                            <div key={skill._id} className='row-span-5 p-5 hover:cursor-pointer text-white bg-green-600 rounded-full flex flex-col justify-center items-center'>
                                {skillsIcons[skill.icon]}
                                <h1>{skill.name}</h1>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default WorksPage