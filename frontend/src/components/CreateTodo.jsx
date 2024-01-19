import {useState} from 'react';

export function CreateTodo(){
    const [title,setTitle] = useState("");
    const [description,setDescription]=useState("");

    const handleAdd = async (event)=>{
        const response = await fetch('https://what-todo-api.vercel.app/todo',{
            method:'POST',
            body:JSON.stringify({
            title:title,
            description:description
            }),
            headers:{
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
        <div>
            <input onChange={(event)=>{
                setTitle(event.target.value);
            }} type='text' placeholder="Title" value={title}></input><br />

            <input onChange={(event)=>{
                setDescription(event.target.value);
            }} type='text' placeholder="Description" value={description}></input> <br />

            <button onClick={handleAdd}>Add</button>
        </div>
    )
}