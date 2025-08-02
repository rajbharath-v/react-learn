import React, { useEffect } from 'react' ;

function App(){

  useEffect(()=>{
    document.title = "React hooks"
  })

  return(
    <div>
        <p>Hooks concepts</p>
    </div>
  )
}

export default App;