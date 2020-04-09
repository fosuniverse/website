import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default () => (
  <Container className="error-page">
    <Row 
      className="w-100 d-flex flex-column justify-content-center" 
      style={{ height: "100%" }}
    >
      <div className="mx-auto my-auto">
        <h1 className="text-danger">Page not found</h1>
        <p>The page you are looking for does not exist</p>
      </div>
    </Row>
  </Container>
);