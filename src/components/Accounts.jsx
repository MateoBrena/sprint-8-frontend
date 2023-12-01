import "../css/Accounts.css"
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Header from "./Header";
import { useEffect, useState } from "react";
import axios from 'axios';

export default function Accounts() {
    const [cuentas, setCuentas] = useState([])
    const [tarjetas, setTarjetas] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/clientes/1/cuentas/', 
        {auth: {
            username: 'admin',
            password: 'admin'
        }})
        .then(response => {
            setCuentas(response.data);
          });
    }, [])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/clientes/1/tarjetas/', 
        {auth: {
            username: 'admin',
            password: 'admin'
        }})
        .then(response => {
            setTarjetas(response.data);
          });
    }, [])

    return (
        <>
            <Header></Header>
            <div className="principal">
                <Navbar></Navbar>
                <div className="container-m m-3 contenedor-cuentas" >
                    {cuentas.map(cuenta => (
                        <div className="container p-2 bg-secondary text-white cada-cuenta" key={cuenta.id}>
                            <h4 >Cuenta: {cuenta.tipo.cuenta_tipo}</h4>
                            <p>Saldo: ${cuenta.balance}</p>
                            <p>IBAN: {cuenta.iban}</p>
                            <Link to="" className="btn btn-primary">Ver detalle</Link>
                        </div>
                    ))}
                    {tarjetas.map(tarjeta => (
                        <div className="container p-2 bg-secondary text-white cada-cuenta" key={tarjeta.id}>
                            <h4 >{tarjeta.numero}</h4>
                            <p>Marca: {tarjeta.marca.marca}</p>
                            <p>Tipo: {tarjeta.tipo}</p>
                            <p>Vencimiento: {tarjeta.fecha_expiracion}</p>
                            <Link to="" className="btn btn-primary">Ver detalle</Link>
                        </div>
                    ))}

                </div>
            </div>
        </>

    )
}