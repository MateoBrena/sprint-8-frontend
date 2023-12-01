import "../css/DropDownMenu.css"
import { Link } from "react-router-dom";

export default function DropdownMenu() {
    return (
        <>
            <div className="dropdown" id="menu-dropdown">
                <button type="button" className="btn btn-dark"  data-bs-toggle="dropdown">Menú <i className="fa-solid fa-bars"></i></button>
                <ul className="dropdown-menu">
                    <li><Link to="/" className="dropdown-item"><i className="fa-solid fa-house"></i> Inicio</Link></li>
                    <li><Link to="/accounts" className="dropdown-item"><i className="fa-solid fa-credit-card"></i> Cuentas</Link></li>
                    <li><Link to="/payments" className="dropdown-item"><i className="fa-solid fa-receipt"></i> Pagos</Link></li>
                    <li><Link to="" className="dropdown-item"><i className="fa-solid fa-arrow-right-arrow-left"></i> Transferencias</Link></li>
                    <li><hr className="dropdown-divider"></hr></li>
                    <li><Link to="/transfers" className="dropdown-item">Comprobantes</Link></li>
                    <li><Link to="/newtransfer" className="dropdown-item">Nueva transferencia</Link></li>
                    <li><hr className="dropdown-divider"></hr></li>
                    <li><Link to="/conversor" className="dropdown-item"><i className="fa-solid fa-dollar-sign"></i> Conversor</Link></li>
                    <li><Link to="/loansimulator" className="dropdown-item"><i className="fa-solid fa-piggy-bank"></i> Préstamos</Link></li>
                </ul>
            </div>
        </>
    )
}