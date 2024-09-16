import React, { useState } from 'react'

function StateAdvanced() {
  
  const [val, setVal] = useState({name: "Sagar", isBanned: false})
  
  
  
  return (
    <div>
      <h1>name: {val.name}</h1>
      <h2>isBanned: {val.isBanned.toString()}</h2>
      <button onClick={()=>setVal({...val, isBanned:!val.isBanned })}>Change</button>

    </div>
    
  )
}

export default StateAdvanced