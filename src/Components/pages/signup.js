import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { Formik } from 'formik';
import * as yup from 'yup';

const INITIAL_VALUES = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  dob: '',
  department: '',
  program: '',
  userName: '',
  password: '',
};
export const Signup = () => {
  const [users, setUsers] = useState([]);

  const signUpSchema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required('Invalid email'),
    phone: yup.string().required(),
    dob: yup.date().required(),
    department: yup.string().required(),
    program: yup.string().required(),
    userName: yup.string().required(),
    password: yup.string().required(),
  });

  console.log(users);
  return (
    <Container className="pt-5">
      <Row>
        <h3 className="text-center mb-5">Welcome to Bow Valley College</h3>
      </Row>
      <Row className="justify-content-center">
        <Col xs="10" lg="6">
          <Formik
            validationSchema={signUpSchema}
            initialValues={INITIAL_VALUES}
            onSubmit={(values, { resetForm }) => {
              setUsers((prevUsers) => [...prevUsers, values]);
              resetForm();
            }}>
            {({ values, handleChange, errors, touched, handleSubmit }) => {
              function isInvalid(field) {
                return Boolean(errors[field]) && Boolean(touched[field]);
              }

              return (
                <Form noValidate onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Form.Group as={Col} md="6">
                      <Form.Label>First name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="First name"
                        name="firstName"
                        value={values.firstName}
                        onChange={handleChange}
                        isInvalid={isInvalid('firstName')}
                      />
                    </Form.Group>
                    <Form.Group as={Col} md="6">
                      <Form.Label>Last name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Last name"
                        name="lastName"
                        value={values.lastName}
                        onChange={handleChange}
                        isInvalid={isInvalid('lastName')}
                      />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col}>
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        required
                        type="email"
                        placeholder="email@email.com"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        isInvalid={isInvalid('email')}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} md="6">
                      <Form.Label>Phone</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="phone"
                        value={values.phone}
                        onChange={handleChange}
                        isInvalid={isInvalid('phone')}
                      />
                    </Form.Group>
                    <Form.Group as={Col} md="6">
                      <Form.Label>Birthday</Form.Label>
                      <Form.Control
                        required
                        type="date"
                        name="dob"
                        value={values.dob}
                        onChange={handleChange}
                        isInvalid={isInvalid('dob')}
                      />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col}>
                      <Form.Label>Department</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Software Development"
                        name="department"
                        value={values.department}
                        onChange={handleChange}
                        isInvalid={isInvalid('department')}
                      />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} md="6">
                      <Form.Label>Program</Form.Label>
                      <Form.Select
                        name="program"
                        value={values.program}
                        onChange={handleChange}
                        isInvalid={isInvalid('program')}>
                        <option value="1">Diploma</option>
                        <option value="2">Pos Diploma</option>
                        <option value="3">Certificate</option>
                      </Form.Select>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} md="6">
                      <Form.Label>Username</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="userName"
                        value={values.userName}
                        onChange={handleChange}
                        isInvalid={isInvalid('userName')}
                      />
                    </Form.Group>
                    <Form.Group as={Col} md="6">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        isInvalid={isInvalid('password')}
                      />
                    </Form.Group>
                  </Row>
                  <Row className="mt-4">
                    <Button variant="primary" type="submit">
                      Sign Up
                    </Button>
                  </Row>
                </Form>
              );
            }}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};
