import "../css/Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <>
            <footer>
                <p>Términos de uso</p>
                <p>Políticas de privacidad</p>
                <p>Contacto</p>
                <Link to="/sucursales"> Nuestras Sucursales </Link>
            </footer>
        </>
    )
}