import JoinBtn from "./joinBtn";
import Search from "./search";
import { ReactComponent as Logo } from "../../../assets/logoHome1.svg"
import { Container, Row, Col } from "reactstrap";
import { useState } from "react";

export default function Header() {
    const [activeModal, setActiveModal] = useState(false)

    return (
        <div className='header'>
            <Container fluid className="my-2">
                <Row className="align-items-center">
                    <Col md='1'>
                        <Logo></Logo>
                    </Col>
                    <Col md='3' >
                        <Search></Search>
                    </Col>
                    <Col className="align-right">
                        <JoinBtn active={activeModal} setActive={setActiveModal}></JoinBtn>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

