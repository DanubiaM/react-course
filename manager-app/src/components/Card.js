import SayMyName from "./SayMyName";
import Pessoa from "./Pessoa";
function Card(){
    const nome = "John Wick"
    const profession = "Actor"
    const url="https://m.extra.globo.com/incoming/25674117-f59-dcd/w488h275-PROP/whatsapp-image-2023-03-12-at-09.43.08.jpeg.jpg"

    return (
        <div>
            <h1>I'm use React Framework </h1>
            <div>
                
                <Pessoa 
                 name={nome}
                 profession={profession} 
                 url={url}/>   
                <SayMyName name={nome}/>

            </div>
        </div>
    )
}

export default Card;