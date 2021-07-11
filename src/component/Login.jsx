import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Login(props) {
    let history=useHistory()
    console.log(history);
    return (
        <div>
            <button onClick={()=>{
                props.send("kiran")
                history.push("/home")
            }} >LOGIN</button>
        </div>
    )
}
