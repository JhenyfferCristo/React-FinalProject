import React, { useState } from 'react';
import { InputGroup, Form, Container, Row, Col } from 'react-bootstrap';
import { CourseCard } from '../CourseCard';

export const Home = () => {
  const [searchBar, setSearchBar] = useState('');
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
        'an upper-level course designed to explore advanced project management principles and practices within the field of networking. This course is intended for students who have a solid foundation in project management and are looking to apply these skills to complex networking projects.',
    },
  ];

  const filteredCourses = courses.filter(
    (course) =>
      course.name.toLowerCase().includes(searchBar.toLowerCase()) ||
      course.code.toLowerCase().includes(searchBar.toLowerCase()),
  );

  return (
    <Container>
      <Row>
        <Col>
          <InputGroup size="md" className="mb-3">
            <Form.Control
              placeholder="Search"
              style={{ tabSize: '100px' }}
              value={searchBar}
              onChange={(event) => setSearchBar(event.target.value)}
            />
            <InputGroup.Text i className="bi bi-search"></InputGroup.Text>
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <h1>Program and Courses - Software Development</h1>
      </Row>
      <Row xs={2} md={4} lg={8} className="mb-3">
        <Col>
          <Form.Select
            size="md"
            onChange={(event) => console.log(event.target.value)}>
            <option>Program</option>
            <option>Diploma</option>
            <option>Pos Diploma</option>
            <option>Certificate</option>
          </Form.Select>
        </Col>
        <Col>
          <Form.Select
            size="md"
            onChange={(event) => console.log(event.target.value)}>
            <option>Term</option>
            <option>Term 1</option>
            <option>Term 2</option>
            <option>Term 3</option>
            <option>Term 4</option>
            <option>Term 5</option>
          </Form.Select>
        </Col>
      </Row>
      <Row xs={1} md={2} lg={3}>
        {filteredCourses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </Row>
    </Container>
  );
};
