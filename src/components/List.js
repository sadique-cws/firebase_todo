import React from 'react'

const List = () => {
  return (
    <div className='flex flex-col p-8 space-y-4 text-xl font-semibold'>
        <div className='items-center border-yellow-300 rounded bg-yellow-100 border text-black px-4 py-4 flex justify-between'>
            <span>Buy a LB</span>
            <span className='flex gap-2'>
                <button type='button' className='px-3 py-1 text-white rounded bg-red-500 hover:bg-red-700'>X</button>
                <button type='button' className='px-3 py-1 text-white rounded bg-teal-500 hover:bg-teal-700'>Done</button>
            </span>
        </div>
        <div className='items-center border-yellow-300 rounded bg-yellow-100 border text-black px-4 py-4 flex justify-between'>
            <span>Need To maintain Hosting Panel</span>
            <span className='flex gap-2'>
                <button type='button' className='px-3 py-1 text-white rounded bg-red-500 hover:bg-red-700'>X</button>
                <button type='button' className='px-3 py-1 text-white rounded bg-teal-500 hover:bg-teal-700'>Done</button>
            </span>
        </div>
        <div className='items-center border-yellow-300 rounded bg-yellow-100 border text-black px-4 py-4 flex justify-between'>
            <span>Buy a LB</span>
            <span className='flex gap-2'>
                <button type='button' className='px-3 py-1 text-white rounded bg-red-500 hover:bg-red-700'>X</button>
                <button type='button' className='px-3 py-1 text-white rounded bg-teal-500 hover:bg-teal-700'>Done</button>
            </span>
        </div>
        <div className='items-center border-yellow-300 rounded bg-yellow-100 border text-black px-4 py-4 flex justify-between'>
            <span>Buy a LB</span>
            <span className='flex gap-2'>
                <button type='button' className='px-3 py-1 text-white rounded bg-red-500 hover:bg-red-700'>X</button>
                <button type='button' className='px-3 py-1 text-white rounded bg-teal-500 hover:bg-teal-700'>Done</button>
            </span>
        </div>
        <div className='items-center border-yellow-300 rounded bg-yellow-100 border text-black px-4 py-4 flex justify-between'>
            <span>Buy a LB</span>
            <span className='flex gap-2'>
                <button type='button' className='px-3 py-1 text-white rounded bg-red-500 hover:bg-red-700'>X</button>
                <button type='button' className='px-3 py-1 text-white rounded bg-teal-500 hover:bg-teal-700'>Done</button>
            </span>
        </div>
       
    </div>
  )
}

export default List