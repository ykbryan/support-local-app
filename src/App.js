import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.scss';

import Home from './screens/Home';
import About from './screens/About';
import Userform from './screens/About';
import Banners from './components/Banners';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function App() {
  return (
    <Router>
      <Container className='p-3'>
        <Row>
          <Col>
            <Banners />
          </Col>
        </Row>
        <Row>
          <Col>
            <Switch>
              <Route path='/about'>
                <About />
              </Route>
              <Route path='/form'>
                <Userform />
              </Route>
              <Route path='/:merchantName'>
                <Home />
              </Route>
              <Route path='/'>
                <Home />
              </Route>
            </Switch>
          </Col>
        </Row>
        <Row>
          <Col>
            <footer>
              <ul>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/about'>About</Link>
                </li>
                <li>
                  <a href='mailto:helpinglocalsg@gmail.com'>Contact us</a>
                </li>
              </ul>
            </footer>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}
