
import React from 'react';
import { Row, Col } from 'react-bootstrap';

import VerticalMenu from './components/verticalMenu/VerticalMenu';
import HeaderAuthor from './components/headerAuthor/HeaderAuthor';
import SearchBar from './components/searchBar/SearchBar';
import CarouselBooks from './components/carouselBooks/CarouselBooks';
import DescriptionAuthor from './components/descriptionAuthor/DescriptionAuthor';

import './App.css';

function App() {
  return (
    <div className="App">
      <Row>
        <Col md={3}>
          <VerticalMenu />
        </Col>
        <Col md={9}>
          <SearchBar />
          <HeaderAuthor />
          <CarouselBooks />
          <hr />
          <DescriptionAuthor />
        </Col>
      </Row>
    </div>
  );
}

export default App;
