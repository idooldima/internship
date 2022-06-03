import { Container, Row, Col } from 'reactstrap';
import './main.styles.scss';

export default function Main() {
  return (
    <main>
      <article>
        <Container
          fluid
          className="d-flex flex-column justify-content-center align-items-center main-article "
        >
          <Row>
            <Col md>
              <h1 className="head-text">Grocerises Delivered in 90 Minute</h1>
            </Col>
          </Row>
          <Row>
            <Col md>
              <h3 className="text">
                Get your healthy foods & snacks delivered at your doorsteps all day everyday
              </h3>
            </Col>
          </Row>
        </Container>
      </article>
    </main>
  );
}
