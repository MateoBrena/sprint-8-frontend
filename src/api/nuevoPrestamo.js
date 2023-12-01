import axios from 'axios'

export const CrearPrestamo = (prestamo) => {
    return axios.post('http://127.0.0.1:8000/api/clientes/1/prestamos/', prestamo)
}