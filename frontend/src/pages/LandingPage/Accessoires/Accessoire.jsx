import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Accessoire1 from '../../../assets/Accessoire1.jpg';
import Accessoire2 from '../../../assets/Accessoire2.jpg';
import Accessoire3 from '../../../assets/Accessoire3.jpg';
import Accessoire4 from '../../../assets/Accessoire4.jpg';
import Accessoire5 from '../../../assets/Accessoire5.jpg';
import Accessoire6 from '../../../assets/Accessoire6.jpg';
import Accessoire7 from '../../../assets/Accessoire7.jpg';
import Accessoire8 from '../../../assets/Accessoire8.jpg';
import Accessoire9 from '../../../assets/Accessoire9.jpg';
import Accessoire10 from '../../../assets/Accessoire10.jpg';
import Accessoire11 from '../../../assets/Accessoire11.jpg';
import Accessoire12 from '../../../assets/Accessoire12.jpg';
import Accessoire13 from '../../../assets/Accessoire13.jpg';
import Accessoire14 from '../../../assets/Accessoire14.jpg';
import Accessoire15 from '../../../assets/Accessoire15.jpg';
import Accessoire16 from '../../../assets/Accessoire16.jpg';
import Accessoire17 from '../../../assets/Accessoire17.jpg';
import Accessoire18 from '../../../assets/Accessoire18.jpg';
function Accessoire() {
    const Accessoire = [
        {
          id: 1,
          nom: 'Bronze de 6',
          image:Accessoire1,
          description: 'Description du produit 1',
        },
        {
          id: 2,
          nom: 'Produit 2',
          image: Accessoire2,
          description: 'Description du produit 2',
        },
        {
          id: 3,
          nom: 'Produit 3',
          image: Accessoire3,
          description: 'Description du produit 3',
        },
        {
            id: 4,
            nom: 'Produit 4',
            image:Accessoire4,
            description: 'Description du produit 4',
          },
          {
            id: 5,
            nom: 'Produit 5',
            image:Accessoire5,
            description: 'Description du produit 5',
          },
          {
            id: 6,
            nom: 'Produit 6',
            image: Accessoire6,
            description: 'Description du produit 6',
          },
          {
            id: 7,
            nom: 'Produit 7',
            image: Accessoire7,
            description: 'Description du produit 7',
          },
          {
            id: 8,
            nom: 'Produit 8',
            image: Accessoire8,
            description: 'Description du produit 8',
          },
          {
            id: 9,
            nom: 'Produit 9',
            image: Accessoire9,
            description: 'Description du produit 9',
          },
          {
            id: 10,
            nom: 'Produit 8',
            image: Accessoire10,
            description: 'Description du produit 8',
          },
          {
            id: 11,
            nom: 'Produit 8',
            image: Accessoire11,
            description: 'Description du produit 8',
          },
          {
            id: 12,
            nom: 'Produit 8',
            image: Accessoire12,
            description: 'Description du produit 8',
          },
          {
            id: 13,
            nom: 'Produit 8',
            image: Accessoire13,
            description: 'Description du produit 8',
          },
          {
            id: 14,
            nom: 'Produit 8',
            image: Accessoire14,
            description: 'Description du produit 8',
          },
          {
            id: 15,
            nom: 'Produit 8',
            image: Accessoire15,
            description: 'Description du produit 8',
          },
          {
            id: 16,
            nom: 'Produit 8',
            image: Accessoire16,
            description: 'Description du produit 8',
          },
          {
            id: 17,
            nom: 'Produit 8',
            image: Accessoire17,
            description: 'Description du produit 8',
          },
          {
            id: 18,
            nom: 'Produit 8',
            image: Accessoire18,
            description: 'Description du produit 8',
          },
         
      ];
  return (
    <div>
      <Container>
      <h1>Liste des Accessoires</h1>
    
     <div className='cont'>
      <Row>
        {Accessoire.map((Accessoire) => (
          <Col key={Accessoire.id} xs={12} sm={6} md={4} lg={3}>
            <Card >
              <Card.Img variant="top" src={Accessoire.image} />
              <Card.Body>
                <Card.Title>{Accessoire.nom}</Card.Title>
                <Card.Text>{Accessoire.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      </div>
    </Container>
    </div>
  )
}

export default Accessoire
