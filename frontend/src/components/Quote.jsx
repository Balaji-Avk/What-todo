import {useState} from 'react';
import {useEffect}  from 'react';
import './Quote.css';

export function Quote(){
    const [quote,setQuote]=useState('');
    const [author,setAuthor]=useState('');
    useEffect(()=>{
        const fetchQuote=async ()=>{
            try {
                const response = await fetch('https://get-quotes-api.p.rapidapi.com/category/success', {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': '4f05f3f841mshd11f58dd9c532a6p1e8984jsn2c5060cab9e4',
                        'X-RapidAPI-Host': 'get-quotes-api.p.rapidapi.com'
                    }
            });
                const result = await response.json();
                setQuote(result.quotes[0].quote);
                setAuthor(result.quotes[0].author)
            } catch (error) {
                setQuote('The way to get started is to quit talking and begin doing');
                setAuthor('Walt Disney');
            }
        }
        fetchQuote();
    })
    return(
        <header className="header-bar"> 
            <div className="quote">{quote}</div>
            <div className="author">-{author}</div>
        </header>
    )
}