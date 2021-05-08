import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded text-center'>
      <Link to={`/product/${product._id}`}>
        <Card.Img className=' grow' src={product.image}></Card.Img>
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.title}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'></Card.Text>
        <Card.Text as='h3'>${product.price}</Card.Text>
        <Card.Text as='h5'>{product.category}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
