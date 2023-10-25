import {useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";



export const Login = () => {
    const [validated, setValidated] = useState(false);
    const [failedLogin, setFailedLogin] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const onPasswordChange = (event) => {
        setPassword(event.target.value)
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setValidated(true);
    }

  return (
    <Container className="pt-5">
      <Row className="justify-content-center">
        <Col xs="10" lg="6">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control required type="email" placeholder="student@email.com" value={email} onChange={onEmailChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control required type="password" placeholder="******" value={password} onChange={onPasswordChange}/>
                </Form.Group>
                {failedLogin && (<Alert variant="warning">
                    Invalid password or email
                </Alert>)}
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </Col>
      </Row>
    </Container>
  );
};
