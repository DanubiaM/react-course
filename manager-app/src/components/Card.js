import SayMyName from "./SayMyName";
import Pessoa from "./Pessoa";
import styles from "./Card.module.css"
import Form from "./Form";
import ListaWick from "./ListaWick";

function Card(){
    const nome = "John Wick"
    const profession = "Actor"
    const url="https://m.extra.globo.com/incoming/25674117-f59-dcd/w488h275-PROP/whatsapp-image-2023-03-12-at-09.43.08.jpeg.jpg"
    const meusItens = ['John Wick - De Volta ao Jogo', 'John Wick: Um Novo dia Para Matar', 'John Wick 3: Parabellum', 'John Wick 4: Baba Yoga']

    return (
        <div className={styles.card}>
            <h1>I'm use React Framework </h1>
            <div className={styles.body}>                
                <Pessoa 
                 name={nome}
                 profession={profession} 
                 url={url}/>   
                <SayMyName name={nome}/>
                <ListaWick itens={meusItens}/>
            <Form/>
            </div>
        </div>
    )
}

export default Card;