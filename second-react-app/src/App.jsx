import axios from 'axios'
import React from 'react'

const App = () => {
//  Get Products
  const getProducts = () =>{
  const api ="https://fakestoreapi.com/products/1"
  
  axios
  .get(api)
  .then ((products) => {
    console.log(products);
  })
  .catch((err) => console.log(err));
};

// Add products
const addProducts = () =>{
  const api ="https://fakestoreapi.com/products/1"
  
  axios
  .post(api, {

    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic'

  })
  .then ((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));
};


return <div className='pt-[5%] pl-[5%]'>
<button onClick={getProducts} className='px-5 text-red-300 rounded '>Call Product API</button>
<br></br> <br></br>
<button onClick={addProducts} 
className='px-5 text-red-300 rounded '>Save New Product in API</button>

</div>


};

export default App