import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export const Student= () => {

  return (
    <Container>
      <Row>
        <h1>Student Support Services</h1> 
      </Row>
      
    
        // Create a function to generate content for each service
        function createServiceElement(title, description) {
            const serviceDiv = document.createElement('div');
            const serviceTitle = document.createElement('h2');
            const serviceDescription = document.createElement('p');

            serviceTitle.textContent = title;
            serviceDescription.textContent = description;

            serviceDiv.appendChild(serviceTitle);
            serviceDiv.appendChild(serviceDescription);

            return serviceDiv;
        }

        // Define the services and their descriptions
        const services = [
            { title: 'Academic Support', description: 'Academic support services are available to help students succeed in their studies. These services may include tutoring, study groups, and academic advising.' },
            { title: 'Career & Employment Support', description: 'Career and employment support services assist students in finding internships, job opportunities, and preparing for their careers.' },
            { title: 'Early Support', description: 'Early support services are designed to help students who may be struggling academically or facing other challenges. They provide assistance and guidance to ensure student success.' },
            { title: 'Financial Support', description: 'Financial support services offer information and assistance regarding scholarships, grants, loans, and financial aid to help students manage their finances while in school.' },
            { title: 'International Student Support', description: 'International student support services cater to the unique needs of students from other countries, including visa support, cultural adjustment, and academic guidance.' },
            { title: 'Learner Success Services', description: 'Learner success services provide resources and strategies to enhance the learning experience, such as time management and study skills.' },
            { title: 'Library', description: 'The library offers access to a wide range of educational resources, including books, research materials, and study spaces for students to support their academic endeavors.' },
            { title: 'Mental Health and Wellness', description: 'Mental health and wellness services focus on the emotional well-being of students, providing counseling and support for mental health issues.' },
        ];

        // Create a container to hold all the service elements
        const container = document.getElementById('servicesContainer');

        // Populate the container with service elements
        services.forEach((service) => {
            const serviceElement = createServiceElement(service.title, service.description);
            container.appendChild(serviceElement);
        });
}
