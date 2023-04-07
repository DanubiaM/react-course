import savings from "../../img/savings.svg"

function Home(){
    return (
        <section>
            <h1>Bem-vindo ao <span>Coats</span>!</h1>
            <p>Gerencie seus projetos aqui.</p>
            <a href="/"> Criar Projeto</a>
            <img alt="poupança-poroco" src={savings}></img>
        </section>
)
}

export default Home