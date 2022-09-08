import { useState } from 'react'
import logo from './logo.svg'
import { useEffect } from 'react'
import './App.css'

function App() {
  const [museums, setMuseums] = useState<any[]>([
]
  )

 
  useEffect(()=>{
    fetch('http://localhost:4000/museums')
  .then(response => response.json())
  .then(data => {
    
    setMuseums(data);
    
    
  })
  console.log(museums)
  },[])
  

  return (
    <div className="App">
      <div className='header'>
     
        <h1 className='text'>Museums And Their Rarest Works</h1>
        </div>
        <div className='museumcard'>
        {museums.map((museum,i)=>
        <div className='card'>
        <h1 className='cardh1'>{museum.name}</h1>
        <p className='cardp'>{museum.city}</p>
      </div>
            
            )}
             
          

          
      
    </div>
    <div className='container'>
            
            <button>Add A Museum</button>
            <button>Add A Work</button>
          </div>
    </div>
  )
}

export default App
