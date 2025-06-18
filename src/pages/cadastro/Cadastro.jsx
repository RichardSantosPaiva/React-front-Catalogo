import {useState} from 'react'
import api from '../../service/api'
import { useNavigate } from "react-router-dom";

export default function Cadastro(props) {
    const [userName, setUserName] = useState();
    const [email, setEmail] = useState();
    const [passwordUser, setPassword] = useState();
    const navigate = useNavigate();


    async function Cadastro(e) {
        e.preventDefault(); 

        try {
            console.log('[🔐 Login] Enviando dados para cadastro:', {
                userName: userName,
                email: email,
                password: passwordUser
            })

            const response = await api.post(`/Auth/register`, {
                userName: userName,
                email: email,
                password: passwordUser
            }, {
              withCredentials: true 
            })
            
            navigate('/login') 

        }   catch (error) {
                console.error('[❌ Cadastro Erro]', error);
                if (error.response) {
                    console.log('Usuario já cadastrado!')
                    console.error('🔎 Status:', error.response.status);
                    console.error('📦 Data:', error.response.data);
                }
        }
    }

    return (
        <div className="container">
            <h1>Cadastro</h1>
            <form onSubmit={e => Cadastro(e)}>
                <input type="text" name="name" onChange={e => setUserName(e.target.value)}/>
                <input type="text" name="email" onChange={e => setEmail(e.target.value)}/>
                <input type="text" name="senha"  onChange={e => setPassword(e.target.value)}/>
                <button type="submit">enviar</button>
            </form>
        </div>
    )
}