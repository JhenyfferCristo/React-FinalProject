import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

const AdminForm = () => {
  const [messages, setMessages] = useState([]);

  // Mock messages for demonstration
  const mockMessages = [
    {
      firstName: 'John',
      lastName: 'Doe',
      studentID: '12345',
      courseCode: 'CS101',
      message: 'I have a question about the assignment.',
    },
    {
      firstName: 'Alice',
      lastName: 'Smith',
      studentID: '54321',
      courseCode: 'Math202',
      message: 'Can I change my course schedule?',
    },
  ];

  return (
    <Container className="pt-5">
      <h3 className="text-center mb-5">Administrator Page</h3>
      {mockMessages.map((message, index) => (
        <Card key={index} className="mb-3">
          <Card.Body>
            <Card.Title>
              {message.firstName} {message.lastName}
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Student ID: {message.studentID}
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">
              Course Code: {message.courseCode}
            </Card.Subtitle>
            <Card.Text>{message.message}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default AdminForm;
