function Movies({listaFilmow}){


    return(
       <>
            <h1>lista</h1>
            <table className="tabela">
                <tr>
                    <th>imie</th>
                    <th>wzrost</th>
                    <th>płeć</th>
                    <th>kolor oczu</th>
                    <th>waga</th>
                </tr>
                {
                    listaFilmow.map(item=> <tr><td>{item.name}</td><td>{item.height}</td><td>{item.gender}</td><td>{item.eye_color}</td><td>{item.mass}</td></tr>)
                }
            </table>




       </>
    )
}

export default Movies