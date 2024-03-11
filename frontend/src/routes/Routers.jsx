
import Login from '../pages/Authen/Login';
import Home from '../pages/Dashboard/Home';
import Header from '../components/header/Header';
import {Routes , Route} from 'react-router-dom';
import NvFacture from '../pages/Facturation/NvFacture';
import ListeFacture from '../pages/Dashboard/ListeFacture';
import HistoriqueFacture from '../pages/facturation/HistoriqueFacture';
import SignUp from '../pages/Authen/SignUp';
import Landing from '../pages/LandingPage/Landing';


const Routers = () => {
  return <Routes>
    <Route path="/" element={<Landing/>} />
    <Route path="/home" element={<Home/>} />
    <Route path='/NvFacture' element={<NvFacture/>}/>
    <Route path='/ListeFacture' element={<ListeFacture/>}/>
    <Route path='/HistoriqueFacture' element={<HistoriqueFacture/>}/>
    <Route path="/login" element={<Login/>} />
    <Route path="/register" element={<SignUp/>} />
    <Route path='/landing' element={<Landing/>} />

   

  </Routes>
}

export default Routers;
