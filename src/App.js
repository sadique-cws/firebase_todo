import Create from "./components/Create";
import List from "./components/List";
import {collection,query,onSnapshot,doc,updateDoc, deleteDoc} from 'firebase/firestore';
import { useEffect, useState } from "react";
import { db } from "./firebase";

function App() {
  const [todos, setTodos] = useState([]);

  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos",todo.id),{
      completed : !todo.completed
    })
  }
  const handleEdit = async (todo,title) => {
    await updateDoc(doc(db, "todos", todo.id), {title: title})
  }
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "todos",id));
  }
  useEffect(() => {
    const q  = query(collection(db,"todos"));
    const unsub = onSnapshot(q, (querySnapshot) => {
        let todoArray = [];
        querySnapshot.forEach((doc) => {
          todoArray.push({...doc.data(), id: doc.id});
        })
        setTodos(todoArray)
      })
      return () => unsub()
   },[])

  return (
  <div className="flex justify-center">  
      <div className="w-1/2 bg-slate-200 h-auto">
          <Create/>
          {
            todos.map((todo,index) => (
              <List 
              key={index} 
              todo={todo}
              toggleComplete={(todo) => toggleComplete(todo)}
              handleDelete={(id) => handleDelete(id)}
              handleEdit={(todo,title) => handleEdit(todo,title)}
              />
            ))
          }
      </div>
  </div>
  );
}

export default App;
