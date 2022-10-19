import { collection, doc, getDoc, getDocs, onSnapshot, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import Form from './components/Form'
import Header from './components/Header'
import Table from './components/Table'
import { db } from './firebase'

const App = () => {
   const [dataRecords, setDataRecords] = useState([])
  
  useEffect(() => {
    const q  = query(collection(db,"contacts"));
    const unsub = onSnapshot(q, (querySnapshot) => {
        let todoArray = [];
        querySnapshot.forEach((doc) => {
          todoArray.push({...doc.data(), id: doc.id});
        })
        setDataRecords(todoArray)
        console.log(dataRecords)
      })
      return () => unsub()
  },[])

  return (
    <div className=''>
      <Header/>
      <div className='flex px-16 mt-3'>
        <div className='w-1/3'>
              <Form/>
        </div>
        <div className='w-2/3'>
          <Table data={dataRecords}/>
        </div>
      </div>
    </div>
  )
}

export default App