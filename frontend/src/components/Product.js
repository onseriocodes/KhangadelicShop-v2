import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { CardBody, CardFooter } from 'shards-react';
import Rating from './Rating';

const Product = ({ product }) => {
  return (
    <Card className='my-3 rounded' id='card'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>

      <CardBody>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
      </CardBody>
      <CardFooter>
        <h4 className='center'>${product.price}</h4>
      </CardFooter>
    </Card>
  );
};

export default Product;
