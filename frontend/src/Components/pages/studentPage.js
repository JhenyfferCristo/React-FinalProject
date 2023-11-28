import React, { useState } from 'react';
import {
  InputGroup,
  Form,
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { CourseCard } from '../CourseCard';
import { Link } from 'react-router-dom';
export const Student = () => {
  const courses = [
    {
      name: 'Project management 1',
      code: 'Pr111',
      department: 'Software Development',
      program: 'Diploma',
      startDate: '2024/01/01',
      endDate: '2024/04/06',
      term: '1',
      fees: '3,000',
      description:
        'An introductory course designed to equip students with the fundamental principles and techniques of project management in the context of software development. This course provides a solid foundation for effectively planning, executing, and controlling software projects.',
    },
    {
      name: 'Advanced Project management 1',
      code: 'Pr333',
      department: 'Software Development',
      program: 'Diploma',
      startDate: '2024/07/04',
      endDate: '2024/12/23',
      term: '3',
      fees: '3,400',
      description:
        'An advanced-level course that builds upon the foundational principles of project management with a focus on complex projects in the field of software development. This course delves deeper into the intricacies of managing software projects, addressing advanced concepts and strategies.',
    },
    {
      name: 'Networking',
      code: 'Net222',
      department: 'Software Development',
      program: 'Diploma',
      startDate: '2024/04/08',
      endDate: '2024/08/18',
      term: '2',
      fees: '3,100',
      description:
        'An upper-level course designed to explore advanced project management principles and practices within the field of networking. This course is intended for students who have a solid foundation in project management and are looking to apply these skills to complex networking projects.',
    },
  ];
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = () => {
    const filteredCourses = courses.filter((course) =>
      course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.code.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredCourses);
  };
  return (
<Container>
<Row>
<Col>
<InputGroup size="md" className="mb-3">
<Form.Control
              placeholder="Search"
              style={{ tabSize: '100px' }}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
<InputGroup.Text className="bi bi-search" onClick={handleSearch}></InputGroup.Text>
</InputGroup>
</Col>
</Row>
<Row>
<Col>
<Button variant="primary" type="submit">
              Register for Course
</Button>
</Col>
<Col>
<Link to="/studentPage/studentForm">
<Button variant="primary" type="submit">
            Contact Form
</Button>
</Link>
</Col>
</Row>
<Row>
<h1>Available Courses</h1>
</Row>
<Row xs={1} md={2} lg={3}>
        {searchResults.length > 0 ? (
          searchResults.map((course, index) => (
<CourseCard key={index} course={course} isAdminPage={false} />
          ))
        ) : (
          courses.map((course, index) => (
<CourseCard key={index} course={course} isAdminPage={false} />
          ))
        )}
</Row>
</Container>
  );
};