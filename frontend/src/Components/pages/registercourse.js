import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import { Container, Form, Button, Col } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';

const INITIAL_VALUES = {
  fullName: '',
  email: '',
  phoneNumber: '',
  // ...other user registration fields
};

export const RegisterCourse = () => {
  const [registration, setRegistration] = useState([]);
  const navigate = useNavigate();

  const registrationSchema = yup.object().shape({
    fullName: yup.string().required(),
    email: yup.string().email().required(),
    phoneNumber: yup.string().required(),
    // ...other validation rules for user registration fields
  });

  console.log(registration);
  return (
    <Container className="pt-5">
      <Row>
        <h3 className="text-center mb-5">Register for a Course</h3>
      </Row>

      <Row className="justify-content-center">
        <Col xs="10" lg="6">
          <Formik
            validationSchema={registrationSchema}
            initialValues={INITIAL_VALUES}
            onSubmit={async (values, { resetForm }) => {
              console.log(values);
              try {
                // Add your API call or logic here to register the user for the course
                // Example fetch call to register a user for a course
                const response = await fetch('http://localhost:5000/register', {
                  method: 'POST',
                  body: JSON.stringify({
                    fullName: values.fullName,
                    email: values.email,
                    phoneNumber: values.phoneNumber,
                    // ...other user registration fields
                  }),
                  headers: {
                    'Content-Type': 'application/json',
                  },
                });
                if (response.status !== 200) {
                  throw new Error(response.statusText);
                } else {
                  navigate('/courses'); // Redirect to courses page after successful registration
                }
              } catch (error) {
                console.error('Registration Error:', error);
              }
            }}>
            {({ values, handleChange, errors, touched, handleSubmit }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Full Name"
                    name="fullName"
                    value={values.fullName}
                    onChange={handleChange}
                    isInvalid={!!(errors.fullName && touched.fullName)}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    isInvalid={!!(errors.email && touched.email)}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    required
                    type="tel"
                    placeholder="Phone Number"
                    name="phoneNumber"
                    value={values.phoneNumber}
                    onChange={handleChange}
                    isInvalid={!!(errors.phoneNumber && touched.phoneNumber)}
                  />
                </Form.Group>

                {/* Add other user registration fields here */}

                <Button variant="primary" type="submit">
                  Register
                </Button>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterCourse;
