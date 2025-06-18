import {Routes, Route } from 'react-router-dom'; 
import Catalogo from "../pages/catalogo/Catalogo"
import Login from "../pages/login/Login"
import Cadastro from '../pages/cadastro/Cadastro';

export default function AppRoutes() {
    return(
        <Routes>
            <Route exact path="/" element={<Login/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route path="/catalogo" element={ <Catalogo />}/>
            <Route path="/cadastro" element={<Cadastro/>}/>
        </Routes>
    )
}