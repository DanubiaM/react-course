import Item from "./Item"

function Lista(){

    return (
        <>
           
           <ul>
            <Item marca="Fiat" ano_lancamento={2000}></Item>
            <Item marca="BMW"></Item>

           </ul>
        </>
    )
}

export default Lista