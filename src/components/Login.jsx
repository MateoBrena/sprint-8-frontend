import "../css/Login.css"
import { Link, useNavigate } from "react-router-dom"
import LoginHeader from "./LoginHeader"
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel  from "react-bootstrap/FloatingLabel";


export default function Login() {
    const [validated, setValidated] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault()
            e.stopPropagation()
        }
        setValidated(true)
    }

    const handleClick = () => {
        if (validated === true) {
            navigate("/accounts")
        }
    }

    return (
        <>
            <LoginHeader></LoginHeader>
            <section className="menu-ingreso">
                <div className="login">
                    <h1 className="header-centre"> Bienvenido/a Banco Río, tu banco de confianza</h1>
                    <h3 className="header-centre"> Para continuar, ingresa tus credenciales</h3>
                    <div className="contenedor-login">
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Group controlId="validationCustom01">
                                <FloatingLabel controlId="floatingInput" label="Usuario" className="m-3">
                                    <Form.Control required type="text" name="usuario" placeholder="nombre@ejemplo.com" />
                                    <Form.Control.Feedback type="invalid">Ingrese un usuario</Form.Control.Feedback>
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group controlId="validationCustom02">
                                <FloatingLabel controlId="floatingPassword" label="Contraseña" className="m-3">
                                    <Form.Control required type="password" name="password" placeholder="Contraseña"/>
                                    <Form.Control.Feedback type="invalid">Contraseña inválida</Form.Control.Feedback>
                                </FloatingLabel>
                            </Form.Group>
                            <button type="submit" className="boton" onClick={handleClick}>Ingresar</button>
                        </Form>
                        <p className="center"> Todavía no tienes una cuenta? Puedes <Link to="">crear una nueva cuenta</Link></p>
                    </div>
                </div>
            </section>
        </>
    )
}