import { useState } from "react";
import "../css/LoanSimulator.css"
import Navbar from "./Navbar";
import Header from "./Header";

export default function LoanSimulator(){
    const [capital, setCapital] = useState("")
    const [interes, setInteres] = useState("")
    const [tiempo, setTiempo] = useState("")
    const [duracion, setDuracion] = useState("year")
    const [ocultar, setOcultar] = useState(true)
    const [mostrarAlerta, setMostrarAlerta] = useState(false)
    const interesCalculado = duracion === "year" ?  (capital*interes*tiempo) / 100 : (capital*interes*tiempo) / 1200
    const totalCalculado = parseInt(capital)
    const total = parseInt(totalCalculado+interesCalculado)
    
    
    
    const handleClick = () => {
        setMostrarAlerta(false)
        setOcultar(true)
        setCapital("")
        setInteres("")
        setTiempo("")
        setDuracion("year")
    }

    const handleResultado = () => {
        if((capital !== "") && (interes !== "") && (tiempo !== "")) {
            setOcultar(false)
            setMostrarAlerta(false)
        } else {
            setMostrarAlerta(true)
        }
    }

    return(
        <>
            <Header></Header>
            <div className="principal">
            <Navbar></Navbar>
            <div className="simulador">
            <h1 className="header-centre">Simulador de préstamos</h1>
            <div className="contenedor-inputs">
                <div>
                    <label htmlFor="capital">Capital($):</label>
                    <input type="number" className="sin-borde" name="capital" id="capital" placeholder="Ej. 1000"
                     value={capital} onChange={e => setCapital(e.target.value)} required/>
                </div>
                <div>
                    <label htmlFor="tiempo">Interés(anual):</label>
                    <input type="number" className="sin-borde" name="interes" id="interes" placeholder="Ej. 6" 
                    value={interes} onChange={e => setInteres(e.target.value)} required/>
                </div>
            </div>
            <label htmlFor="tiempo">Tiempo:</label>
            <div className="tiempo">
                <input type="number" id="tiempo" placeholder="Ej. 1" value={tiempo} onChange={e => setTiempo(e.target.value)} className="sin-borde" required/>
                <select name="duracion" id="duracion" value={duracion} onChange={e => (setDuracion(e.target.value))}>
                    <option value="year">Año</option>
                    <option value="mes">Mes</option>
                </select>
            </div>
            <div className="buttons-wrapper">
                <button className="boton calcular"  onClick={handleResultado}>Calcular</button>
                <button className="boton calcular" onClick={handleClick}>Resetear</button>
            </div>
            { ocultar ? <div></div>: <div id="resultado"> <div><strong>Capital: </strong>${capital}</div><div><strong>Intereses: </strong>${interesCalculado}</div><div><strong>Total: </strong>${total}</div></div>}
            {mostrarAlerta ? <div id="alerta"> Debes completar todos los campos para realizar el cálculo</div> : <div></div>}
        </div>
        </div>
        </>
        
    )
}