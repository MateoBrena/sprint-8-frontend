import "../css/DropDownMenu.css"
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie'

export default function DropdownMenu() {

    const [removeCookie, setRemoveCookie] = useState(false);
    const navigate = useNavigate();
    
    function handleLogOut() {
        setRemoveCookie(true)
    }

    useEffect(() => {
        if (removeCookie) {
            Cookies.remove('ID')
            Cookies.remove('Nombre')
            navigate("/");
        }
    },[removeCookie])

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
                    <li><Link to="" className="dropdown-item"><i className="fa-solid fa-piggy-bank"></i> Préstamos</Link></li>
                    <li><hr className="dropdown-divider"></hr></li>
                    <li><Link to="/loansimulator" className="dropdown-item">Simulador</Link></li>
                    <li><Link to="/nuevoprestamo" className="dropdown-item">Nuevo Préstamo</Link></li>
                    <li><Link to="/prestamos" className="dropdown-item">Mis Préstamos</Link></li>
                    <li><hr className="dropdown-divider"></hr></li>
                    <li><Link to="/perfil" className="dropdown-item"><i className="fa-solid fa-user"></i> Mi perfil</Link></li>
                    <li><button onClick={handleLogOut} className="dropdown-item"><i class="fa-solid fa-circle-xmark"></i> Cerrar Sesión</button></li>
                </ul>
            </div>
        </>
    )
}