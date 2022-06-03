import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Modal,
  ModalFooter,
  ModalHeader,
  Row,
} from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, openModal } from 'src/store/modals/actions';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import * as yup from 'yup';
import { isOpenModal } from 'src/store/modals/selectors';
import '../auth.styles.scss';

export default function SignIn() {
  const active = useSelector(isOpenModal('signIn'));
  const dispatch = useDispatch();
  const schema = yup.object().shape({
    username: yup.string().required().min(8),
    email: yup.string().email(),
    password: yup.string().required().min(8),
    passwordConfirmation: yup
      .string()
      .test('passwords-match', 'Passwords must match', function (value) {
        return state.password === value;
      }),
  });
  const [state, setState] = useState({ email: '', password: '' });
  const [validateState, setValidateState] = useState({ errEmail: '', errPassword: '' });
  const onOpenModal = () => {
    dispatch(openModal('signUp'));
    dispatch(closeModal('signIn'));
  };

  return (
    <Modal
      isOpen={active}
      centered={true}
      backdrop={true}
      toggle={() => dispatch(closeModal('signIn'))}
    >
      <Container fluid="lg">
        <ModalHeader className="auth-header justify-content-center ">
          <Col className="auth-title ">
            <p>Welcome Back</p>
          </Col>
          <Col className="auth-welcome">
            <p>Login with your email & password</p>
          </Col>
        </ModalHeader>
        <Form className="justify-content-center">
          <FormGroup row className="justify-content-center">
            <Col sm={10}>
              <Input
                className="auth-input "
                onChange={({ target: { value } }) => {
                  setState({ ...state, email: value });
                  schema
                    .validateAt('email', { email: value })
                    .then(() => setValidateState({ ...validateState, errEmail: '' }))
                    .catch(function (err) {
                      setValidateState({ ...validateState, errEmail: err.errors[0] });
                    });
                }}
                invalid={!!validateState.errEmail}
                name="email"
                placeholder="this is focused input (for email)"
                type="email"
              />
            </Col>
          </FormGroup>
          <FormGroup row className="justify-content-center">
            <Col sm={10}>
              <Input
                className="auth-input "
                onChange={({ target: { value } }) => {
                  setState({ ...state, password: value });
                  schema
                    .validateAt('password', { password: value })
                    .then(() => setValidateState({ ...validateState, errPassword: '' }))
                    .catch(function (err) {
                      setValidateState({ ...validateState, errPassword: err.errors[0] });
                    });
                }}
                invalid={!!validateState.errPassword}
                name="password"
                placeholder="this is value (for password)"
                type="password"
              />
            </Col>
          </FormGroup>
        </Form>
        <Row className="justify-content-center py-4">
          <Col sm={10}>
            <Button className="auth-btn-green">Continue</Button>
          </Col>
        </Row>
        <Row className="align-center auth-relative ">
          <Col className="or-pseudo">or</Col>
        </Row>
        <Row className="justify-content-center">
          <Col sm={10}>
            <Button className="auth-btn-facebook">Continue with Facebook</Button>
          </Col>
        </Row>
        <Row className="justify-content-center pt-4">
          <Col sm={10}>
            <Button className="auth-btn-google">Continue with Google</Button>
          </Col>
        </Row>
        <Row className="align-center pt-4 pb-4">
          <Col>
            Don’t have account yet?{' '}
            <Link className="auth_link" to={'/'} onClick={onOpenModal}>
              Sign Up
            </Link>
          </Col>
        </Row>
      </Container>
      <ModalFooter className="justify-content-center auth-footer">
        <p>
          Forgot your password?{' '}
          <Link className="auth_link" to={'/*'}>
            Reset It
          </Link>
        </p>
      </ModalFooter>
    </Modal>
  );
}
