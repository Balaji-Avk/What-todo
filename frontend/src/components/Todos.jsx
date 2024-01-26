import { useEffect, useState } from 'react';
import {useNavigate} from'react-router-dom';
import './Todos.css';

export function Todos() {
    const navigateTo=useNavigate();
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await fetch('http://localhost:3000/todos',{
                    method:'GET',
                    headers:{
                        "authorization":localStorage.getItem("accessToken"),
                        "Content-Type":"application/json"
                    }
                });
                if (!response.ok) {
                    navigateTo('/auth/login');
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setTodos(data.response);
            } catch (error) {
                console.error('Error fetching todos:', error);
            }
        };
        fetchTodos();
    }, []);
    return (

        <div className="todos-main">
            {todos.map((todo) => (
                <div className="todos-todo" key={todo._id}>
                    <div className="todos-todo-name"><h2>{todo.title}</h2></div>
                    <div className="todos-todo-description"><p>{todo.description}</p></div>
                    <div className='todos-todo-name-btn'><button onClick={()=>{}}>{todo.todostatus ? 'completed' : 'mark as complete'}</button></div>
                </div>
            ))}
        </div>  
    );
}


