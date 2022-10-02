import React ,{useState} from 'react';
import './App.css';

function App() {
  const[id,setId]= useState(4)
  const[todos,setTodos]=useState(
    [
      {id: 1,name:"Wake up"},
      {id :2,name:"prepare breakfast"},
      {id :3,name:"Go to church"},
    ] );
    const[todoName,setTodoName]=useState("")
    function addTodo(e){
      e.preventDefault()
      setTodos ([...todos,{id:4,name:todoName}])
      setId(id+1);
    }
     function onDelete(id){
      setTodos( todos => todos.filter(todo =>todo.id !==id))
     }

  return (
    <div>
     
      <ul>
        {
          todos.map( todo => <li key={todo.id}>{todo.name}
           <button onClick={()=>onDelete(todo.id)}> </button>
          </li>)
        }
       
      </ul>
      <form onSubmit={addTodo}>
        <input placeholder='to do name ' value={todoName} onChange={e => setTodoName(e.target.value)} />
      <button onClick={addTodo}>addTodo</button>
      </form>
      
       </div>
  )
}

export default App;
