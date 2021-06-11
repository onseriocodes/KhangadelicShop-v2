//! PRODUCT SCREEN
import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Form } from 'react-bootstrap';
import { Card, Button, Badge } from 'shards-react';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import Rating from '../components/Rating';
import products from '../products';

const ProductScreen = ({ match }) => {
  const product = products.find(p => p._id === match.params.id);

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        <HiOutlineArrowNarrowLeft /> Go Back
      </Link>

      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.description} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    <strong>
                      {product.countInStock > 0 ? (
                        <Badge theme='success'>In Stock</Badge>
                      ) : (
                        <Badge theme='danger'>Out Of Stock</Badge>
                      )}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Button
                  theme='primary'
                  outline
                  block
                  disabled={product.countInStock === 0}
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;