import React from 'react';
// import Nav from './Components/Routing/Nav';
// import Routings from './utils/Routings';
import Home from './Context API/Component/Home';
import User from './Context API/Component/User';
import About from './Context API/Component/About';

import { Link,Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <>
      {/* <Nav />
      <Routings /> */  }
      <nav className='mt-10 flex justify-center gap-10'>
        <Link to="/">Home</Link>
        <Link to="/User">User</Link>
        <Link to="/About">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/user" element={<User/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
    </>
  );
}

export default App;

































































// import React, { useState } from 'react'
// import Card from './Components/Music-App/Card'
// import NavBar from './Components/Music-App/NavBar'
// function App() {



//   const data = [
//     {image:"https://images.unsplash.com/photo-1712884504011-a1ebe9960938?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNDh8fHxlbnwwfHx8fHw%3D",name:"Chalenger's",   artist:"Sagar",added:false},
//     {image:"https://images.unsplash.com/photo-1712884504011-a1ebe9960938?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNDh8fHxlbnwwfHx8fHw%3D",name:"Ek Pal Chain",  artist:"Neha kakkar",added:false},
//     {image:"https://images.unsplash.com/photo-1712884504011-a1ebe9960938?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNDh8fHxlbnwwfHx8fHw%3D",name:"Do Pal Ka Chain", artist:"Arijit",added:false},
//     {image:"https://images.unsplash.com/photo-1712884504011-a1ebe9960938?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNDh8fHxlbnwwfHx8fHw%3D",name:"Zindagi",        artist:"Shubh",added:false}
//   ];

//   const [songData, setSongData] = useState(data);

//   const handleClick = (index) =>{
//     setSongData((prev)=>{
//       return prev.map((item,itemindex)=>{
//         if(itemindex === index) return{...item, added:!item.added};
//         return item;
//       }) 
//     })
//   }


//   return (
//     <>
//       <div className="w-full h-screen bg-zinc-300 ">
//         <NavBar data={songData}></NavBar>

//         <div className="px-20 flex flex-wrap gap-10 mt-10">
//         {songData.map((obj,index)=>(
          
//           <Card data={obj} handleClick ={handleClick} index={index} key={index}></Card>
//         ))}
  
    
//         </div>
//       </div>
//     </>
//   )
// }

// export default App










































// import React, { useState } from 'react'
// import StateAdvanced from './Components/state/StateAdvanced'
// import Card from './Components/Passing-data-via-props/Card'
// import Cards from './Components/Passing-data-via-props/Cards';

// function App() {

//     const data = [
//       {name:"Sagar Bhale", profession: "Developer", image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",friends:false},
//       {name:"Akhshat Sharma", profession: "Artist", image:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBvcnRyYWl0fGVufDB8fDB8fHww",friends:false},
//       {name:"Harsh Sharma", profession: "Travellere", image:"https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHBvcnRyYWl0fGVufDB8fDB8fHww",friends:false},
//       {name:"Akash Chouhan", profession: "Java Developer", image:"https://images.unsplash.com/photo-1522556189639-b150ed9c4330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fHBvcnRyYWl0fGVufDB8fDB8fHww",friends:false},
//     ];

//    const [realdata,setRealData] = useState(data)
//   //  state jaha banti he vhi modified ki ja skti he 

//     const handleFriendsButton = (cardindex) =>{
//       setRealData((previous)=>{
//        return previousl.map((item,index)=>{
//           if(index === cardindex){
//             return{...item, friends:!item.friends}
//           }
//           return item;
//         })
//       }) 
//     }
//   return (
//     <>
//     <div className='w-full h-screen bg-zinc-300 flex gap-4 items-center justify-center'>
//     {realdata.map((item,index)=>(
//       /* <Cards image={item.image} name={item.name} profession = {item.profession}></Cards> */
//       <Cards key={index} index={index} handleClick = {handleFriendsButton} values = {item}></Cards>
      
//     ))}
//     </div>
//     </>
//   )
// }

// export default App
























// function App() {


//   const data =["harsh ", "nishi ", "Prachi"];
//   return (
//     <div>
  
//       {data.map((ele, index)=>(
      
//       <div className="px-32 py-4 bg-zinc-300 rounded-md w-fit">
//       {ele}
//       </div>
//       ))}
//     </div>
//   );
// }

// export default App





// import React from "react";
// import Card from "./Components/Card";



// function App(){
  
//   const data =12;
//   const name = "Apppyyy";
//   const calc = (12*13)/19;

//   console.log("Helloo")
//   return (
//     <div>
//     {data} {name} {calc}
//     </div>
//   );
// }

// export default App;



//   1. return <NavbarL></NavbarL>;
//   2. return(
//      <Navbar></Navbar>
//   )