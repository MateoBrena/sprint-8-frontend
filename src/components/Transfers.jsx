import "../css/Transfers.css"
import Navbar from "./Navbar";
import Header from "./Header";

export default function Transfers() {
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
                            <th className="oculto">Origen</th>
                            <th className="oculto">Destinatario</th>
                            <th>Monto</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>17/8/2023</td>
                            <td className="oculto">Juan Pérez</td>
                            <td className="oculto">Mi cuenta</td>
                            <td className="table-success">$968.54</td>
                        </tr>
                        <tr>
                            <td>7/8/2023</td>
                            <td className="oculto">Mi cuenta</td>
                            <td className="oculto">Matías Gonzalez</td>
                            <td className="table-danger">$549.62</td>
                        </tr>
                        <tr>
                            <td>2/8/2023</td>
                            <td className="oculto">Juliana Martínez</td>
                            <td className="oculto">Mi cuenta</td>
                            <td className="table-success">$358.38</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </>
        
    )
}