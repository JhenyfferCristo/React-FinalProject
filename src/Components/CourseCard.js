import { Col, Card } from 'react-bootstrap';

export function CourseCard({ course }) {
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
        </Card.Body>
      </Card>
    </Col>
  );
}
