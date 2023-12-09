import "../css/Login.css"
import { Link, useNavigate } from "react-router-dom"
import LoginHeader from "./LoginHeader"
import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Cookies from 'js-cookie'
import axios from 'axios';


export default function Login() {

    const [validated, setValidated] = useState(false);
    const navigate = useNavigate();

    useEffect(()=>{
        if(validated){
            navigate("/accounts")
        }
    }, [validated]);

    async function verifyLogin(e) {
        e.preventDefault()
        const usernameInput = document.querySelector('#usuario').value;
        const passwordInput = document.querySelector('#password').value;

        let dataUrl = `http://127.0.0.1:8000/api/clientes/`;

        const response = await axios.get(dataUrl, {
            auth: {
                username: usernameInput,
                password: passwordInput,
            },
        });
        console.log(response.status)


        try {
        if (response.status === 200) {
            const user = response.data.find((userData) => userData.usuario.username === usernameInput);
            if (user) {
                console.log(user)
                const clientId = user.id;
                const user_name = user.name
                Cookies.set("ID",`${clientId}`)
                Cookies.set("Nombre",`${user_name}`)
                setValidated(true)
            }

        }
    } catch (error) {
        console.error("Error al procesar la respuesta:", error);
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
                            <Form>
                                <Form.Group controlId="validationCustom01">
                                    <FloatingLabel controlId="floatingInput" label="Usuario" className="m-3">
                                        <Form.Control required type="text" name="usuario" placeholder="nombre@ejemplo.com" id="usuario" />
                                        <Form.Control.Feedback type="invalid">Ingrese un usuario</Form.Control.Feedback>
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group controlId="validationCustom02">
                                    <FloatingLabel controlId="floatingPassword" label="Contraseña" className="m-3">
                                        <Form.Control required type="password" name="password" placeholder="Contraseña" id="password" />
                                        <Form.Control.Feedback type="invalid">Contraseña inválida</Form.Control.Feedback>
                                    </FloatingLabel>
                                </Form.Group>
                                <button type="submit" className="boton" onClick={verifyLogin}>Ingresar</button>
                            </Form>
                            <p className="center"> Todavía no tienes una cuenta? Puedes <Link to="">crear una nueva cuenta</Link></p>
                        </div>
                    </div>
                </section>
            </>
        )
        }