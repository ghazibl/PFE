import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Produits/Produits.css';
import bronzede6 from '../../../assets/bronzede6.jpeg';
import cartagode3 from '../../../assets/cartagode3.jpeg';
import darkde6 from '../../../assets/darkde6.webp';
import grisde6 from '../../../assets/grisde6.jpeg';
import likebleude6 from '../../../assets/likebleude6.webp';
import miroircarréde4 from '../../../assets/miroircarréde4.jpg';
import miroirde5 from '../../../assets/miroirde5.jpg';
import peaudorangede6 from '../../../assets/peaudorangede6.jpg';
import reflechissantde6 from '../../../assets/reflechissantde6.jpeg';
import sablede4 from '../../../assets/sablede4.jpeg';
import clairede6 from '../../../assets/clairede6.jpg';
import stopsolvertde6 from '../../../assets/stopsolvertde6.jpg';

const Produits = () => {
  // Exemple de données de produits (à remplacer par vos données réelles)
  const produits = [
    {
      id: 1,
      nom: 'Bronze de 6',
      image:bronzede6,
      description: 'Description du produit 1',
    },
    {
      id: 2,
      nom: 'Produit 2',
      image: cartagode3,
      description: 'Description du produit 2',
    },
    {
      id: 3,
      nom: 'Produit 3',
      image: darkde6,
      description: 'Description du produit 3',
    },
    {
        id: 4,
        nom: 'Produit 4',
        image:grisde6,
        description: 'Description du produit 4',
      },
      {
        id: 5,
        nom: 'Produit 5',
        image:likebleude6,
        description: 'Description du produit 5',
      },
      {
        id: 6,
        nom: 'Produit 6',
        image: miroircarréde4,
        description: 'Description du produit 6',
      },
      {
        id: 7,
        nom: 'Produit 7',
        image: miroirde5,
        description: 'Description du produit 8',
      },
      {
        id: 8,
        nom: 'Produit 8',
        image: peaudorangede6,
        description: 'Description du produit 8',
      },
      {
        id: 9,
        nom: 'Produit 9',
        image: sablede4,
        description: 'Description du produit 9',
      },
      {
        id: 10,
        nom: 'Produit 10',
        image: reflechissantde6,
        description: 'Description du produit 10',
      },
      {
        id: 11,
        nom: 'Produit 11',
        image: clairede6,
        description: 'Description du produit 11',
      },
      {
        id: 12,
        nom: 'Produit 12',
        image: stopsolvertde6,
        description: 'Description du produit 12',
      },
  ];

  return (
    
    <Container>
      <h1>Liste des Produits</h1>
     <div className='cont'>
      <Row>
        {produits.map((produit) => (
          <Col key={produit.id} xs={12} sm={6} md={4} lg={3}>
            <Card >
              <Card.Img variant="top" src={produit.image} />
              <Card.Body>
                <Card.Title>{produit.nom}</Card.Title>
                <Card.Text>{produit.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      </div>
    </Container>
  );
}

export default Produits;
