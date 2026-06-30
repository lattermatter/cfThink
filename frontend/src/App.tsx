import { useState } from 'react'
import './App.css'

const processCountInput = (value: number): number => {
  if (value < 0) value = 1
  if (value > 100) value = 10
  if (!Number.isInteger(value)) value = Math.floor(value)
  return value
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
            onClick={async () => {
              const params = new URLSearchParams({
                userString: userString,
                userNum: userCount.toString()
              })
              try {
                const queryStringConcat = `http://localhost:8080/?${params.toString()}`;
                const response = await fetch(queryStringConcat);
                if (!response.ok) {
                  throw new Error(`Response status: ${response.status}`);
                }

                const result = await response.json();
                setDisplayString(result.output)
              } catch (error) {
                if (error instanceof Error)
                  console.error(error.message);
              }
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
