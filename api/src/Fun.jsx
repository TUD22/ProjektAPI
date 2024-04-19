import { useState } from 'react'
import './Fun.css'
import Postacie from './Postacie'

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
        setTh(<tr><th><button>imie</button></th><th><button>wzrost</button></th><th><button>płeć</button></th><th><button>kolor oczu</button></th><th><button>waga</button></th></tr>)
        console.log(filmy)})
    .catch(err => console.log(err.message))


  }
  return (

    <>
     <button onClick={pobierzDaneOFilmach}>Pobierz dane</button>
     <Postacie listaFilmow={filmy} tytul={th}/>
    </>
  )
}

export default Fun