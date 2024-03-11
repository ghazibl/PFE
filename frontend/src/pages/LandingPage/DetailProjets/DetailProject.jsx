import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom'; // Import useParams to get route parameters
import p1 from '../../assets/28.jpg';
import p2 from '../../assets/29.jpg';
import p3 from '../../assets/30.jpg';
import p4 from '../../assets/31.jpg';
import p5 from '../../assets/32.jpg';
import p6 from '../../assets/38.jpg';

const projects = {
  dp1: {
    image: p1,
    title: "Détails du Projet 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in feugiat molestie. Sed tristique dui nec ultricies scelerisque.",
    price: "$1000"
  },
  dp2: {
    image: p2,
    title: "Détails du Projet 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in feugiat molestie. Sed tristique dui nec ultricies scelerisque.",
    price: "$1000"
  },
  dp3: {
    image: p3,
    title: "Détails du Projet 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in feugiat molestie. Sed tristique dui nec ultricies scelerisque.",
    price: "$1000"
  },
  dp4: {
    image: p4,
    title: "Détails du Projet 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in feugiat molestie. Sed tristique dui nec ultricies scelerisque.",
    price: "$1000"
  },
  dp5: {
    image: p5,
    title: "Détails du Projet 5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in feugiat molestie. Sed tristique dui nec ultricies scelerisque.",
    price: "$1000"
  },
  dp6: {
    image: p6,
    title: "Détails du Projet 6",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in feugiat molestie. Sed tristique dui nec ultricies scelerisque.",
    price: "$1000"
  }
};

const DetailProjet = () => {
  const { projectId } = useParams(); // Get the projectId from the URL
  const project = projects[projectId]; // Get the project details based on projectId

  return (
    <div style={{ backgroundImage: `url(${project.image})`, backgroundSize: 'cover', minHeight: '100vh' }}>
      <Container>
        <h1 className="mt-4 text-center">{project.title}</h1>
        <Row className="mt-4">
          <Col md={6}>
            <Image src={project.image} fluid />
          </Col>
          <Col md={6} className="d-flex align-items-center">
            <Card>
              <Card.Body>
                <Card.Title className="card-title">{project.title}</Card.Title>
                <Card.Text className="card-text">{project.description}</Card.Text>
                <Card.Text className="text-dark">Prix: {project.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default DetailProjet;
