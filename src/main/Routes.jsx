import {Routes, Route } from 'react-router-dom'; 
import Catalogo from "../pages/catalogo/Catalogo"
import Login from "../pages/Login/Login"

export default function AppRoutes() {
    return(
        <Routes>
            <Route exact path="/" element={<Login/>}/>
            <Route path="/catalogo" element={<Catalogo/>}/>
        </Routes>
    )
}