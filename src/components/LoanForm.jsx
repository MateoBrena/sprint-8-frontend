import { useForm } from 'react-hook-form'
import { CrearPrestamo } from '../api/nuevoPrestamo'
import { useNavigate } from 'react-router-dom'
import "../css/LoanForm.css"
import Header from './Header'
import Navbar from './Navbar'

export default function LoanForm() {

    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()

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
                <div>
                    <h1>Solicitud de préstamo</h1>
                    <form onSubmit={onSubmit} id="nuevo-prestamo">
                        <label> Tipo:
                            <input type="text" placeholder='tipo' {...register("tipo", { required: true })} />
                        </label>
                        <label> Monto: 
                            <input type="number" placeholder='monto' {...register("monto", { required: true })} />
                        </label>
                        <label> Fecha:
                            <input type="date" placeholder='fecha' {...register("fecha", { required: true })} />
                        </label>
                        <label> Estado: 
                            <input type="text" placeholder='estado' {...register("estado", { required: true })} />
                        </label>
                        <button className='btn btn-primary'>Solicitar Préstamo</button>
                    </form>
                </div>
            </div>
        </>
    )
}