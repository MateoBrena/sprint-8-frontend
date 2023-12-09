import { Link } from "react-router-dom";
import "../css/HomeBankingAccess.css"
import Cookies from 'js-cookie'
import { useEffect, useState } from "react";


export default function HomeBankingAccess() {

    const id = Cookies.get("ID")
    const nombre = Cookies.get("Nombre")
    const [usuario, setUsuario] = useState(false)

    useEffect(() => {
        if (id !== undefined) {
            setUsuario(true)
        } else{
            setUsuario(false)
    }}, [])

    return(
        <>
            <div className="dropdown" id="home-banking">
            <button type="button" className="btn btn-dark" id="home-banking" data-bs-toggle="dropdown"><i className="fa-solid fa-right-to-bracket"></i></button>
            <ul className="dropdown-menu boton-index">
                {usuario ? <li className="boton-index"><Link to="/accounts" className="dropdown-item">Bienvenido {nombre}</Link></li> : <li className="boton-index"><Link to="/login" className="dropdown-item">Ingresar</Link></li>}
            </ul>
        </div>
        </>
    )
}