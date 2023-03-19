import {useState} from 'react'

function Form(){

    function cadastrar(e){
        e.preventDefault()
        console.log(`Usuario ${usuario} com senha ${password} nascido ${born} com nome ${name}`)
        console.log("Enviando to ")
    }

    const [name, setName] = useState()
    const [usuario, setUsuario] = useState("DanubiaM")
    const [born, setBorn] = useState()
    const [password, setPassword] = useState()



    return (

        <div>
            <p>We go talk ? Please, insert your info</p>

            <form onSubmit={cadastrar}>
                <div>
                    <label htmoFor="name"> Inser your name</label>
                    <input type="text" name="name" id="name" placeholder="Name" onChange={(e) => setName(e.target.value)}/> 
                </div>
                <div>
                    <label htmlFor="born">Your born</label>
                    <input type="date" name="born" id="born" onChange={(e) => setBorn(e.target.value)}/>
                </div>
                <br/>
                <div>
                    <label htmoFor="user"> Inser your user</label>
                    <input type="text" name="user" id="user" placeholder="user" value={usuario} onChange={(t)=> setUsuario(t.target.value)}/> 
                </div>
                <div>
                    <label htmlFor="password">Your password</label>
                    <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
             




                <button type="submit">Send</button>
            
            </form>

        </div>
    )



}

export default Form