import React ,{useState} from 'react';
import './App.css';

function App() {
  const[todos,setTodos]=useState(
    [
      {id: 1,name:"Wake up"},
      {id :2,name:"prepare breakfast"},
      {id :3,name:"Go to church"},
    ] );
    const[todoName,setTodoName]=useState("")
    function addTodo(e){
      e.preventDafault()
      setTodos ([...todos,{id:4,name:"New-Item"}])
    }

  return (
    <div>
     
      <ul>
        {
          todos.map( todo => <li key={todo.id}>{todo.name}</li>)
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
