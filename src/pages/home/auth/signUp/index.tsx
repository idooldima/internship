import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Form, FormGroup, Input, Modal, Row } from "reactstrap"



export default function SignUp() {
    const dispatch = useDispatch()
    const active = useSelector(((state: any) => state.modals.signUp))
    console.log(active)
    return (
        <Modal isOpen={active}>
            <Container fluid="lg">



                <Form>
                    <FormGroup row className="justify-content-center">

                        <Col sm={3}>
                            <Input
                                id="exampleEmail"
                                name="email"
                                placeholder="Your name"
                                type="text"
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row className="justify-content-center">

                        <Col sm={3}>
                            <Input
                                id="examplePassword"
                                name="email"
                                placeholder="E-mail"
                                type="email"
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row className="justify-content-center">

                        <Col sm={3}>
                            <Input
                                id="examplePassword"
                                name="password"
                                placeholder="password "
                                type="password"
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row className="justify-content-center">

                        <Col sm={3}>
                            <Input
                                id="examplePassword"
                                name="password"
                                placeholder="confirm password "
                                type="password"
                            />
                        </Col>
                    </FormGroup>
                </Form>
            </Container >
        </Modal>
    )
}