import React, { useState } from 'react'
const List = ({todo,toggleComplete,handleDelete,handleEdit}) => {

    const [newTitle, setNewTitle] = useState(todo.title);
    const [isDisabled, setIsDisabled ] = useState(true)
    const handleChange = (e) => {
        e.preventDefault();
        if(todo.completed == true){
            setNewTitle(todo.title)
        }
        else{
            todo.title = "";
            setNewTitle(e.target.value);
        }
    }
  
  return (
    <div className='flex flex-col p-2 text-xl font-semibold'>
        <div className='items-center border-yellow-300 rounded bg-yellow-100 border text-black px-4 py-4 flex justify-between gap-8'>
            <input 
            type="text" 
            style={{textDecoration:todo.completed && "line-through"}}
            value = {todo.title === ""? newTitle: todo.title}
            className="w-full px-2 py-2 border rounded-lg"
            onChange={handleChange}
            />  

            <div className='flex gap-3'>
                <button className='bg-green-400 text-white px-2 py-1 rounded hover:bg-green-700' onClick={()=>toggleComplete(todo)}>{todo.completed? "Undo": "Done"}</button>
                <button onClick={() => handleEdit(todo,newTitle)} className="bg-blue-400 text-white px-2 py-1 rounded hover:bg-blue-700">Edit</button>
                <button onClick={() => handleDelete(todo.id)} className="bg-red-400 text-white px-2 py-1 rounded hover:bg-red-700">delete</button>    
            </div>
          
            
        </div>
       
    </div>
  )
}

export default List