import { useState } from 'react'
import './App.css'

const cntMod = (cnt: number, base: number) => {
  if (cnt === 1) {
    return base
  }
  else if (cnt&1) return 3*cnt + 1
  else return cnt/2
};

function App() {
  const [base, setBase] = useState(1)
  const [count, setCount] = useState(1)
  const [seq, setSeq] = useState("")

  return (
    <>
      <section id="center">
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => {
            if (count === 1) {setBase(base => base + 1); setSeq(seq => seq + "\n");}
            setCount(count => cntMod(count, base));
            setSeq(seq => seq + " " + count);
            console.log(count);
          }}
        >
          Count is {count}
        </button>

          <h2>
          Sequence generated:
          </h2>
          <p style={{ whiteSpace: "pre-line" }}>
            {seq}
          </p>

      </section>
    </>
  )
}

export default App
