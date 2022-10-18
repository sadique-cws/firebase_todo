import React from 'react'

const Table = ({data}) => {

    
  return (
    <div className='p-4'>
        <h1 className='text-lg font-semibold font-sans mb-2'>Manage Phone Records</h1>
        <table className='border w-full'>
            <thead>
            <tr>
                <th className='border'>id</th>
                <th className='border'>Name</th>
                <th className='border'>Contact</th>
                <th className='border'>Action</th>
            </tr>
            </thead>
            <tbody>
                {
                    data.map((value,index) => {
                        <tr key={index}>
                            <th className='border'>{value.id}</th>
                            <th className='border'>{value.name}</th>
                            <th className='border'>{value.contact}</th>
                            <th className='border'>Action</th>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Table