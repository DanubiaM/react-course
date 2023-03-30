function Pessoa({url, name, profession}){

    return (
        <div>
            <img  src={url} alt={name}></img>
            <p> Nome -  {name}</p>
            <p> Profissão -  {profession}</p>

        </div>
    )
}

export default Pessoa