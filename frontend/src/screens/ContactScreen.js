import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'

const ContactScreen = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <FormContainer>
            <h1>Contact</h1>
            <h5>Have a specific idea in mind?</h5>
            <br />
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </FormContainer>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ContactScreen
