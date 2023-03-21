function ListaWick({itens}){

    console.log(itens)
    return (
        <>
        <h3>Movies</h3>
            { itens.length > 0 ? (
                    itens.map((item, index) =>(
                        
                        <p key={index}>{item}</p>
                    ))
                ) : (
                    <p>No have data</p>
                )
            }
   
        </>
    )

}

export default ListaWick