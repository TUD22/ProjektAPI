import Movies from './Movies'
import { useState } from 'react'
import './Fun.css'

function Fun(){
  const [filmy, setFilmy] = useState([])
  const [th, setTh] = useState()

  const pobierzDaneOFilmach = ()=>{

    fetch("https://swapi.dev/api/people")
    .then( res => {
      return res.json()
    })
    .then(data=> {
        setFilmy(data.results)
        console.log(data.results)})
    .catch(err => console.log(err.message))


    setTh(<tr><th>imie</th><th>wzrost</th><th>płeć</th><th>kolor oczu</th><th>waga</th></tr>)
  }
  return (

    <>
     <button onClick={pobierzDaneOFilmach}>Pobierz dane</button>
     <Movies listaFilmow={filmy} tytul={th}/>
    </>
  )
}

export default Fun