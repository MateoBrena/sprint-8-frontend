import "../css/Payments.css";
import Navbar from "./Navbar";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie'
import { useEffect, useState } from "react";
import axios from 'axios';

export default function Payments() {

    const [pagos, setPagos] = useState([])
    const id = Cookies.get("ID")
    const navigate = useNavigate();

    useEffect(() => {
        if (id === undefined) {
            navigate("/login");
        } else{
        axios.get(`http://127.0.0.1:8000/api/clientes/${id}/pagos/`, 
        {auth: {
            username: 'admin',
            password: 'admin'
        }})
        .then(response => {
            setPagos(response.data);
          });
}}, [])

    return (
        <>
            <Header></Header>
            <div className="principal">
            <Navbar></Navbar>
            <div className="container-lg mt-3 tabla-bootstrap" id="pagos">
                <h2>Pagos realizados</h2>
                <p><strong>ATENCION:</strong> Algunos pagos pueden demorar hasta 24hs en verse reflejados.</p>
                <table className="table table-hover" id="tabla-pago">
                    <thead className="table-dark">
                        <tr>
                            <th>Fecha</th>
                            <th className="oculto">Beneficiario</th>
                            <th className="oculto">Rubro</th>
                            <th>Importe</th>
                        </tr>
                    </thead>
                    <tbody>
                    { pagos.map(pago => (
                            <tr key={pago.id}>
                                <td>{pago.fecha}</td>
                                <td className="oculto">{pago.beneficiario}</td>
                                <td className="oculto">{pago.rubro}</td>
                                <td>${pago.monto}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        </>
        
    )
}