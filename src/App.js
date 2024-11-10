
import { useEffect, useState } from 'react';
import './App.css';
import Post from './component/post';

function App() {
  const [data,setData] = useState([])
 
 useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
  .then(res=>res.json())
  .then(data=>setData(data))
 },[])
 

  
  return (
    <div className="App">
        <h1 className='text-green-500 text-4xl'>This is my first API call to create cards</h1>
        <div className='grid lg:grid-cols-3 gap-4 mt-5'>
        {
          data.map((element,index)=><Post key={index} element={element}></Post>)
        }
        </div>
        
      
    </div>
  );
}

export default App;



