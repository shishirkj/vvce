import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'


export default function Project() {
    const [input,setInput] = useState('')


    function handleInput(e){ 
        
e.preventDefault();
setInput(e.target.value)
console.log(input)
    }

   
  return (
    <div>

        <Link to= {'/text'}><button className='bg-gray-800 text-white px-4 py-2 ml-2 rounded-md'>Create project</button></Link>
        <input onChange = {handleInput} value = {input}/>
       <Link to = {`/text/documents/${input}`}>
       <button  className='bg-gray-800 text-white px-4 py-2 ml-2 rounded-md'>Join Room</button>
       </Link> 
    </div>
  )
}
