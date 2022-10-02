import React ,{useState} from 'react';
import './App.css';

function App() {
  const[todos,setTodos]=useState(
    [
      {id: 1,name:"Wake up"},
      {id :2,name:"prepare braekfast"},
      {id :3,name:"Go to church"},
    ] );
    function addTodo(){
      setTodos ([...todos,[{id:4,name:"New-Item"}]])
    }

  return (
    <div>
     
      <ul>
        {
          todos.map( todo => <li key={todo.id}>{todo.name}</li>)
        }
      </ul>
      <button onClick={addTodo}>addTodo</button>
      
       </div>
  )
}

export default App;
