import "../css/Navbar.css"
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { Link, useNavigate } from "react-router-dom";
import Cookies from 'js-cookie'


export default function Navbar() {

    const [open, setOpen] = useState(false);
    const [abierto, setAbierto] = useState(false);
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
            <nav className="menu-desplegado">
                <ul className="lista">
                     <li><Link to="/"><i className="fa-solid fa-house"></i> Inicio</Link></li>
                    <li><Link to="/accounts"><i className="fa-solid fa-credit-card"></i> Cuentas</Link></li>
                    <li><Link to="/payments"><i className="fa-solid fa-receipt"></i> Pagos</Link></li>
                    <li><Button id="transfer-collapse-button"
                        onClick={() => setOpen(!open)}
                        aria-controls="opciones-transferencia"
                        aria-expanded={open}><i className="fa-solid fa-arrow-right-arrow-left"></i> Transferencias
                        </Button></li>
                    <Collapse in={open}>
                        <div id="opciones-transferencias">
                            <div><Link to="/transfers">Comprobantes</Link></div>
                            <div><Link to="/newtransfer">Nueva transferencia</Link></div>
                        </div>
                    </Collapse>
                    <li><Link to="/conversor"><i className="fa-solid fa-dollar-sign"></i> Conversor</Link></li>
                    <li><Button id="prestamos-collapse-button"
                        onClick={() => setAbierto(!abierto)}
                        aria-controls="opciones-prestamos"
                        aria-expanded={abierto}><i className="fa-solid fa-handshake-simple"></i> Préstamos
                        </Button></li>
                    <Collapse in={abierto}>
                        <div id="opciones-prestamos">
                            <div><Link to="/loansimulator">Simulador</Link></div>
                            <div><Link to="/nuevoprestamo">Nuevo Préstamo</Link></div>
                            <div><Link to="/prestamos" >Mis Préstamos</Link></div>
                        </div>
                    </Collapse>
                    <li><Link to="/perfil"><i className="fa-solid fa-user"></i> Mi perfil</Link></li>
                    <li><Button id="transfer-collapse-button" onClick={handleLogOut}><i class="fa-solid fa-circle-xmark"></i> Cerrar Sesión</Button></li>
                </ul>
            </nav >
        </>
    )
}

