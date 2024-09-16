import React, { useState } from 'react'

function StateBasics() {
    const [score,setScore] = useState(false);    
  return (
    <div>
        <h1>{score.toString()}</h1>
        <button onClick={()=>setScore(!score)}>Click</button>
    </div>
  )
}

export default StateBasics