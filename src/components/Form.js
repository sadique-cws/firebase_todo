import React,{useState} from 'react'
import {addDoc,collection} from 'firebase/firestore'
import { db } from '../firebase';
const Form = () => {
    
    const [name,setName]  = useState("");
    const [contact,setContact]  = useState("");

    const handleSubmit = async () => {

        await addDoc(collection(db,"contacts"), {
            name,
            contact,
            status: true
        })
        console.log("working")
    }

  return (
    <div className='p-2'>
        <div className='mb-3'>
            <label htmlFor='name'>Name</label>
            <input type="text" id='name' value={name} onChange={(e) => setName(e.target.value)} className="border w-full py-3 rounded"/>
        </div>
        <div className='mb-3'>
            <label htmlFor='contact'>contact</label>
            <input type="text" id='contact'value={contact} onChange={(e) => setContact(e.target.value)}  className="border w-full py-3 rounded"/>
        </div>
        <div className='mb-3'>
            <button type="submit" onClick={handleSubmit} id='contact' className="bg-teal-700 py-2 text-xl hover:bg-teal-800 text-white w-full">Create</button>
        </div>
    </div>
  )
}

export default Form