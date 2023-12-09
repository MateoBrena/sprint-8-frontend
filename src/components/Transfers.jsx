import "../css/Transfers.css"
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie'
import { useEffect, useState } from "react";
import axios from 'axios';
import Navbar from "./Navbar";
import Header from "./Header";


export default function Transfers() {

    const [transferencias, setTransferencias] = useState([])
    const id = Cookies.get("ID")
    const navigate = useNavigate();

    useEffect(() => {
        if (id === undefined) {
            navigate("/login");
        } else{
        axios.get(`http://127.0.0.1:8000/api/clientes/${id}/transferencias/`, 
        {auth: {
            username: 'admin',
            password: 'admin'
        }})
        .then(response => {
            setTransferencias(response.data);
          });
}}, [])

    return (
        <>
            <Header></Header>
            <div className="principal">
            <Navbar></Navbar>
            <div className="container-lg mt-3 tabla-bootstrap" id="transferencias">
                <h2>Transferencias enviadas/recibidas</h2>
                <p><strong>ATENCION:</strong> Recuerde verificar la identidad de los destinatarios y transferir solamente a personas de confianza. En caso de recibir transferencias por error, por favor contacte al banco.</p>
                <table className="table table-hover" id="tabla-pago">
                    <thead className="table-dark">
                        <tr>
                            <th>Fecha</th>
                            <th className="oculto">Destinatario</th>
                            <th className="oculto">Tipo</th>
                            <th>Monto</th>
                        </tr>
                    </thead>
                    <tbody>
                        { transferencias.map(transferencia => (
                            <tr key={transferencia.id}>
                                <td>{transferencia.fecha}</td>
                                <td className="oculto">{transferencia.destinatario}</td>
                                <td className="oculto">{transferencia.tipo}</td>
                                {transferencia.tipo === "Saliente" ? <td className="table-danger">${transferencia.monto}</td> : <td className="table-success">${transferencia.monto}</td>}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        </>
        
    )
}