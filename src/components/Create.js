import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react'
import { db } from '../firebase'
const Create = () => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(title !== ""){
      await addDoc(collection(db, "todos"), {
        title,
        completed : false,
      })

      setTitle("");
    }
  }
  return (
  
        <form onSubmit={handleSubmit}  className='flex p-5'>
          <input placeholder="Default Input" value={title} onChange={(e) => setTitle(e.target.value)} className="border rounded w-full px-2 py-4"/>
          <button type="submit" className='bg-slate-700 text-white px-8 hover:bg-slate-900'>Go</button>
        </form>
  )
}


export default Create
