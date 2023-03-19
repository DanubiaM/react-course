function Form(){

    function cadastrar(e){
        e.preventDefault()
        console.log("Enviando to ")
    }

    return (

        <div>
            <p>We go talk ? Please, insert your info</p>

            <form onSubmit={cadastrar}>
                <label>Inser your name</label>
                <input type="text" placeholder="Name"/> 
                <label>Your born</label>
                <input type="date" />

                <button type="submit">Send</button>
            
            </form>

        </div>
    )



}

export default Form