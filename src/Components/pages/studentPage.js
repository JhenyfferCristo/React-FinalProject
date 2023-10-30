import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export const Student= () => {

  return (
    <Container>
      <Row>
        <h1>Student Support Services</h1> 
      </Row>
      
      <Row>
        <Col>
          <h2>Academic Support</h2>
          <p>
            Get help from tutors, attend study skills workshops, meet with your program advisor - we offer a range of services to help you succeed academically.
          </p>
        </Col>
        
        <Col>
          <h2>Career & Employment Support</h2>
          <p>
            From resume reviews to interview practice to job search strategies - our career center provides the tools and advising to help launch your career.
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <h2>Early Support</h2>
          <p>
            Reach out for help early to get connected with resources and supports to get you back on track academically.  
          </p>
        </Col>
        
        <Col>
          <h2>Financial Support</h2>
          <p>
            Speak to a financial aid advisor, apply for bursaries and grants, get help planning and budgeting - we're here to support your financial success.
          </p>
        </Col>
      </Row>
      
      <Row>
        <Col>
          <h2>International Student Support</h2>
          <p>
            Find help transitioning to school in a new country. Connect with advisors, join the international student club and access resources to help you adjust.
          </p>
        </Col>
        
        <Col>
          <h2>Learner Success Services</h2>
          <p>
            Workshops, advising and resources to help you develop strategies for time management, learning skills, test anxiety, organization and more.  
          </p>
        </Col>
      </Row>
      
      <Row>
        <Col>
          <h2>Library</h2>
          <p>
            Access online resources, get research help, borrow books and more through the library to support your learning.
          </p>
        </Col>
        
        <Col>
          <h2>Mental Health & Wellness</h2>
          <p>
            Counselling, wellness resources, peer support groups and health services - we're here to support your overall wellbeing.  
          </p>
        </Col>
      </Row>
      
    </Container>
  )

}
