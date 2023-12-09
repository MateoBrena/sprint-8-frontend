import { useEffect, useState } from 'react'
import axios from 'axios';
import Header from './Header'
import Navbar from './Navbar'
import "../css/Perfil.css"
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function Perfil() {

    const [perfil, setPerfil] = useState(null)
    const id = Cookies.get("ID")
    const navigate = useNavigate();

    useEffect(() => {
        if (id === undefined) {
            navigate("/login");
        } else{
        axios.get(`http://127.0.0.1:8000/api/clientes/${id}/`, 
        {auth: {
            username: 'admin',
            password: 'admin'
        }})
        .then(response => {
            setPerfil(response.data);
          });
    }}, [])

    return (
        <>
            <Header></Header>
            <div className="principal">
                <Navbar></Navbar>
                {perfil ? <div className='perfil'>
                    <h1>Detalle de cliente</h1>
                    <p>Nombre y Apellido: {perfil.name +" "+ perfil.surname}</p>
                    <p>Nombre de usuario: {perfil.usuario.username}</p>
                    <p>DNI: {perfil.dni}</p>
                    <p>Tipo: {perfil.tipo.cliente_tipo}</p>
                    <p>Direccion: {perfil.direccion.calle +" "+ perfil.direccion.altura}</p>
                    <p>Código postal: {perfil.direccion.codigo_postal}</p>
                    <p>Fecha de nacimiento: {perfil.dob}</p>
                    <p>Sucursal: {perfil.branch.nombre}</p>
                    <p>Cantidad de cuentas: {perfil.cuentas.length}</p>
                    <p>Cantidad de tarjetas: {perfil.tarjetas.length}</p>
                    <p>Cantidad de préstamos: {perfil.prestamos.length}</p>
                </div> : <div> No hay ningún usuario</div> } 
            </div>
        </>
    )
}