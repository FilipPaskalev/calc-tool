import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DayFromYearToDateCalculator from '../components/organism/DayFromYearToDateCalculator';
// Import other calculator components similarly
import './Home.css';

const Home: React.FC = () => {
  return (
    <Container className="home">
      <Row>
        <Col sm={12} md={6} lg={4}>
          <div className="calculator-tile">
            <DayFromYearToDateCalculator />
          </div>
        </Col>
        {/* Add more calculator tiles here */}
      </Row>
    </Container>
  );
};

export default Home;
