import { useState } from "react"

function Postacie({listaFilmow, tytul}){
    const sorted = listaFilmow.sort((a, b) => a.name.charCodeAt(0) - b.name.charCodeAt(0))
    const [sotrowanie, setSortowanie] = useState(listaFilmow)

    return(
       <>
            <h1>lista</h1>
            
            <table className="tabela">
                
                {tytul}
                {
                    sorted.map(item=> <tr><td>{item.name}</td><td>{item.height}</td><td>{item.gender}</td><td>{item.eye_color}</td><td>{item.mass}</td></tr>)
                }
            </table>




       </>
    )
}

export default Postacie