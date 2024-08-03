import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { mailListRoute } from '../utils/apiRoutes'
import { Send, Facebook, LinkedIn, X, GitHub } from '@mui/icons-material';
import { BsFacebook, BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { Button, Footer, TextInput } from 'flowbite-react';

const FooterCom = () => {
    const [email, setEmail] = useState('')
    const date = new Date();

    const submitEmail = async (e) => {
        try {
            e.preventDefault();
            console.log("Email submitted");
            const response = await axios.post(mailListRoute, {
                email: email
            })
            console.log(response.data);
            if (response.status === 201) {
                alert("Email added to our mailing list.")
                setEmail('');
            } else {
                alert("Failed to add email to our mailing list.")
            }
            
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <Footer bgDark className='flex flex-col'>
            <div className='w-full max-w-7xl mx-auto'>
                <div className='flex flex-col mx-4 mt-5 justify-center items-center gap-8'>
                    <h1 className='text-3xl text-white font-bold'>Newsletter</h1>                      
                    <form  onSubmit={submitEmail} className='flex flex-row max-w-md justify-center items-center w-full rounded-md border-gray-400'>
                        <TextInput 
                            type='email' 
                            name='email' 
                            placeholder='Enter your email' 
                            className='w-full bg-inherit outline-none focus:outline-none'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            rightIcon={Send}
                        />
                    </form>
                </div>
                <div className="grid w-full grid-cols-2 gap-10 px-6 py-8 md:grid-cols-3">
                    <div>
                        <Footer.Title title="Company" />
                        <Footer.LinkGroup col>
                            <Footer.Link href='/about'>About</Footer.Link>
                            <Footer.Link href='/works'>Works</Footer.Link>
                            <Footer.Link href='/services'>Services</Footer.Link>
                            <Footer.Link href='https://blog-u4wj.onrender.com/'>Blog</Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title="help center" />
                        <Footer.LinkGroup col>
                            <Footer.Link href="#">Discord Server</Footer.Link>
                            <Footer.Link href="https://x.com/Johnny_Whysky">X (formerly Twitter)</Footer.Link>
                            <Footer.Link href="https://www.facebook.com/johnnywhysky">Facebook</Footer.Link>
                            <Footer.Link href="/contact">Contact Me</Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title="legal" />
                        <Footer.LinkGroup col>
                            <Footer.Link href="#">Privacy Policy</Footer.Link>
                            <Footer.Link href="#">Licensing</Footer.Link>
                            <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                </div>
            </div>
            <div className='w-full mx-auto bg-gray-700 flex justify-center'>              
                <div className='w-full max-w-7xl px-4 py-6 sm:flex sm:items-center sm:justify-between'>
                    <Footer.Copyright href='/about' by='David Kenyi' year={date.getFullYear()} />
                    <div className='mt-4 flex space-x-6 sm:mt-0 sm:justify-center'>
                        <Footer.Icon href='https://www.facebook.com/johnnywhysky' icon={BsFacebook} />
                        <Footer.Icon href='https://www.linkedin.com/in/david-kenyi-6a13a5b6/' icon={BsLinkedin} />
                        <Footer.Icon href='https://x.com/Johnny_Whysky' icon={BsTwitterX} />
                        <Footer.Icon href='https://github.com/johnnyalier' icon={BsGithub} />
                    </div>
                </div>
            </div>
        </Footer>
    )
}

export default FooterCom