import { useState, useCallback, useEffect, useRef } from 'react'

function App() {

  const [Length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [Password, setPassword] = useState("")

  // useRef hook to use
  const PasswordRef = useRef(null)

  const PasswordGenerator = useCallback(() =>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnioqrstuvwxyz"
    if(numberAllowed) str +="0123456789"
    if(characterAllowed) str +="~`!@#$%^&*()"

    for(let i=1;i<=Length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass);

  }, [length, numberAllowed, characterAllowed, setPassword])

  const copyPasswordToClipbord = useCallback(() =>{
    PasswordRef.current?.select();
    PasswordRef.current?.setSelectionRange(0,99)

    window.navigator.clipboard.writeText(Password)
  },[Password])

  useEffect(() =>{
    PasswordGenerator()
  }, [Length, numberAllowed, characterAllowed, PasswordGenerator])


  return (
      <>
        <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-600">

          <h1 className="text-white font-semibold text-center my-2">Password Generator</h1>

          <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input 
            type="text"
            value={Password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref= {PasswordRef}

            />
            <button 
            onClick={copyPasswordToClipbord}
            className='outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0'
            >Copy</button>
          </div>

                <div className="flex text-sm gap-x-2">
                  <div className="flex items-center gap-x-1">
                    <input
                      type="range"
                      min={6}
                      max={100}
                      value={Length}
                      className='cursor-pointer'
                      onChange={(e) => {setLength(e.target.value)}}
                    />
                    <label>Length:{Length}</label>
                  </div>

                      <div className="flex items-center gap-x-1">
                        <input 
                          type='checkbox'
                          defaultChecked ={numberAllowed}
                          id = "numberInput"
                          onChange={() =>{
                            setNumberAllowed((prev) => !prev);
                          }}
                        />
                        <label htmlFor='numberInput'>Numbers</label>
                      </div>
                          <div className="flex items-center gap-x-1">
                            <input 
                            type= "checkbox"
                            defaultChecked = {characterAllowed}
                            id = 'characterInput'
                            onChange={() =>{
                              setCharacterAllowed((prev) => !prev);
                            }}
                            />
                            <label htmlFor="characterInput">Characters</label>
                          </div>
                </div>

        </div>
      </>
  )
}

export default App
