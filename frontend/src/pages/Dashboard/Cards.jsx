import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsFillBellFill ,BsPeopleFill} from 'react-icons/bs';
import { AiOutlineStock } from "react-icons/ai"
import '../facturation/HistoriqueFacture'
function Cards() {
  return (
   
    

   


    <div className='main-cards'>
      <a href='/HistoriqueFacture' className='card-link'>
        <div className='card' >
          <div className='card-inner'>
            <h3>FACTURES </h3>
            <BsFillArchiveFill className='card_icon' />
          </div>
          <h1 className='number'>300</h1>
        </div>
      </a>
      
      <a href='/ListeCommande' className='card-link'>
        <div className='card' >
          <div className='card-inner'>
            <h3>COMMANDES</h3>
            <BsFillGrid3X3GapFill className='card_icon' />
          </div>
          <h1 className='number'>12</h1>
        </div>
      </a>

      <a href='/ListeClients' className='card-link'>
        <div className='card' >
          <div className='card-inner'>
            <h3>Stock</h3>
            <AiOutlineStock className='card_icon' />
          </div>
          <h1 className='number'>33</h1>
        </div>
      </a>

      <a href='/ListeStock' className='card-link'>
        <div className='card' >
          <div className='card-inner'>
            <h3>Alert</h3>
            <BsFillBellFill className='card_icon' />
          </div>
          <h1 className='number'>42</h1>
        </div>
      </a>
    </div>

    
  );
}


export default Cards;
