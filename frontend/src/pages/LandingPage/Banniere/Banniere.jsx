import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Banniere.css';
import a from '../../../assets/cristal.jpg';
import { Link } from 'react-router-dom';

const Banniere = () => {
    return (
      
        <div className="image-container">
        <img
            className="d-block w-100"
            src={a}
            alt="First slide"
        />
        <div className="text-overlay">
            
            <h1><strong>Société de production <br/> de verre en Tunisie.</strong></h1>
           <h2>Choisissez votre verre préféré,<br/> et nous le livrerons à votre maison.</h2>
            <a href='/login'><button className="btn">Commencer</button></a>
        </div>
    </div>
    
         
    );
}

export default Banniere;
