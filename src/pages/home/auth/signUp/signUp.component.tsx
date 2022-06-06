import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReactComponent as Facebook } from '../../../../assets/logo-facebook.svg';
import { ReactComponent as Google } from '../../../../assets/logo-google.svg';
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from 'reactstrap';
import { signUpStart } from 'src/store/auth/actions';
import { closeModal, openModal } from 'src/store/modals/actions';
import { isOpenModal } from 'src/store/modals/selectors';
import * as yup from 'yup';

export default function SignUp() {
  const active = useSelector(isOpenModal('signUp'));
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
  const [state, setState] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  });
  const [validateState, setValidateState] = useState({
    errUsername: '',
    errEmail: '',
    errPassword: '',
    errPasswordConfirmation: '',
  });
  const signUp = () => {
    dispatch(
      signUpStart({ username: state.username, email: state.email, password: state.password })
    );
  };
  const onOpenModal = () => {
    dispatch(openModal('signIn'));
    dispatch(closeModal('signUp'));
  };

  return (
    <Modal
      isOpen={active}
      centered={true}
      backdrop={true}
      toggle={() => dispatch(closeModal('signUp'))}
    >
      <Container fluid="lg">
        <ModalHeader className="auth-header justify-content-center ">
          <Col className="auth-title ">
            <p>Sign Up</p>
          </Col>
          <Col className="auth-welcome">
            <p>Welcome!</p>
          </Col>
        </ModalHeader>
        <ModalBody>
          <Form className="justify-content-center">
            <FormGroup row className="justify-content-center">
              <Col sm={10}>
                <Input
                  className="auth-input "
                  onChange={({ target: { value } }) => {
                    setState({ ...state, username: value });
                    schema
                      .validateAt('username', { username: value })
                      .then(() => setValidateState({ ...validateState, errUsername: '' }))
                      .catch(function (err) {
                        setValidateState({ ...validateState, errUsername: err.errors[0] });
                      });
                  }}
                  invalid={!!validateState.errUsername}
                  name="email"
                  placeholder="Your username"
                  type="text"
                />
              </Col>
            </FormGroup>
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
                  placeholder="Your e-mail"
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
                  placeholder=" Your password "
                  type="password"
                />
              </Col>
            </FormGroup>
            <FormGroup row className="justify-content-center">
              <Col sm={10}>
                <Input
                  className="auth-input "
                  onChange={({ target: { value } }) => {
                    setState({ ...state, passwordConfirmation: value });
                    schema
                      .validateAt('passwordConfirmation', { passwordConfirmation: value })
                      .then(() =>
                        setValidateState({ ...validateState, errPasswordConfirmation: '' })
                      )
                      .catch(function (err) {
                        setValidateState({
                          ...validateState,
                          errPasswordConfirmation: err.errors[0],
                        });
                        console.log(err.errors);
                      });
                  }}
                  invalid={!!validateState.errPasswordConfirmation}
                  name="password"
                  placeholder="Confirm password "
                  type="password"
                />
              </Col>
            </FormGroup>
          </Form>
          <Row className="align-center auth-rules pt-2 pb-2">
            <Col>
              By signing up, you agree to Pickbazar's <Link to={'d'}>Terms & Condtion</Link>
            </Col>
          </Row>
          <Row className="justify-content-center py-4">
            <Col sm={10}>
              <Button
                className="auth-btn-green"
                onClick={signUp}
                disabled={
                  !state.username ||
                  !state.password ||
                  !state.email ||
                  !state.passwordConfirmation ||
                  !!validateState.errUsername ||
                  !!validateState.errEmail ||
                  !!validateState.errPassword ||
                  !!validateState.errPasswordConfirmation
                }
              >
                Continue
              </Button>
            </Col>
          </Row>
          <Row className="align-center auth-relative">
            <Col className="or-pseudo">or</Col>
          </Row>
          <Row className="justify-content-center">
            <Col sm={10} className='position-relative'>
              <Facebook className='auth-ico-facebook' />
              <Button className="auth-btn-facebook">Continue with Facebook</Button>
            </Col>
          </Row>
          <Row className="justify-content-center pt-4">
            <Col sm={10} className='position-relative'>
              <Google className='auth-ico-google' />
              <Button className="auth-btn-google">Continue with Google</Button>
            </Col>
          </Row>
          <Row className="align-center pt-4 pb-4 signUp-footer">
            <Col>
              Already have an account?
              <Link className="auth_link" to={'/'} onClick={onOpenModal}>
                Login
              </Link>{' '}
            </Col>
          </Row>
        </ModalBody>
      </Container>
    </Modal>
  );
}
