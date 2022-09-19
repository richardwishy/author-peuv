import React from 'react';
import { Card, Row, Col} from 'react-bootstrap';
import { FaMailBulk, FaLinkedin, FaFacebookSquare } from 'react-icons/fa';
import './headerAuthor.css';

const HeaderAuthor = () => {

  return (
    <Card className='header-author shadow'>
      <Row>
        <Col md={4}>
          <Card.Img src='https://0.academia-photos.com/219216079/77302775/66653243/s200_angela_maria.franco_calderon.png' alt='' />
        </Col>
        <Col md={8}>
          <Card.Body>
            <Card.Title>Ángela María Franco Calderón</Card.Title>
            <Card.Subtitle>Profesora Titular Universidad del Valle</Card.Subtitle><br/>
            <Card.Text>
              <p><strong>Nacionalidad: </strong>Colombiana</p>
              <p><strong>Género: </strong>Femenino</p>
              <strong>Contacto:</strong><br/>
              <FaMailBulk /> william-sanchez.pena@correounivalle.edu.co <br/>
              <FaLinkedin /> Linkedin <br/>
              <FaFacebookSquare /> Facebook <br/>
              <p>Hoja de vida CvLAC</p>
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default HeaderAuthor;