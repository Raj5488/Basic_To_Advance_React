import { useState } from 'react'
import './App.css'
function App() {
  const [color, setColor] = useState("black");

  return (
    <>
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
          <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
            <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
              
              <button
              onClick={() => setColor("red")}
              className='outline-none px-4 rounded-full text- 
              white shadow-lg'
              style={{backgroundColor: "red"}}
              >Red</button>

              <button
              onClick={() => setColor("green")}
              className='outline-none px-4 rounded-full text- 
              white shadow-lg'
              style={{backgroundColor: "green"}}
              >Green</button>

              <button
              onClick={() => setColor("blue")}
              className='outline-none px-4 rounded-full text- 
              white shadow-lg'
              style={{backgroundColor: "blue"}}
              >Blue</button>

              <button
              onClick={() => setColor("yellow")}
              className='outline-none px-4 rounded-full text- 
              white shadow-lg'
              style={{backgroundColor: "Yellow"}}
              >Yellow</button>

              <button
              onClick={() => setColor("white")}
              className='outline-none px-4 rounded-full text- 
              white shadow-lg'
              style={{backgroundColor: "White"}}
              >While</button>

              <button
              onClick={() => setColor("pink")}
              className='outline-none px-4 rounded-full text- 
              white shadow-lg'
              style={{backgroundColor: "pink"}}
              >Pink</button>

              <button
              onClick={() => setColor("purple")}
              className='outline-none px-4 rounded-full text- 
              white shadow-lg'
              style={{backgroundColor: "Purple"}}
              >Purple</button>

              <button
              onClick={() => setColor("Lavender")}
              className='outline-none px-4 rounded-full text- 
              white shadow-lg'
              style={{backgroundColor: "Lavender"}}
              >Lavender</button>
              
              <button
              onClick={() => setColor("Olive")}
              className='outline-none px-4 rounded-full text- 
              white shadow-lg'
              style={{backgroundColor: "olive"}}
              >Olive</button>

              
            </div>
          </div>
      </div>
      
    </>
  )
}

export default App
