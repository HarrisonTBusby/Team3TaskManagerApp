import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css';

export default function HomePage() {
  return (
    <body>
      <div className='homePageBackground'>

        <Container>
        <Row className='d-flex justify-content-between'>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div className='headerFontSize'>Task Master</div>
          <button className='signOutBtn'><u>Sign out</u></button>
        </div>
        </Row>
        </Container>

        <Container>
        <Row className="mt-5">
          <div className='userTaskFontSize'>[Placeholder] has 1 Task In Progress</div>
        </Row>
        </Container>
      </div>
    </body>
  )
}
