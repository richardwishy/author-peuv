import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import './searchBar.css';

const SearchBar = () => {
  return (
    <Row>
      <Col md={11} className="pe-0">
        <input type="text" placeholder="Apellido | Nombre" className="search-bar-input rounded-end rounded-pill"/>
      </Col>
      <Col md={1} className="ps-0">
        <Button variant="danger" className="search-bar-button rounded-start rounded-pill"><FaSearch /></Button>
      </Col>
      <div className='text-center'>A | B | C | D | E | F | G | H | I | J | K | L | M 
    | N | Ñ | O | P | Q | R | S | T | U | V | W | X | Y | Z </div>
    </Row>
  );
}
 
export default SearchBar;