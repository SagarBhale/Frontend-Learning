import React, { useState } from 'react'

function StateIntermediate() {

    const [val, setVal] = useState(12);

  return (
    <div>
        <h1>{val}</h1>
        <button onClick={()=>setVal((prev)=>prev+1)}>Change kro</button>
        <button onClick={()=>setVal((prev)=>prev-1)}>Change kro</button>
    </div>
  ) 
}

export default StateIntermediate; 