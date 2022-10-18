import { collection, doc, getDoc, getDocs, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import Form from './components/Form'
import Header from './components/Header'
import Table from './components/Table'
import { db } from './firebase'

const App = () => {
  const [data, setData] = useState([])
  
  const getAlldata = async () => {
    const contactRecords = await getDocs(collection(db, "contacts"));

    const newArray = []
    contactRecords.forEach((doc,index) => {
      newArray.push({...doc.data(),id:doc.id})
    })
    setData(newArray)
  }
  useEffect(() => {
      getAlldata();
  },[])

  return (
    <div className=''>
      <Header/>
      <div className='flex px-16 mt-3'>
        <div className='w-1/3'>
              <Form/>
        </div>
        <div className='w-2/3'>
          <Table data={data}/>
        </div>
      </div>
    </div>
  )
}

export default App