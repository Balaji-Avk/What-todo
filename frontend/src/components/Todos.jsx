import { useEffect, useState } from 'react';

export function Todos() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await fetch('https://what-todo-api.vercel.app/todos');
                if (!response.ok) {
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
        <div>
            {todos.map((todo) => (
                <div key={todo._id}>
                    <div>{todo.title}</div>
                    <div>{todo.description}</div>
                    <button onClick={()=>{

                    }}>{todo.todostatus ? 'completed' : 'mark as complete'}</button>
                </div>
            ))}
        </div>
    );
}


