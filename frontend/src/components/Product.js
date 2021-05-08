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
            <h3>{product.title}</h3>
          </Card.Title>
        </Link>
        <Card.Text as='h4'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
