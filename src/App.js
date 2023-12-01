import Footer from './components/Footer';
import Home from './components/Home';
import Payments from './components/Payments';
import Transfers from './components/Transfers';
import NewTransfer from './components/NewTransfer';
import Accounts from './components/Accounts';
import Conversor from './components/Conversor';
import LoanSimulator from './components/LoanSimulator';
import Login from './components/Login';
import Sucursales from './components/Sucursales';
import PrestamosCliente from './components/PrestamosCliente';
import Perfil from './components/Perfil';
import LoanForm from './components/LoanForm';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'




function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/accounts" element={<Accounts />}></Route>
          <Route path="/payments" element={<Payments />}></Route>
          <Route path="/transfers" element={<Transfers />}></Route>
          <Route path="/newtransfer" element={<NewTransfer />}></Route>
          <Route path="/conversor" element={<Conversor />}></Route>
          <Route path="/sucursales" element={<Sucursales />}></Route>
          <Route path="/loansimulator" element={<LoanSimulator />}></Route>
          <Route path="/prestamos" element={<PrestamosCliente />}></Route>
          <Route path="/nuevoprestamo" element={<LoanForm />}></Route>
          <Route path="/perfil" element={<Perfil />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
