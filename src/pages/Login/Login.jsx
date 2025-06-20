import {useState} from 'react'
import api from '../../service/api'
import { useNavigate , Link} from "react-router-dom";

export default function Login(props) {
    const [email, setEmail] = useState();
    const [passwordUser, setPassword] = useState();
    const navigate = useNavigate();


    async function Login(e) {
        e.preventDefault(); 

        try {
            console.log('[🔐 Login] Enviando dados para login:', { UserName: name, Password: passwordUser })

            const response = await api.post(`/Auth/login`, {
                email: email,
                password: passwordUser
            }, {
              withCredentials: true 
            })

            if (response.status == 200) {
                navigate('/catalogo')
            } 

        }   catch (error) {
                console.error('[❌ Login Erro]', error);
                if (error.response) {
                    alert("usuário não cadastrado")
                    console.error('🔎 Status:', error.response.status);
                    console.error('📦 Data:', error.response.data);
                }
        }
    }

    return (
        <div className="container">
            <h1>login</h1>
            <form onSubmit={e => Login(e)}>
                <input type="text" name="email" onChange={e => setEmail(e.target.value)}/>
                <input type="text" name="senha"  onChange={e => setPassword(e.target.value)}/>
                <button type="submit">enviar</button>
            </form>
            <Link to="/cadastro">Cadastra-se</Link>
        </div>
    )
}