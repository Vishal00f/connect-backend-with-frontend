import { useEffect, useState } from 'react'
import axios from "axios"
function App() {
  const [jokes, setJokes] = useState([])
useEffect( ()=>{
    const response = axios.get("/api/jokes").then((response)=>setJokes(response.data))
  
})
  return (
    <div>
      <h1>Backend with frontend</h1>
      <h1>{jokes.length}</h1>
      {jokes.map((joke)=>(
          <div key={joke.id}>
              <h2>{joke.title}</h2>
              <h2>{joke.joke}</h2>
          </div>
      ))}
    </div>
  )
}

export default App
