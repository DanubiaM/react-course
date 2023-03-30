import {useState} from 'react'
import Button from './Button'

function Condicional(){
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()
  
    function enviarEmail(e){
        e.preventDefault()

        setUserEmail(email)

        console.log(userEmail)
    }

    function limparEmail(e){
        e.preventDefault()
        setUserEmail()
    }

    return (
        <div>
            <h2>Cadastre seu e-mail</h2>
            <form>
                <label htmoFor="name"> Inser your email </label>
                <input type="email" name="email" id="email" placeholder="email" onChange={(e) => setEmail(e.target.value) }/> 
                <button type="submit" onClick={enviarEmail} >Enviar Email</button>
            </form>
            {userEmail && (
                <div>
                    <h2>Email carregado ! {userEmail} </h2>
                    <button type="submit" onClick={limparEmail} >Limpar</button>

                </div>
            )}
        </div>
    )
}


export default Condicional