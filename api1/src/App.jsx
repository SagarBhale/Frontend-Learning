import axios from 'axios';
import React, {  useState } from 'react'

const App = () => {
  const [products,setProducts] = useState([]);
  const getProducts=()=>{
   const api = "https://fakestoreapi.com/products"; 
      axios
      .get(api)
      .then((products)=>{
        console.log(products);
        setProducts(products.data);
      })
      .catch((error)=>{
        console.log(error);
      }) 
  }

  const addProducts=()=>{
    const api = "https://fakestoreapi.com/products";
    
       axios
       .post(api,
        {
        title: 'sagar',
        price: 10000,
        description: 'sabun',
        image: 'https://i.pravatar.cc',
        category: 'daily life use'
       })


       .then((data)=>{
         console.log(data);
       })
       .catch((error)=>{
         console.log(error);
       }) 
   }


  return (
    <>
     <button className='border text-5xl' onClick={getProducts}>Fetch Data</button>
      <div>
        <ul>
          {products.length>0?(
            products.map(p=>(
            <li className='text-3xl bg-red-200 mb-2 w-1/4 p-5 '>
              
              {p.title};
            
            </li>
            ))
          ):(
            
            <h1>Loading</h1>
            )}
        </ul>
      </div>
      
      <hr className='mb-5'></hr>

      {/* <hr></hr> */}
      {/* <button className='border text-5xl' onClick={addProducts}>Save New Proudct Data</button> */}
    
    </>
  )
}

export default App