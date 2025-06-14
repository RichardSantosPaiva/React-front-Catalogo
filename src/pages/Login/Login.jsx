import {useState} from 'react'
import api from '../../service/api'
import { useNavigate } from 'react-router-dom'

export default function Login(props) {
    const [name, setName] = useState();
    const [passwordUser, setPassword] = useState();
    const navigate = useNavigate()

    async function Login(e) {
        e.preventDefault(); 

        try {
        
            const response = await api.post(`/Auth/login`, {
                UserName: name,
                Password: passwordUser
            })

            if(response.data.token){
                console.log(response.data)
                localStorage.setItem("jwt", response.token)
                 navigate('/catalogo', { replace: true })
                //console.log("token salvo",response.token)
             }
             /*else{
                console.warn("falhou, sem token")
             }*/  
        }catch(error){
            console.log("erro no login", error)
        }

    }

    return (
        <div className="container">
            <h1>login</h1>
            <form onSubmit={e => Login(e)}>
                <input type="text" name="user" onChange={e => setName(e.target.value)}/>
                <input type="text" name="senha"  onChange={e => setPassword(e.target.value)}/>
                <button type="submit">enviar</button>
            </form>
        </div>
    )
}