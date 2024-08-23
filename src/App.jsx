import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let getData=()=>{

  }
  getData()

  useEffect(()=>{
    getData()
  },[count])//[]Only one time call the function   //Count is the dependency

  return (
    <>
      
      <div className="card">
        <button className='bg-orange-700 p-3' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
