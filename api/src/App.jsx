import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Movies from './Movies'

function App() {
  const [filmy, setFilmy] = useState([])

  const pobierzDaneOFilmach = ()=>{

    fetch("https://swapi.dev/api/films")
    .then( res => {
      console.log(res)
      return res.json()
    })
    .then(data=> setFilmy(data.results)
    
)
    .catch(err => console.log(err.message))
  }
  return (

    <>
     
     <h1>Super filmy</h1>
     <button onClick={pobierzDaneOFilmach}>Pobierz dane</button>
     <Movies listaFilmow={filmy}></Movies>

    </>
  )
}

export default App
