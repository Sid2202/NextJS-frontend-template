import { useState } from "react";
import axios from "axios"

export default function Form(){

    const [formData, setFormData] = useState({name:"", email:"", age:"", phrase:""})


    const handleChange = (event) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [event.target.name]: event.target.value,
        }));
    };
    const handleSubmit = async(event) => {
        event.preventDefault();
        const res = await axios.post('http://localhost:5080/add_user', formData)
        console.log(res.data)
    };

    return(
        <div>
            <div className='flex justify-center items-center h-screen'>
            <div className="h-1/2 w-1/2 flex flex-col items-center">
                <p className="text-4xl font-Quicksand m-4">Fill in your information</p>

                <div className='m-4 mt-20 flex-col p-black'>
                    <div className="flex-col mb-6">
                        <p className="text-white m-1 mb-4 text-sm">Name: </p>
                        <input className="block p-2 w-96 text-white rounded-lg bg-neutral-900 sm:text-md focus:ring-sky-600  dark:placeholder-gray-400" type='text' placeholder='Sidhanti Patil' value={formData.name} onChange={handleChange} name='name' required />
                    </div>
                    <div className="flex-col mb-6">
                        <p className="p-white m-1 mb-4 p-sm">Email-id: </p>
                        <input className="block p-2 w-96 text-white rounded-lg bg-neutral-900 sm:text-md focus:ring-sky-600 dark:placeholder-gray-400" type='email' placeholder='sidpatil2209@gmail.com' value={formData.email} onChange={handleChange} name='email' required />
                    </div>
                    <div className="flex-col mb-6">
                        <p className="text-white m-1 mb-4 text-sm">Age: </p>
                        <input className="block p-2 w-96 text-white rounded-lg bg-neutral-900 sm:text-md focus:ring-sky-600  dark:placeholder-gray-400" type='number' placeholder='20' value={formData.age} onChange={handleChange} name='age' required />
                    </div>
                    <div className="flex-col mb-6">
                        <p className="text-white m-1 mb-4 text-sm">Motivational phrase: </p>
                        <input className="block p-2 w-96 text-white rounded-lg bg-neutral-900 sm:text-md focus:ring-sky-600  dark:placeholder-gray-400" type='text' placeholder='Control your life' value={formData.phrase} onChange={handleChange} name='phrase' required />
                    </div>
                </div>

                <button className="m-4 bg-sky-600 rounded-lg p-2 text-white" onClick={handleSubmit}>
                    Add into database
                </button>
                
            </div>
            </div>
        </div>
    )
}