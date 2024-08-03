import { useState, useEffect } from 'react'
import { FaLaptopCode, FaUserGraduate } from "react-icons/fa";
import axios from 'axios'
import { myProjectRoute, jobRoute, educationRoute, skillRoute } from '../utils/apiRoutes'
import skillsIcons from '../utils/skillIcons'
import { Tabs } from 'flowbite-react';

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

        getmyProjects()
        getMyJobs()
        getMyDegrees()
        getSkills()
    },[]);


    return (
        <div className='min-h-screen mx-auto max-w-7xl flex flex-col justify-between items-center pt-5'>
            <div className='flex flex-col gap-10 w-full border-b-2'>
                <div className='p-10 flex flex-col justify-center items-center gap-10'>
                    <h1 className='text-green-600 font-bold text-3xl'>Portfolio</h1>
                    <h1 className='font-bold text-6xl'>My Works</h1>
                </div>
                <div className='px-5 flex justify-center items-center gap-10'>
                    <Tabs aria-label="Full width tabs" variant="fullWidth">
                        <Tabs.Item active title='All'>
                            <div className="grid grid-cols-2 md:grid-cols-3 grid-flow-row gap-4">
                                {projects && projects.map(project =>(
                                    <div key={project._id} className={`row-span-10 p-10 hover:cursor-pointer ${statusBackground[project.status]} rounded-lg flex flex-col justify-center items-center`}>
                                        <h1>{project.title}</h1>
                                    </div>
                                ))}
                            </div>
                        </Tabs.Item>
                        <Tabs.Item title='Web Design'>
                            <div className='flex justify-center items-center'>
                                <span>To be completed soon...</span>
                            </div>
                        </Tabs.Item>
                        <Tabs.Item title='Development'>
                            <div className="grid grid-cols-2 md:grid-cols-3 grid-flow-row gap-4">
                                {projects && projects.map(project =>(
                                    <div key={project._id} className={`row-span-10 p-10 hover:cursor-pointer ${statusBackground[project.status]} rounded-lg flex flex-col justify-center items-center`}>
                                        <h1>{project.title}</h1>
                                    </div>
                                ))}
                            </div>
                        </Tabs.Item>
                    </Tabs>
                </div>
                
            </div>
            <div className='w-full px-5 py-10 flex flex-col justify-center items-center gap-10 border-b-2'>
                <h1 className='text-green-600 font-bold text-3xl'>Work Experience</h1>
                <div className='gap-10'>
                    <p className='text-sm md:text-xl text-wrap'>
                        Proven full-stack developer with passion for new technologies that drives our society.
                        I have over 2 years experience developing and integrating containerized backend IOT microservices.  Proficient in JavaScript, MongoDB, PostgreSQL, Python and Git. I also have knack of creating bug-free systems that meet the client expectations.
                    </p>
                </div>
                <div className='flex flex-col md:flex-row justify-between gap-5 md:gap-10 py-5'>
                    <div className='md:flex-1 justify-center items-start'>
                        <img src='/work-station.jpg' alt='work' className='rounded-lg'/>
                    </div>
                    <div className='md:flex-1'>                           
                        {myJobs && myJobs.map(job => (
                            <div key={job._id} className='w-full flex flex-col gap-5 py-5'>
                                <div className='flex gap-2'>
                                    <div>                                        
                                        <div className='bg-green-600 rounded-full p-3'>
                                            <FaLaptopCode className='text-white size-5 md:size-10'/>
                                        </div>
                                    </div>
                                    <div>                                        
                                        <h1 className='text-md md:text-2xl font-bold'>{job.position}</h1>
                                        <div className='flex justify-between text-xs md:text-md font-bold'>
                                            <span>{job.company} | {job.location}</span>
                                            <span className='text-gray-500'> ({getMonthAndYear(job.startDate)} - {getMonthAndYear(job.endDate)})</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-5'>
                                    {job.responsibilities.map((item, index) => (
                                        <span key={index} className='text-sm md:text-lg text-wrap'>
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-10 w-full border-b-2'>
                <div className='flex flex-col justify-center items-center gap-5 md:gap-10'>
                    <h1 className='text-green-600 font-bold text-3xl pt-4'>Education</h1>
                    <div className='flex flex-col-reverse md:flex-row justify-between items-center gap-5 p-5'>
                        <div className='flex-1'>
                            <div className='flex flex-col gap-5'>
                                {myDegrees && myDegrees.map(item => (
                                    <div key={item._id} className='flex gap-5'>
                                        <div>
                                            <div className='bg-green-600 rounded-full p-3'>
                                                <FaUserGraduate className='text-white size-5 md:size-10'/>
                                            </div>
                                        </div>
                                        <div className='flex flex-col gap-2 md:gap-5'>
                                            <h1 className='text-md md:text-2xl font-bold'>{item.degree}</h1>
                                            <h2 className='text-xs md:text-lg font-bold'>
                                                {item.institution} | {item.location}
                                                <span className='text-gray-500'> (class of {item.graduationYear})</span>
                                            </h2>
                                            <p className='text-sm md:text-xl text-wrap'>
                                                {item.summary}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='flex-1'>
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
            <div className='p-5 md:p-10 flex flex-col justify-center items-center w-full gap-5 border-b-2'>
                <h1 className='text-green-600 font-bold text-3xl'>My Skills</h1>
                <h1 className='font-bold text-xl md:text-6xl'>Always Learning New Skills</h1>
                <div className='grid grid-cols-4 md:grid-cols-5 grid-flow-row gap-2'>
                    {skills && skills.map(skill =>(
                        <div key={skill._id} className='px-6 py-2 md:p-5 hover:cursor-pointer text-white bg-green-600 rounded-md md:rounded-full flex flex-col justify-center items-center'>
                            {skillsIcons[skill.icon]}
                            <span className='pt-2 text-xs md:text-xl'>{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    )
}

export default WorksPage