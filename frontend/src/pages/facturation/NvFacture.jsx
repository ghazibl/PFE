import React, { useState } from 'react';
import './NvFacture.css';
import '../Dashboard/Home'
import { Link } from 'react-router-dom';

const NvFacture = () => {
  const [numero, setNumero] = useState('');
  const [client, setClient] = useState('');
  const [produit, setProduit] = useState('');
  const [quantite, setQuantite] = useState('');
  const [total, setTotal] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Nouvelle facture soumise :', { numero, client, produit, quantite, total, status });
  };
  const handleCancel = () => {
    const confirmCancel = window.confirm("Êtes-vous sûr de vouloir annuler ?");

    if (confirmCancel) {    
      window.location.href = '/liste-facture';
    }
  };
  return (
    <div className="container">
    <h2>Nouvelle Facture</h2> 
    <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="numero">Numéro :</label>
          <input type="text" id="numero" value={numero} onChange={(e) => setNumero(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="client">Client :</label>
          <input type="text" id="client" value={client} onChange={(e) => setClient(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="produit">Produit :</label>
          <input type="text" id="produit" value={produit} onChange={(e) => setProduit(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="quantite">Quantité :</label>
          <input type="number" id="quantite" value={quantite} onChange={(e) => setQuantite(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="total">Total :</label>
          <input type="text" id="total" value={total} onChange={(e) => setTotal(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="Date">Date :</label>
          <input type="text" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="status">Statut :</label>
          <select id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
            
            
            <option value="En cours">En cours</option>
          </select>
        </div>
        <button type="submit">Ajouter </button>
        <Link to="/Home">
          <button className="cancel-button" onClick={handleCancel}>Annuler</button>
        </Link>
      </form>
    </div>
  );
};

export default NvFacture;
