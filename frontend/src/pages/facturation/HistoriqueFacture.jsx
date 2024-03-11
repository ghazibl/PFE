import React, { useState, useEffect } from 'react';
import './HistoriqueFacture.css';
import axios from 'axios';

const HistoriqueFacture = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    
    const fetchInvoices = async () => {
      try {
        const response = await axios.get('/api/factures');
        setInvoices(response.data);
      } catch (error) {
        console.error('Error fetching invoices:', error);
      }
    };

    fetchInvoices();
  }, []);

  return (
    <div className="details">
      <div className="recentOrders">
        <div className="cardHeader">
          <h2>Historique Factures </h2>
          <a href="/NvFacture" className="button">+</a>
        </div>

        <table>
          <thead>
            <tr>
              <td>Numero</td>
              <td>Client</td>
              <td>Produit</td>
              <td>Quantity</td>
              <td>Total</td>
              <td>Date</td>
              <td>Status</td>
            </tr>
          </thead>

          <tbody>
            {Array.isArray(invoices) && invoices.length > 0 ? (
              invoices.map((invoice) => (
                <tr key={invoice._id}>
                  <td>{invoice.Number}</td>
                  <td>{invoice.clientName}</td>
                  <td>{invoice.productName}</td>
                  <td>{invoice.quantity}</td>
                  <td>{invoice.total}</td>
                  <td>{invoice.date}</td>
                  <td>
                    <span className={`status ${invoice.status.toLowerCase()}`}>
                      {invoice.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No invoices found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HistoriqueFacture;
