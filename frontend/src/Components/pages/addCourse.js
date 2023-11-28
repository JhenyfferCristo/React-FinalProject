import React, {useState} from 'react';
import { Row } from 'react-bootstrap';
import { Container, Form, Button, Col } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';


const INITIAL_VALUES = {
        courseName: '',
        startDate: '',
        endDate: '',
        courseCode: '',
        department: '',
        description: '',
        term:'',
        program:'',
        fees:'',
      };

      export const AddCourse = () => {
        const [users, setUsers] = useState([]);
      
        const signUpSchema = yup.object().shape({
          courseName: yup.string().required(),
          startDate: yup.date().required(),
          endDate: yup.date().required(),
          courseCode: yup.string().required(),
          department: yup.string().required(),
          description: yup.string().required(),
          term: yup.string().required(),
          program: yup.string().required(),
          fees: yup.string().required(),
        });
      
        /*
      const handleChange = (e) => {
        const { name, value } = e.target;
        setCourseData({ ...courseData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handling the form submission
      };
      */


      console.log(users);
  return (
    <Container className="pt-5">
      <Row>
        <h3 className="text-center mb-5">Adding a New Course Form</h3>
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

     return(
      <Form noValidate onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Form.Group as={Col} md="6">
                      <Form.Label>Course name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Course name"
                        name="courseName"
                        value={values.courseName}
                        onChange={handleChange}
                        isInvalid={isInvalid('courseName')}
                      />
                    </Form.Group>
                    </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} md="6">
                      <Form.Label>Start Date</Form.Label>
                      <Form.Control
                        required
                        type="date"
                        name="startDate"
                        value={values.dob}
                        onChange={handleChange}
                        isInvalid={isInvalid('startDate')}
                      />
                    </Form.Group>
                    <Form.Group as={Col} md="6">
                    <Form.Label>End Date</Form.Label>
                      <Form.Control
                        required
                        type="date"
                        name="endDate"
                        value={values.dob}
                        onChange={handleChange}
                        isInvalid={isInvalid('endDate')}
                      />
                    </Form.Group>
                  </Row>
    
                  <Row className="mb-3">
                    <Form.Group as={Col} md="6">
                      <Form.Label>Course code</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Course code"
                        name="courseCode"
                        value={values.courseCode}
                        onChange={handleChange}
                        isInvalid={isInvalid('courseCode')}
                      />
                    </Form.Group>

                    <Form.Group as={Col} md="6">
                      <Form.Label>Department</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Department"
                        name="department"
                        value={values.department}
                        onChange={handleChange}
                        isInvalid={isInvalid('department')}
                      />
                    </Form.Group>
                  </Row>

      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
          <Form.Control
            required
            type="textarea"
            name="description"
            value={values.description}
            onChange={handleChange}
            isInvalid={isInvalid('description')}
          />
        </Form.Group>

        <Row className="mb-3">
         <Form.Group as={Col} md="6">
          <Form.Label>Term</Form.Label>
          <Form.Control
            required
            type="textarea"
            name="term"
            value={values.term}
            onChange={handleChange}
            isInvalid={isInvalid('term')}
          />
        </Form.Group>
        <Form.Group as={Col} md="6">
          <Form.Label>Program</Form.Label>
          <Form.Control
            required
            as="textarea"
            name="program"
            value={values.program}
            onChange={handleChange}
            isInvalid={isInvalid('program')}
          />
        </Form.Group>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label>Fees ($CAD)</Form.Label>
          <Form.Control
            required
            as="textarea"
            name="fees"
            value={values.fees}
            onChange={handleChange}
            isInvalid={isInvalid('fees')}
          />
        </Form.Group>
        
        <Row className="mt-4">
                    <Button variant="primary" type="submit">
                      Add Course
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

export default AddCourse;
