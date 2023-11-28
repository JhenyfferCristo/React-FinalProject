import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { Formik } from 'formik';
import * as yup from 'yup';

const INITIAL_VALUES = {
  firstName: '',
  lastName: '',
  studentID: '',
  courseCode: '',
  message: '',
};

const studentFormSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  studentID: yup.string().required(),
  courseCode: yup.string().required(),
  message: yup.string().required(),
});

export const StudentForm = ({ onSubmit }) => {
  return (
    <Container className="pt-5">
      <Formik
        validationSchema={studentFormSchema}
        initialValues={INITIAL_VALUES}
        onSubmit={onSubmit}>
        {({ values, handleChange, errors, touched, handleSubmit }) => {
          function isInvalid(field) {
            return Boolean(errors[field]) && Boolean(touched[field]);
          }

          return (
            <Form noValidate onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
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
              <Form.Group className="mb-3">
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
              <Form.Group className="mb-3">
                <Form.Label>Student ID</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Student ID"
                  name="studentID"
                  value={values.studentID}
                  onChange={handleChange}
                  isInvalid={isInvalid('studentID')}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Course Code</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Course Code"
                  name="courseCode"
                  value={values.courseCode}
                  onChange={handleChange}
                  isInvalid={isInvalid('courseCode')}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  rows={4}
                  placeholder="Your message..."
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  isInvalid={isInvalid('message')}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
};
