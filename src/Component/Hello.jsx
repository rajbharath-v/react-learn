
let Hello = ()=>{
  console.log("hello component loaded");

  let name = "hello" ;
  return(
    <div>
      <p>this is hello</p>
      <p>{name}</p>
    </div>
  )
}

export default Hello;