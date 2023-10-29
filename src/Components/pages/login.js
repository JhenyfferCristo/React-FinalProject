import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import { useUserContext } from '../context/UserProvider';

export const Login = () => {
  const [validated, setValidated] = useState(false);
  const [failedLogin, setFailedLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const { setUser } = useUserContext();

  const onUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      //call BE api to login
      //if(success)
      const role = username === 'admin' ? 'admin' : 'student';
      setUser({
        username,
        role,
      });
      navigate(role === 'admin' ? '/admPage' : '/studentPage');
    }
    setValidated(true);
  };

  return (
    <Container className="pt-5">
      <Row className="justify-content-center">
        <Col xs="10" lg="6">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                required
                type="text"
                value={username}
                onChange={onUsernameChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="******"
                value={password}
                onChange={onPasswordChange}
              />
            </Form.Group>
            {failedLogin && (
              <Alert variant="warning">Invalid password or email</Alert>
            )}
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
