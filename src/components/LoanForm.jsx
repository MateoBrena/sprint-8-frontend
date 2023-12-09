import { useForm } from 'react-hook-form'
import { CrearPrestamo } from '../api/nuevoPrestamo'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import "../css/LoanForm.css"
import Header from './Header'
import Navbar from './Navbar'
import Cookies from "js-cookie";

export default function LoanForm() {

    const id = Cookies.get("ID")
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()

    useEffect(() => {
        if (id === undefined) {
            navigate("/login");
        } else{
    }}, [])

    const onSubmit = handleSubmit(async data => {
        const res = await CrearPrestamo(data)
        console.log(res)
        navigate('/prestamos')
    })

    return (

        <>
            <Header></Header>
            <div className="principal">
                <Navbar></Navbar>
                <div className='contenido'>
                    <h1>Solicitud de préstamo</h1>
                    <form onSubmit={onSubmit} id="nuevo-prestamo">
                        <label> Tipo:
                            <input type="text" placeholder='tipo' {...register("tipo", { required: true })} className='form-control'/>
                        </label>
                        <label> Monto: 
                            <input type="number" placeholder='monto' {...register("monto", { required: true })} className='form-control'/>
                        </label>
                        <label> Fecha:
                            <input type="date" placeholder='fecha' {...register("fecha", { required: true })} className='form-control'/>
                        </label>
                        <label> Estado: 
                            <input type="text" placeholder='estado' {...register("estado", { required: true })} className='form-control'/>
                        </label>
                        <button className='boton-transferencia'>Solicitar Préstamo</button>
                    </form>
                </div>
            </div>
        </>
    )
}