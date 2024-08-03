import {Button, Navbar} from 'flowbite-react'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'
import { downloadResume } from '../utils/apiRoutes'

const Header = () => {
    const path = useLocation().pathname
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
        <Navbar className='border-b-2'>
            <Navbar.Brand href='/'>
                <img src="/Headshot.jpeg" alt="headshot" className="mr-3 rounded-full h-9 sm:h-9" />
                <span className='text-xl font-mono font-bold'>David Kenyi</span>
            </Navbar.Brand>
            <div className='flex md:order-2'>                
                <Button color='teal' onClick={handleResumeDownload}>My Resume</Button>
                <Navbar.Toggle />
            </div>  
            <Navbar.Collapse>
                <Navbar.Link active={path === '/about'} as={'div'}>
                    <Link to='/about' className='hover:text-green-300'>About</Link>
                </Navbar.Link>
                <Navbar.Link active={path === '/contact'} as={'div'}>
                    <Link to='/contact' className='hover:text-green-300'>Contact</Link>
                </Navbar.Link>
                <Navbar.Link active={path === '/works'} as={'div'}>
                    <Link to='/works' className='hover:text-green-300'>Works</Link>
                </Navbar.Link>
                <Navbar.Link active={path === '/services'} as={'div'}>
                    <Link to='/services' className='hover:text-green-300'>Services</Link>
                </Navbar.Link>
            </Navbar.Collapse>       
        </Navbar>
    )
}

export default Header