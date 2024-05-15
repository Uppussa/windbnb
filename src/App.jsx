import { useEffect, useState } from "react"
import Card from './components/Card';
import Nav from "./components/Nav";


function App() {
  const [results, setResults] = useState([])
  const getData = async () => {
    const rs = await fetch('stays.json')
    const rsJson = await rs.json()
    setResults(rsJson)
  }
  useEffect(() => {
    getData()
  }, [])


  return (
    <>
      <div className="container">
        <header>
          <Nav />
        </header>
        <main>
          <h2>Stays in Finland</h2>
          <div className="listings">
            {
              results.map((result, index) => (
              <Card key={index} result={result} />

            ))}
            

          </div>
        </main>

        <footer>
          <p>Created by username_here</p>
        </footer>
      </div>

    </>
  )
}

export default App