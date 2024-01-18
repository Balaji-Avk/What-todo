import {Todos} from './components/Todos';
import {useState} from 'react';
import './App.css';
import { CreateTodo } from './components/CreateTodo';

function App() {
  const [state,setState]=useState(false);
  return (
    <>
      <button onClick={e=>setState(!state)}>Add a todo</button>
      {state?<CreateTodo></CreateTodo>:""}
      <Todos > </Todos>
    </>
  )
}

export default App
