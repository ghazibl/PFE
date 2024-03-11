// CommandeEnCours.js
import React from 'react';
import './CommandeEnCours.css';

function CommandeEnCours() {
  // Supposons que vous ayez une liste de commandes avec les produits pour chaque client
  const commandes = [
    {
      client: 'Star Refrigerator',
      produits: [
        { nom: 'Produit 1', quantite: 2, date: '2021-01-01' },
        { nom: 'Produit 2', quantite: 3, date: '2021-01-02' }
      ]
    },
    {
      client: 'Another Client',
      produits: [
        { nom: 'Produit 3', quantite: 1, date: '2021-01-03' }
      ]
    }
  ];

  return (
    <div className='listeCmd'>
      <div className='commande'>
        <h2>Liste de commande</h2>
        <div className='commande-content'>
          <table className='table'>
            <thead>
              <tr>
                <td>Client</td>
                <td>Produit</td>
                <td>Quantité</td>
                <td>Date</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              {commandes.map((commande, index) => (
                commande.produits.map((produit, produitIndex) => (
                  <tr key={produitIndex}>
                    {produitIndex === 0 && (
                      <td rowSpan={commande.produits.length}>{commande.client}</td>
                    )}
                    <td>{produit.nom}</td>
                    <td>{produit.quantite}</td>
                    <td>{produit.date}</td>
                    {produitIndex === 0 && (
                      <td rowSpan={commande.produits.length}>
                        <button>confirmer</button>
                      </td>
                    )}
                  </tr>
                ))
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CommandeEnCours;
