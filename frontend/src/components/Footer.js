import React from 'react';
import { Container, Row, Col } from 'shards-react';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            Copyright &copy; Khangadelic Shop
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
