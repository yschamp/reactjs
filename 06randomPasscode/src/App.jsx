import { useCallback, useEffect, useRef, useState } from "react"

function App() {
  let [ length, setLength ] = useState(8)
  let [ numberAllowed, setNumberAllowed ] = useState(false)
  let [ charactersAllowed, setCharactersAllowed ] = useState(false)
  let [ passcode, setPasscode ] = useState("")
  let [ btnColor, setBtnColor ] = useState("#0261fa")
  let [ showTooltip, setShowTootip ] = useState(false)
  let [ tooltip, setTooltip ] = useState('')


  let passcodeRef = useRef(null)

  const generatePasscode = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let num = "0123456789"
    let specialChars = "!@#$%^&*;:,."
    let ans = ""
    let index = undefined
    console.log("Inside passcode generation")

    if(numberAllowed) str += num
    if(charactersAllowed) str += specialChars

    console.log(`str: ${str}`)

    const size = str.length
    for(let i = 0; i < length; i++){
      index = Math.floor(Math.random()*size)
      ans += str.charAt(index)
    }

    setPasscode(ans)
  }, [passcode, numberAllowed, charactersAllowed])


  const copyToClipboard = useCallback(() => {
    passcodeRef.current.select()
    passcodeRef.current.setSelectionRange(0,4)
    window.navigator.clipboard.writeText(passcode)
  }, [passcode])

  useEffect(() => {
    generatePasscode()
  }, [length, numberAllowed, charactersAllowed])

  return (
    <div
    className="w-full h-screen bg-black"
    >
      <div
      className="w-full max-w-md bg-gray-500 mx-auto p-5 rounded-2xl"
      >
        <h1
        className="text-white text-center py-2"
        >Passcode Generator</h1>
        {
            showTooltip && (
              <div className="text-white px-2 py-1 bg-green-400 relative w-20 rounded-md">{tooltip}</div>
            )
          }
        <div 
        className="flex overflow-hidden rounded-lg mb-4"
        >
          <input 
          value={passcode}
          type="text"
          className="w-full py-1 px-2 outline-none text-orange-500"
          placeholder="Passcode"
          readOnly
          ref={passcodeRef}
          />
          <button
          className="text-white px-3"
          style={{backgroundColor: btnColor}}
          onClick={() => {
            copyToClipboard()
            setTooltip('Copied!')
            setShowTootip(true)
            setTimeout(() => {
              setShowTootip(false)
            }, 3000)
            // setBtnColor('#1aa302')
            // setTimeout(() => {
            //   setBtnColor('#0261fa')
            // },3000)
          }}
          >Copy</button>
          
        </div>
        <div className="w-full flex justify-center gap-5 text-white text-sm">
            <div
            className="flex"
            >
            <input
            type="range"
            id="range"
            min={6}
            max={15}
            value={length}
            className="mr-2 max-w-20"
            onChange={(e)=>{
               setLength(e.target.value)
            }}
            />
            <label htmlFor="range">Length: {length}</label>
          </div>
          <div className="flex gap-1">
            <input type="checkbox" id="numberAllowed" defaultChecked={numberAllowed} onChange={() => {
              setNumberAllowed((prev) => !prev)
            }}/>
            <label htmlFor="numberAllowed">Numbers</label>
          </div>
          <div className="flex gap-1">
            <input type="checkbox" id="charactersAlllowed" defaultChecked={charactersAllowed} onChange={() => {
              setCharactersAllowed((prev) => !prev) 
            }}/>
            <label htmlFor="charactersAlllowed">Characters</label>
          </div>
        </div>

      </div>

    </div>
  )
}

export default App
