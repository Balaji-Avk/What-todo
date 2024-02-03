import {useState} from 'react';
import {useEffect}  from 'react';
import './Quote.css';

export function Quote(){
    const [quote,setQuote]=useState('');
    const [author,setAuthor]=useState('');
    useEffect(()=>{
        const fetchQuote=async ()=>{
            try {
                const response = await fetch('https://what-todo-api.vercel.app/quote', {
                    method:'GET',
                    headers:{
                        "authorization":localStorage.getItem("accessToken"),
                        "Content-Type":"application/json"
                    }
            });
                const result = await response.json();
                setQuote(result.quote);
                setAuthor(result.author);
            } catch (error) {
                setQuote('The way to get started is to quit talking and begin doing');
                setAuthor('Walt Disney');
            }
        }
        fetchQuote();
    },[])
    return(
        <header className="header-bar"> 
            <div className="quote">{quote}</div>
            <div className="author">-{author}</div>
        </header>
    )
}