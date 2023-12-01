import { Link } from "react-router-dom";
import "../css/HomeBankingAccess.css"

export default function HomeBankingAccess() {
    return(
        <>
            <div className="dropdown" id="home-banking">
            <button type="button" className="btn btn-dark" id="home-banking" data-bs-toggle="dropdown"><i className="fa-solid fa-right-to-bracket"></i></button>
            <ul className="dropdown-menu boton-index">
                <li className="boton-index"><Link to="/login" className="dropdown-item">Home Banking</Link></li>
            </ul>
        </div>
        </>
    )
}