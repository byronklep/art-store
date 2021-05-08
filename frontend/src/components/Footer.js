import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className='bg-dark'>
      <Container>
        <Row>
          <Col className='text-center text-light py-3'>Copyright &copy; Art Store</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
