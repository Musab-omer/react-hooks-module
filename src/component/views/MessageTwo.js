import React, { useState } from "react";

let MessageTwo=()=>{
    let[message,setMessage]=useState('Hello')
    return(
        <React.Fragment>
        <div className="container mt-3">
         <div className="row">
             <div className="col">
                 <div className="card ">
                     <div className="card-header bg-secondary text-white">
                         <p className="h4">Functional | useState() </p>
                     </div>
                     <div className="card-body">
                         <p className="h4">{message}</p>
                         <button onClick={e=>setMessage('Good Morning')} className="btn btn-warning mx-2">Good Morning</button>
                         <button onClick={e=>setMessage('Good Afternoon')}  className="btn btn-success mx-2">Good Afternoon</button>
                         <button onClick={e=>setMessage('Good Evening')} className="btn btn-dark">Good Evening</button>
                     </div>
                 </div>
             </div>
         </div>
        </div>
     </React.Fragment>
    );
}
export default MessageTwo