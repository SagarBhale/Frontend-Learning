import React from "react";

function Card({ text,color }) {
  return (
    <button className={`px-3 py-1 ${color} text-zinc-100 text-xs rounded m-2`}>
      {text}
    </button>
    
  );
}

export default Card;

// props use hote hai apke components ko reusable bananae ke liye
// consider kro apke pass buttion and apko us buttion ko alg alg jagah dalne he app me
// to ap ek buttn component banaye and uska data hard code krne ki jsgh parent component se
// send karde and child component par use kar le


function App() {
  return (
    <>
      <Card text="Know more" color= "bg-blue-600"></Card>
      <Card text="Submit" color= "bg-red-600"></Card> 
      <Card text="Click me" color= "bg-yellow-600"></Card>
      <Card text="Hire me" color="bg-zinc-500"></Card>
    </>
  )
}
