import "../css/Accounts.css"
import Header from "./Header";
import { useEffect, useState } from "react";
import axios from 'axios';


export default function Sucursales() {

    const [sucursales, setSucursales] = useState([])

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/sucursales/`)
        .then(response => {
            setSucursales(response.data);
          });
    }, [])

    return (
        <>
            <Header></Header>
                <div className="container-m m-3" >
                    <h1> Listado de Sucursales </h1>
                    {sucursales.map(sucursal => (
                        <div className="container p-2" key={sucursal.id}>
                            <h3>{sucursal.nombre}</h3>
                            <p>ID: {sucursal.numero}</p>
                            <p>Dirección: {sucursal.direccion.calle +" "+ sucursal.direccion.altura}</p>
                            <p>Código postal: {sucursal.direccion.codigo_postal}</p>
                        </div>
                    ))}
                </div>
        </>
    )
}