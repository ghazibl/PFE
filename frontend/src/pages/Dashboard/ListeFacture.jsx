import React from 'react'
import './ListeFacture.css'
import '../Facturation/NvFacture'
import { Link } from 'react-router-dom';
const ListeFacture = () => {
  return (
    
   
      <div className="details">
                <div className="recentOrders">
                    <div className="cardHeader">
                        <h2>Factures en cours</h2>
                        <Link to="/NvFacture" className="btn-link">
        <button className='Button'>+ Créer Nouvelle Facture</button>
      </Link>
                       
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <td>Numero</td>
                                <td>Client</td>
                                <td>produit</td>
                                <td>quantity</td>
                                <td>total</td>
                                <td>Status</td>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Star Refrigerator</td>
                                <td>Dell Laptop</td>
                                <td>5</td>
                                <td>$1200</td>
                                <td><span className="status delivered">Delivered</span></td>
                            </tr>

                            <tr>
                               <td>2</td> 
                                <td>Dell Laptop</td>
                                <td>Star Refrigerator</td>
                                <td>6</td>
                                <td>$110</td>
                                <td><span className="status pending">Pending</span></td>
                            </tr>
                            <tr>
                            <td>3</td> 
                                <td>Dell Laptop</td>
                                <td>Star Refrigerator</td>
                                <td>6</td>
                                <td>$110</td>
                                <td><span className="status return">Return</span></td>
                            </tr>

                            <tr>
                            <td>4</td> 
                                <td>Dell Laptop</td>
                                <td>Star Refrigerator</td>
                                <td>6</td>
                                <td>$110</td>
                                <td><span className="status inProgress">In Progress</span></td>
                            </tr>

                            <tr>
                            <td>5</td> 
                                <td>Dell Laptop</td>
                                <td>Star Refrigerator</td>
                                <td>6</td>
                                <td>$110</td>
                                <td><span className="status delivered">Delivered</span></td>
                            </tr>

                            <tr>
                            <td>6</td> 
                                <td>Dell Laptop</td>
                                <td>Star Refrigerator</td>
                                <td>6</td>
                                <td>$110</td>
                                <td><span className="status pending">Pending</span></td>
                            </tr>

                            <tr>
                            <td>7</td> 
                                <td>Dell Laptop</td>
                                <td>Star Refrigerator</td>
                                <td>6</td>
                                <td>$110</td>
                                <td><span className="status return">Return</span></td>
                            </tr>

                            <tr>
                            <td>8</td> 
                                <td>Dell Laptop</td>
                                <td>Star Refrigerator</td>
                                <td>6</td>
                                <td>$110</td>
                                <td><span className="status inProgress">In Progress</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

  </div>
  )
}

export default ListeFacture
