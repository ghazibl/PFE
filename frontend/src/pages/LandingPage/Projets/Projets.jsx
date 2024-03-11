// Projets.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'; // Import NavLink

import '../Projets/Projets.css';
import p1 from '../../../assets/28.jpg';
import p2 from '../../../assets/29.jpg';
import p3 from '../../../assets/30.jpg';
import p4 from '../../../assets/31.jpg';
import p5 from '../../../assets/32.jpg';
import p6 from '../../../assets/38.jpg';

const projects = [
  {
    image: p1,
    title: "Titre du projet 1",
    description: "Description du projet 1",
    link: "/dp1"
  },
  {
    image: p2,
    title: "Titre du projet 2",
    description: "Description du projet 2",
    link: "/dp2"
  },
  {
    image: p3,
    title: "Titre du projet 3",
    description: "Description du projet 3",
    link: "/dp3"
  },
  {
    image: p4,
    title: "Titre du projet 4",
    description: "Description du projet 4",
    link: "/dp4"
  }, {
    image: p5,
    title: "Titre du projet 5",
    description: "Description du projet 5",
    link: "/dp5"
  }, {
    image: p6,
    title: "Titre du projet 6",
    description: "Description du projet 6",
    link: "/dp6"
  },
];

const Projets = () => {
  return (
    <div>
    <Container>
      <h1 className="mt-4">Liste des projets</h1>
      <Row>
        {projects.map((project, index) => (
          <Col sm={4} key={Math.random()}>
            <Card key={Math.random()}>
              <Card.Img variant="top" src={project.image} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <NavLink to={project.link}>Voir plus</NavLink>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </div>
  )
}

export default Projets;
