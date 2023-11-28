import { Col, Card, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import React, {useS} from 'react';
import { Link } from 'react-router-dom';

export function CourseCard({ course, isAdminPage }) {
  const {
    name,
    code,
    department,
    program,
    startDate,
    endDate,
    term,
    fees,
    description,
  } = course;
  
    const handleDelete = () => {
      const confirmed = window.confirm("Confirm course deletion?");
      if(confirmed) {
      }
    };
      
  return (
    <Col>
      <Card>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{code}</Card.Subtitle>
          <Card.Text>{department}</Card.Text>
          <Card.Text>{program}</Card.Text>
          <Card.Text>{startDate}</Card.Text>
          <Card.Text>{endDate}</Card.Text>
          <Card.Text>{term}</Card.Text>
          <Card.Text>{fees}</Card.Text>
          <Card.Text>{description}</Card.Text>
          <Row>
          <Col>
          {isAdminPage && (
          <Button variant="danger" onClick={handleDelete}>
                      Delete Course
                    </Button>
          )}
          </Col>
          <Col>
          {isAdminPage && (
            <Link to="/studentPage">
          <Button variant="primary" type="submit">
                      Students
                    </Button>
                    </Link>
          )}
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
}
