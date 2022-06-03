import JoinBtn from './joinBtn/joinBtn.component';
import Search from './search/search.component';
import { ReactComponent as Logo } from '../../../assets/logoHome1.svg';
import { Container, Row, Col } from 'reactstrap';
import './header.styles.scss';

export default function Header() {
  return (
    <div className="header">
      <Container fluid className="pt-2">
        <Row className="align-items-center">
          <Col md="1">
            <Logo />
          </Col>
          <Col md="3">
            <Search />
          </Col>
          <Col className="align-right">
            <JoinBtn />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
