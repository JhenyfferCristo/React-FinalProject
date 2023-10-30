import React, {useState} from 'react';
import { Row } from 'react-bootstrap';
import { Container, Form, Button, Col } from 'react-bootstrap';


const AddCourse = () => {
    const [courseData, setCourseData] = useState({
        courseName: '',
        startDate: '',
        endDate: '',
        courseCode: '',
        department: '',
        description: '',
        term:'',
        program:'',
        fees:'',
      });
      
      const handleChange = (e) => {
        const { name, value } = e.target;
        setCourseData({ ...courseData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handling the form submission
      };


  return (
    <Container className="pt-5">
        <Row>
        <h3 className="text-center mb-5">Adding a New Course Form</h3>
        </Row>
      
    <Row className="justify-content-center">
     
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Course Name</Form.Label>
          <Form.Control
            type="text"
            name="courseName"
            value={courseData.courseName}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Row className="mb-3">
                    <Form.Group as={Col} md="6">
                      <Form.Label>Start Date</Form.Label>
                      <Form.Control
                        type="date"
                        name="startDate"
                        value={courseData.startDate}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                    <Form.Group as={Col} md="6">
                      <Form.Label>End Date</Form.Label>
                      <Form.Control
                        type="date"
                        name="endDate"
                        value={courseData.endDate}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Row>
    
        <Row className="mb-3">
         <Form.Group as={Col} md="6">
          <Form.Label>Course Code</Form.Label>
          <Form.Control
            type="text"
            name="courseCode"
            value={courseData.courseCode}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group as={Col} md="6">
          <Form.Label>Department</Form.Label>
          <Form.Control
            type="text"
            name="department"
            value={courseData.department}
            onChange={handleChange}
            required
          />
        </Form.Group>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            value={courseData.description}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Row className="mb-3">
         <Form.Group as={Col} md="6">
          <Form.Label>Term</Form.Label>
          <Form.Control
            as="textarea"
            name="term"
            value={courseData.term}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group as={Col} md="6">
          <Form.Label>Program</Form.Label>
          <Form.Control
            as="textarea"
            name="program"
            value={courseData.program}
            onChange={handleChange}
            required
          />
        </Form.Group>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label>Fees ($CAD)</Form.Label>
          <Form.Control
            as="textarea"
            name="fees"
            value={courseData.fees}
            onChange={handleChange}
            required
          />
        </Form.Group>
        

        <Button variant="primary" type="submit">
          Add Course
        </Button>
       </Form>
    </Row>
  </Container>
    
  );
};

export default AddCourse;
