import { useState } from 'react'
import './App.css'

const processCountInput = (value: number): number => {
  if (value < 0) value = 1
  if (value > 100) value = 10
  if (!Number.isInteger(value)) value = Math.floor(value)
  return value
}

const outputString = (str: string, val: number): string => {
  let outv: string = '';
  for (let i = 0; i < val; i++)
    outv += (str);

  return outv;
}

function App() {
  const [userString, setUserString] = useState("")
  const [userCount, setUserCount] = useState(1)
  const [displayString, setDisplayString] = useState("");

  return (
    <>
      <section className="container">
        <div>
          <h1>Frontend-Backend Contact</h1>
        </div>
        <div className="sameline">
          <p>Input string:</p> 
          <input 
            value={userString}
            onChange={(e) => setUserString(e.target.value)}
          />
        </div>        
        <div className="sameline">
          <p>Input number:</p> 
          <input type="number"
            value={userCount}
            onChange={(e) => setUserCount(processCountInput(e.target.valueAsNumber))}
          />
        </div>

        <div>
          <button
            type="button"
            className="submit"
            onClick={() => {
              setDisplayString(outputString(userString, userCount))
              console.log("here")
            }}
          >
            Submit
          </button>
        </div>

        <div>
            <p>Output string:</p>
            {displayString}
        </div>
        
      </section>
    </>
  )
}

export default App
