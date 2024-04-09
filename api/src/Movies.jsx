function Movies({listaFilmow}){


    return(
       <>
            <h1>lista</h1>
            <ul>
                {
                    listaFilmow.map(item=> <li>{item.title}, {item.episode_id}</li>)
                }
            </ul>




       </>
    )
}

export default Movies