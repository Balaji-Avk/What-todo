import {useState} from 'react';
import './CreateTodo.css';

export function CreateTodo(){
    const [title,setTitle] = useState("");
    const [description,setDescription]=useState("");

    const handleAdd = async (event)=>{
        event.preventDefault();
        const response = await fetch('https://what-todo-api.vercel.app/todo',{
            method:'POST',
            body:JSON.stringify({
            title:title,
            description:description
            }),
            headers:{
                "authorization":localStorage.getItem("accessToken"),
                "Content-Type" : "application/json"
            }
         })
        if(response.ok && title!=""){
            event.preventDefault();
            setTitle("");
            setDescription("");
            alert("todo added");
        }
        else{
            alert("failed to add todo");
        }
    }

    return (
        <div className='create-todo-main'>
            <h1>Add Todo</h1>
            <form onSubmit={(e)=>handleAdd(e)}>

            <div className='create-todo-container'>
                
                <input onChange={(event)=>{
                    setTitle(event.target.value);
                }} type='text' placeholder="Title" value={title} className='title-input' required></input><br />

                <input onChange={(event)=>{
                    setDescription(event.target.value);
                }} type='text' placeholder="Description" value={description} className='description-input' required></input> <br />

                <button type='submit'>Add</button>
            </div>
            </form>
        </div>
    )
}