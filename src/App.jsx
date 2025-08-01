
import React from 'react' ;
import Hello from './Component/Hello';
import './Style/app.css';
import Welcome from './Component/Welcome';

function App({note}){

  console.log(note) ;
  console.log("welcome ") ;
  let name = "javascript " ;
  return(
    <div>
        <h2>Hello welcome to react</h2>
        <p>hello </p>
        <ul>
          {
            note.map((item)=><li key={item.id}>{item.name}</li>)
          }
        </ul>
        <p>{`myname is ${name}`}</p>
        <button className='bg-danger p-2'>submit</button>
        <Welcome/>
    </div>
  )
}

export default App;
