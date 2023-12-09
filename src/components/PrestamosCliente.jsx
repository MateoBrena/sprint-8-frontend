import "../css/Accounts.css"
import Navbar from "./Navbar";
import Header from "./Header";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Cookies from "js-cookie";


export default function PrestamosCliente() {
    const id = Cookies.get("ID")
    const [prestamos, setPrestamos] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        if (id === undefined) {
            navigate("/login");
        } else{
        axios.get(`http://127.0.0.1:8000/api/clientes/${id}/prestamos/`, 
        {auth: {
            username: 'admin',
            password: 'admin'
        }})
        .then(response => {
            setPrestamos(response.data);
          });
    }}, [])

    return (
        <>
            <Header></Header>
            <div className="principal">
                <Navbar></Navbar>
                <div className="container-m m-3  contenedor-cuentas" >
                    {prestamos.map(prestamo => (
                        <div className="container p-2 bg-secondary text-white cada-cuenta" key={prestamo.id}>
                            <h4>Tipo: {prestamo.tipo}</h4>
                            <p>Monto: ${prestamo.monto}</p>
                            <p>Estado: {prestamo.estado}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>

    )
}