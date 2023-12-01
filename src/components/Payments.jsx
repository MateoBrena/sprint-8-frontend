import "../css/Payments.css";
import Navbar from "./Navbar";
import Header from "./Header";

export default function Payments() {
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
                            <th className="oculto">Medio de pago</th>
                            <th className="oculto">Beneficiario</th>
                            <th>Importe</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>17/8/2023</td>
                            <td className="oculto">Débito</td>
                            <td className="oculto">ITBA</td>
                            <td>$968.54</td>
                        </tr>
                        <tr>
                            <td>7/8/2023</td>
                            <td className="oculto">Crédito</td>
                            <td className="oculto">Carrefour</td>
                            <td>$549.62</td>
                        </tr>
                        <tr>
                            <td>2/8/2023</td>
                            <td className="oculto">Débito</td>
                            <td className="oculto">YPF S.A</td>
                            <td>$358.38</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </>
        
    )
}