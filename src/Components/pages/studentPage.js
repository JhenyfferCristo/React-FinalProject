import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export const Student= () => {

  return (
  
    <Container>
      <h1>Student Services</h1>
      <Row>
        <Col md={4}>
          <h2>Academic Support</h2>
          <p>Our academic support services are designed to help students succeed in their studies. We offer tutoring, study resources, and academic advising to assist you in your academic journey.</p>
        </Col>
        <Col md={4}>
          <h2>Career & Employment Support</h2>
          <p>We provide career guidance and support in finding employment opportunities. Our services include resume building, interview preparation, and job search assistance.</p>
        </Col>
        <Col md={4}>
          <h2>Early Support</h2>
          <p>Early support services are here to help students overcome challenges and ensure a successful start to their academic journey. Whether it's personal or academic support, we've got you covered.</p>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <h2>Financial Support</h2>
          <p>We understand the financial challenges students face. Our financial support services offer guidance on scholarships, grants, and financial aid to make your education more affordable.</p>
        </Col>
        <Col md={4}>
          <h2>Indigenous Student Services</h2>
          <p>We provide specialized services for Indigenous students, including cultural support, academic guidance, and resources to help you thrive in your educational journey.</p>
        </Col>
        <Col md={4}>
          <h2>Intercultural Centre</h2>
          <p>The intercultural center promotes diversity and cultural exchange. It offers programs, events, and resources to foster understanding and connections among students from different backgrounds.</p>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <h2>International Student Support</h2>
          <p>For international students, we offer support services tailored to your unique needs, including visa assistance, cultural adjustment resources, and academic guidance.</p>
        </Col>
        <Col md={4}>
          <h2>Learner Success Services</h2>
          <p>Learner success services focus on enhancing your overall success as a student. We offer workshops, resources, and guidance to improve your learning experience.</p>
        </Col>
        <Col md={4}>
          <h2>Library</h2>
          <p>Our library is a valuable resource for students. Access a vast collection of books, research materials, and study spaces to support your academic endeavors.</p>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <h2>Mental Health & Wellness</h2>
          <p>We care about your mental health and well-being. Our services include counseling, mental health resources, and wellness programs to help you maintain a healthy life balance.</p>
        </Col>
        {/* Add more sections here as needed */}
      </Row>
    </Container>
  );
};
