import { Container, Row, Col, Jumbotron, Image } from 'react-bootstrap'

const AboutScreen = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-lg-center">
          <Col lg={8}>
            <Jumbotron fluid>
              <Container>
                <h1>About</h1>
                <p className="lead">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </Container>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <Image
              width={300}
              height={300}
              src="https://images.unsplash.com/photo-1529905361811-8a9a132cd390?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
              alt="Artist"
            />
          </Col>
          <Col md={8} lg={6}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default AboutScreen
