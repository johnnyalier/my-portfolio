import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { mailListRoute } from '../utils/apiRoutes'
import { Send, Facebook, LinkedIn, X, GitHub } from '@mui/icons-material';

const Footer = () => {
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
        <footer className='bg-[#f0f9fa] w-full p-28 flex flex-col justify-center items-center'>
            <div className='w-[80rem] flex flex-row justify-between gap-5'>
                <div className='flex flex-col justify-start gap-8'>
                    <div className='flex justify-start items-center gap-4'>
                        <h1 className='rounded-full bg-green-600 text-white text-3xl font-mono font-bold p-2'>DK</h1>
                        <h3 className='font-black text-3xl'>David Kenyi</h3>
                    </div>
                    <h3 className='text-xl'>
                        All rights reserved 
                        <span className='font-bold'>
                            <Link to='/' className='hover:text-green-300'> DavidKenyi </Link>
                        </span> 
                        &copy; {date.getFullYear()}
                    </h3>
                </div>
                <div className='flex flex-col gap-8'>
                    <h1 className='text-3xl font-bold'>Newsletter</h1>
                    <form className='flex flex-row justify-center items-center w-full py-3 px-5 rounded-md border-gray-400 border'>
                        <input 
                            type='email' 
                            name='email' 
                            placeholder='Enter your email' 
                            className='bg-inherit focus:outline-none'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button onClick={submitEmail} className='cursor-pointer'>
                            <Send className='text-green-600' />
                        </button>
                    </form>
                </div>
                <div className='flex flex-col gap-8'>
                    <h1 className='text-3xl font-bold'>Follow Me</h1>
                    <div className='flex flex-row justify-center items-center gap-4 '>
                        <Link to='https://www.facebook.com/johnnywhysky'><Facebook sx={{ fontSize: 40 }} /></Link>
                        <Link to='https://www.linkedin.com/in/david-kenyi-6a13a5b6/'><LinkedIn sx={{ fontSize: 40 }} /></Link>
                        <Link to='https://x.com/Johnny_Whysky'><X sx={{ fontSize: 40 }} /></Link>
                        <Link to='https://github.com/johnnyalier'><GitHub sx={{ fontSize: 40 }} /></Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer