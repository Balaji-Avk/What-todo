import {useState} from 'react';
import './SignInSignUp.css';
import {useNavigate} from'react-router-dom';

export function Login() {
    const navigateTo=useNavigate();
    const [username,setUsername] = useState("");
    const [password,setPassword]=useState("");
    const [action,setAction]=useState("Sign Up");
    const [resmsg,setResmsg]=useState("");

    const handleSignIn=async function (){
        const response=await fetch('https://whattodoo.vercel.app/auth/signin',{
            method:"POST",
            body:JSON.stringify({
                username:username,
                password:password
            }),
            headers:{
                "Content-Type":"application/json"
            }
        });  
        if(!response.ok){
            const finalRes=await response.json();
            setResmsg(finalRes.error);
        }
        else{
            const finalRes=await response.json();
            setResmsg(finalRes.msg);
            const token="Bearer "+finalRes.accessToken;
            localStorage.setItem("accessToken",token);
            navigateTo("/home");
        }

    }
    const handleSignUp=async function (){
        const response=await fetch('https://whattodoo.vercel.app/auth/signup',{
            method:"POST",
            body:JSON.stringify({
                username:username,
                password:password
            }),
            headers:{
                "Content-Type":"application/json"
            }
        });
        if(!response.ok){
            const finalRes=await response.json();
            setResmsg(finalRes.error);
        }
        else{
            const finalRes=await response.json();
            setResmsg(finalRes.msg);
        }        
    }
    const handleSubmit = (event) => {
        event.preventDefault();
      }
    return(
        <div className="SignIn-body">
        <div className="wrapper">
            <form onSubmit={(e)=>handleSubmit(e)}>
                <h1>{action}</h1>
                <div className="input-box">
                    <input type="text" className="input-box" value={username} onChange={(event)=>setUsername(event.target.value)} placeholder="username" ></input>
                </div>
                <div className="input-box">
                    <input type="password" className="input-box" value={password} onChange={(event)=>setPassword(event.target.value)} placeholder='password' ></input>
                </div>
                <div className="error-msg">{resmsg}</div>
                {action=="Sign Up"?<div></div>:<div className="password-reset">forgot password ?<a href=''>Click here!</a></div>}               
                <div className='flex-middle'>
                    <div className="btns-container">
                        <button type="submit" className="signUpsingIn-btns" id={action==="Sign In"?"normal":"gray"} onClick={()=>{if(action==="Sign In"){handleSignIn()};setAction("Sign In");setResmsg("")}}><p>Sign In</p></button>
                        <button type="submit" className="signUpsingIn-btns" id={action==="Sign Up"?"normal":"gray"} onClick={()=>{if(action==="Sign Up"){handleSignUp()};setAction("Sign Up");setResmsg("")}}><p>Sign Up</p></button>
                    </div>
                </div>
            </form>
        </div>
        </div>
    )
}
