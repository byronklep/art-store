import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <section className="">
      <footer className="bg-dark text-white text-center">
        <Container className="container p-4">
          <Row>
            <Col md={12} lg={6} className="mb-4 mb-md-0">
              <span className="logo">
                <a href="/">Art Store</a>
              </span>

              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
                atque ea quis molestias. Fugiat pariatur maxime quis culpa
                corporis vitae repudiandae aliquam voluptatem veniam, est atque
                cumque eum delectus sint!
              </p>
            </Col>

            <Col md={6} lg={3} className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Site Map</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="/about" className="footer-links">
                    About
                  </a>
                </li>
                <li>
                  <a href="/contact" className="footer-links">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/register" className="footer-links">
                    Register
                  </a>
                </li>
                <li>
                  <a href="/login" className="footer-links">
                    Login
                  </a>
                </li>
              </ul>
            </Col>

            <Col md={6} lg={3} className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Info</h5>

              <ul className="list-unstyled">
                <li>
                  Name
                </li>
                <li>
                  <a href="#!" className="footer-links">
                    Gmail
                  </a>
                </li>
                <li>
                  <a href="#!" className="footer-links">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#!" className="footer-links">
                    Facebook
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>

        <div
          className="text-center p-3"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          Copyright &copy;
          <a className="text-white ml-2" href="/">
            Art Store
          </a>
        </div>
      </footer>
    </section>
  )
}

export default Footer
