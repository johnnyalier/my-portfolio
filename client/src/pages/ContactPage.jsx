import { useState } from 'react'
import { Email, LocationOn, Phone } from '@mui/icons-material'
import Map from '../components/Map';
import axios from 'axios'
import { ClientProjectRoute } from '../utils/apiRoutes'
import { Textarea, TextInput } from 'flowbite-react';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        projectTitle: '',
        projectDetails: '',
    })
    // const [errorMessage, setErrorMessage] = useState(null)
    // const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmitRequest = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            // setLoading(true);

            const response = await axios.post(ClientProjectRoute, {
                ...formData
            })
            console.log(response.data);

            if ( response.status == 201 ) {
                alert("Request Successfully Sent.")
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    projectTitle: '',
                    projectDetails: '',
                })
            } else {
                alert(response.data.msg)
            }
        } catch (error) {
            // setLoading(false)
            alert(error.message)
        }
    }

    return (
        <div className='min-h-screen mx-auto flex flex-col max-w-6xl justify-between items-center py-10 gap-10'>
            <div className='flex flex-col text-center gap-5 p-5'>
                <h3 className='font-bold text-green-600 text-xl'>Contact Me</h3>
                <h1 className='text-3xl md:text-6xl font-bold'>Let&rsquo;s Achieve Great Things Together</h1>
            </div>
            <div className='w-full flex flex-col md:flex-row justify-between gap-10 p-5'>
                <div className='flex flex-col gap-10  text-xs md:text-xl'>
                    <div className='flex justify-start items-center gap-10'>
                        <div className='bg-green-600 rounded-full p-2 md:p-5'>
                            <LocationOn sx={{ fontSize: {xs:20, md:40 }}} className='text-white '/>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h3 className='font-bold'>Location</h3>
                            <p>180 Lees Ave, Ottawa, ON, K1S5J6</p>
                        </div>
                    </div>
                    <div className='flex justify-start items-center gap-10'>
                        <div className='bg-green-600 rounded-full p-2 md:p-5'>
                            <Phone sx={{ fontSize: {xs:20, md:40 } }} className='text-white '/>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h3 className='font-bold'>Phone</h3>
                            <p>+1(613) 600-6016</p>
                        </div>
                    </div>
                    <div className='flex justify-start items-center gap-10'>
                        <div className='bg-green-600 rounded-full p-2 md:p-5'>
                            <Email sx={{ fontSize: {xs:20, md:40 } }} className='text-white '/>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h3 className='font-bold'>Email</h3>
                            <p>davidkenyi@outlook.com</p>
                        </div>
                    </div>
                </div>
                <div className='flex-1'>
                    <form onSubmit={handleSubmitRequest} className='flex flex-col gap-5'>
                        <div className='w-full grid grid-cols-1 md:grid-cols-2 justify-between gap-2'>
                            <TextInput 
                                type="text" 
                                id='name' 
                                value={formData.name} 
                                className='w-full focus:outline-none' 
                                placeholder="Name" 
                                onChange={handleChange} 
                            />
                            <TextInput 
                                type="email" 
                                id='email' 
                                value={formData.email} 
                                className='w-full focus:outline-none' 
                                placeholder="Email" 
                                onChange={handleChange} 
                            />
                            <TextInput 
                                type="phone" 
                                id='phone' 
                                value={formData.phone} 
                                className='w-full focus:outline-none' 
                                placeholder="Your Phone" 
                                onChange={handleChange} 
                            />
                            <TextInput 
                                type="subject" 
                                id='projectTitle' 
                                value={formData.projectTitle} 
                                className='w-full focus:outline-none' 
                                placeholder="Project Subject" 
                                onChange={handleChange} 
                            />
                        </div>
                        <Textarea 
                            placeholder="Enter project details here..." 
                            id='projectDetails' 
                            value={formData.projectDetails} 
                            className='w-full h-full bg-inherit focus:outline-none' 
                            onChange={handleChange} 
                            rows={10}
                        />
                        <div>
                            <button className='bg-green-600 text-white font-bold text-lg rounded-lg p-4'>Submit Request</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='h-96 md:h-[36rem] w-full border-1'>
                <Map />
            </div>
        </div>
    )
}

export default ContactPage