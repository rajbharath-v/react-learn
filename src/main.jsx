import { createRoot } from 'react-dom/client'
import App from './App.jsx'


let notes = [
    {
        id:1,
        name:"raj",
        age:23
    },
    {
        id:2,
        name:"rajbharath",
        age:30
    },
    {
        id:3,
        name:"raja",
        age:20
    },


]
createRoot(document.getElementById('root')).render(
    <App note = {notes}/>
);
