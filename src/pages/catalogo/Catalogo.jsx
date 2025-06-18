
    import api from '../../service/api'

    import { useEffect, useState } from 'react';
    import { useNavigate } from "react-router-dom";

    export default function Catalogo(){
        const [categorias, setCategorias] = useState([])
        const navigate = useNavigate();

        useEffect(() => {
            api.get('http://localhost:5042/Categorias', { withCredentials: true })
                .then( response => {
                    console.log(response.data)
                        setCategorias(response.data)
                }) 
        },[])

        return(
            <div>
            {categorias.map( categoria => (
                <div key={categoria.categoriaId}>
                    <li>{categoria.categoriaId}</li>
                    <li>{categoria.nome}</li>
                    <li>{categoria.imagemUrl}</li>
                </div>
            ))}
            </div>
        )
    }