

import React, { useState } from 'react' ;
import Hello from './Component/Hello.jsx' ;
import Welcome from './Component/Welcome.jsx' ;
import Notes from './Component/Notes.jsx' ;
function App({note}){

  let [details, setDetails ] =useState({
    name:"" ,
    password:"" 
  }) ;

  let [count,setCount] = useState(0);

  let [newDetails, setNewDetails] = useState([]);
  console.log(newDetails);
  console.log('name' ,details);
  let handleDetails =(e)=>{
    e.preventDefault() ;

    let newDetail = {
      name:details.name,
      password:details.password
    }
    setNewDetails(newDetail);
  }

  let [statement, setStatement] = useState(true);


  return(
    <div>
      {
        statement ? 
        ("statement True") :("statement false") 
      }
        <p>count : {count}</p>
        <Hello note={note}/>
        <Welcome/>
        <Notes/>
        <form onSubmit={handleDetails}>
          <input
          type='text'
          placeholder='Enter your name'
          onChange={(event)=>setDetails({
            ...details,
            name:event.target.value
          })}
          value = {details.name}
        />
        <br/>
        <input
          type='password'
           placeholder='Enter your password'
          onChange={(event)=>setDetails({
            ...details,
            password:event.target.value
          })}
          value = {details.password}
        />
          <button type='submit'>submit</button>
        </form>
        <div>
          <button onClick={()=>setCount(count + 1)}>Increment</button>
          <button onClick={()=>setCount(count - 1) }>Decrement</button>
          <button onClick={()=>setCount(0)}>Reset</button>
        </div>
    </div>
  )
}

export default App ;