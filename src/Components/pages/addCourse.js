import React, {useState} from 'react';
import { Row } from 'react-bootstrap';
import { Container, Form, Button } from 'react-bootstrap';

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
    <Container>
        <Row>
      <h1>Adding a New Course Form</h1>
      </Row>
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

        <Form.Group className="mb-3">
          <Form.Label>Start Date</Form.Label>
          <Form.Control
            type="date"
            name="startDate"
            value={courseData.startDate}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>End Date</Form.Label>
          <Form.Control
            type="date"
            name="endDate"
            value={courseData.endDate}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Course Code</Form.Label>
          <Form.Control
            type="text"
            name="courseCode"
            value={courseData.courseCode}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Department</Form.Label>
          <Form.Control
            type="text"
            name="department"
            value={courseData.department}
            onChange={handleChange}
            required
          />
        </Form.Group>

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

        <Form.Group className="mb-3">
          <Form.Label>Term</Form.Label>
          <Form.Control
            as="textarea"
            name="term"
            value={courseData.term}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Program</Form.Label>
          <Form.Control
            as="textarea"
            name="program"
            value={courseData.program}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Fees</Form.Label>
          <Form.Control
            as="text"
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
    </Container>
    
  );
};

export default AddCourse;
