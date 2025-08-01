
let Hello = ({note})=>{
  console.log("hello component loaded");

  let name = "hello" ;
  return(
    <div>
      <p>this is hello</p>
      <p>{name}</p>
      {
        note.map((item)=><li key={item.id}>{item.id},{item.age}, {item.name}</li>)
      }
    </div>
  )
}

export default Hello;