import { NavBar } from "../NavBar";
import { Formik, Field } from 'formik';
import { InputGroup, Form, Container, Row, Col, Dropdown, Card} from "react-bootstrap";


export const Home = () => {
  const courses = [
    {
      name: "Project management 1",
      code: "Pr111",
      department: "Software Development",
      program: "Diploma",
      startDate: "2024/01/01",
      endDate: "2024/04/06",
      term: "1",
      fees: "3,000",
      description:
        "An introductory course designed to equip students with the fundamental principles and techniques of project management in the context of software development. This course provides a solid foundation for effectively planning, executing, and controlling software projects.",
    },

    {
      name: "Advanced Project management 1",
      code: "Pr333",
      department: "Software Development",
      program: "Diploma",
      startDate: "2024/07/04",
      endDate: "2024/12/23",
      term: "3",
      fees: "3,400",
      description:
        "An advanced-level course that builds upon the foundational principles of project management with a focus on complex projects in the field of software development. This course delves deeper into the intricacies of managing software projects, addressing advanced concepts and strategies.",
    },

    {
      name: "Networking",
      code: "Net222",
      department: "Software Development",
      program: "Diploma",
      startDate: "2024/04/08",
      endDate: "2024/08/18",
      term: "2",
      fees: "3,100",
      description:
        "an upper-level course designed to explore advanced project management principles and practices within the field of networking. This course is intended for students who have a solid foundation in project management and are looking to apply these skills to complex networking projects.",
    },
  ];

  return (
    <>
      <Container>
        <Row>
          <Col>
            <InputGroup size="sm" className="mb-3">
              <Form.Control placeholder="Search" style={{ tabSize: "100px" }} />
              <InputGroup.Text i className="bi bi-search"></InputGroup.Text>
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <h1>Program and Courses - Software Development</h1>
        </Row>
        <Row xs={2} md={4} lg={6}>
          <Col>
            <Dropdown className="d-inline mx-2">
              <Dropdown.Toggle id="dropdown-autoclose-true">
                Program
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">Diploma</Dropdown.Item>
                <Dropdown.Item href="#">Pos Diploma</Dropdown.Item>
                <Dropdown.Item href="#">Certificate</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col>
            <Dropdown className="d-inline mx-2">
              <Dropdown.Toggle id="dropdown-autoclose-true">
                Term
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">Term 1</Dropdown.Item>
                <Dropdown.Item href="#">Term 2</Dropdown.Item>
                <Dropdown.Item href="#">Term 3</Dropdown.Item>
                <Dropdown.Item href="#">Term 4</Dropdown.Item>
                <Dropdown.Item href="#">Term 5</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
        <Row xs={1} md={2} lg={3}>
          {courses.map((course, index) => (
            <Col key={index}>
              <Card>
                <Card.Body>
                  <Card.Title>{course.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {course.code}
                  </Card.Subtitle>
                  <Card.Text>{course.department}</Card.Text>
                  <Card.Text>{course.program}</Card.Text>
                  <Card.Text>{course.startDate}</Card.Text>
                  <Card.Text>{course.endDate}</Card.Text>
                  <Card.Text>{course.term}</Card.Text>
                  <Card.Text>{course.fees}</Card.Text>
                  <Card.Text>{course.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
