import { useNavigate } from "react-router-dom";

export function Signout(){
    const navigateTo=useNavigate();

    const handleSignout=()=>{
        localStorage.removeItem("accessToken");
        navigateTo('/auth/login');
    }
    return(
        <div style={{position:"absolute",top:"13px",right:"15px"}}>
        <button onClick={handleSignout} style={{backgroundColor:"rgb(255, 206, 146)",border:"2px solid black",borderRadius:"12px",height:"25px"}}>Signout</button>
        </div>
    )
}