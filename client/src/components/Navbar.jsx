import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { downloadResume } from '../utils/apiRoutes'

const Navbar = () => {
    const handleResumeDownload = async () => {
        try {
            const filename = "Resume David Kenyi.pdf"
            const getUrl = `${downloadResume}/${filename}`
            const response = await axios.get(getUrl, {
                responseType: 'blob',
            })

            const pdfBlob = new Blob([response.data], { type: "application/pdf" })
            const url = window.URL.createObjectURL(pdfBlob);
            const link = document.createElement("a");            
            link.href = url;
            
            link.setAttribute("download", "resume.pdf");
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);

        } catch (error) {
            console.error("Error downloading resume:", error);
            alert("Error downloading resume. Please try again later.");
        }
    }

    return (
        <nav className='shadow-md sticky top-0 w-full bg-white opacity-100 flex flex-col justify-center items-center'>
            <div className='w-full md:w-[80rem] inline-flex justify-center items-center'>
                <div className='w-full inline-flex flex-row justify-between items-center p-2'>
                    <div className='flex flex-row justify-center items-center gap-4'>
                        <Link to='/' className='hover:text-green-300'>
                            <h1 className='rounded-full bg-green-600 text-white text-3xl font-mono font-bold p-5'>DK</h1>
                        </Link>
                        <h3 className='font-black text-3xl'>David Kenyi</h3>
                    </div>
                    <div className='flex justify-between items-center gap-8 text-xl'>
                        <Link to='/about' className='hover:text-green-300'>About</Link>
                        <Link to='/contact' className='hover:text-green-300'>Contact</Link>
                        <Link to='/works' className='hover:text-green-300'>Works</Link>
                        <Link to='/services' className='hover:text-green-300'>Services</Link>
                        <button className='rounded-full bg-green-600 text-white text-xl py-1 px-3' onClick={handleResumeDownload}>Download my Resume</button>
                    </div>
                </div>
            </div>            
        </nav>
    )
}

export default Navbar