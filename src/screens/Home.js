import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { FilterLeft } from 'react-bootstrap-icons';

export default function Home() {
  let { merchantName } = useParams();
  const [loading, setLoading] = useState(false);
  const [selectionIndex, setSelectionIndex] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const isButtonSelected = (index) => {
    if (selectionIndex === index) return true;
    return false;
  };

  const buttonPressed = (index) => {
    setSelectionIndex(index);
  };

  const handleFilter = () => {
    setShowModal(!showModal);
  };

  return (
    <Container>
      <Row className=''>
        <Col>
          <h2 className='p-3'>#SupportLocalSG</h2>
          <p>
            Our hawker uncles and aunties are cooking up a storm in the midst of
            Covid-19! Come order your makan from them and support our local F&B
            (as many of them don’t use the delivery platforms)! BYO containers
            to dabao food and self-collect if possible. Remember to stay at
            home, and be a true CB (Circuit Breaker).{' '}
            <Link to='/about'>Learn more</Link>.
          </p>
          <p>
            If you wish to be added onto this platform,{' '}
            <Link to='/form'>fill up this form</Link>.
          </p>
        </Col>
      </Row>
      <Row id='selections'>
        <Col xs={12} md={7}>
          <Button
            active={isButtonSelected(0)}
            onClick={() => buttonPressed(0)}
            className='m-1'
            disabled={loading}
            variant='outline-secondary'
          >
            <span>
              <img
                alt='Meals'
                src='https://supportlocal.sg/meals.0406769f9bb2357d0cd6.svg'
              />
            </span>
            <span className='p-2'>Meals</span>
          </Button>
          <Button
            active={isButtonSelected(1)}
            onClick={() => buttonPressed(1)}
            className='m-1'
            disabled={loading}
            variant='outline-secondary'
          >
            <span>
              <img
                alt='Meals'
                src='https://supportlocal.sg/snacks.c590849536b6f3499b71.svg'
              />
            </span>
            <span className='p-2'>Snacks</span>
          </Button>
          <Button
            active={isButtonSelected(3)}
            onClick={() => buttonPressed(3)}
            className='m-1'
            disabled={loading}
            variant='outline-secondary'
          >
            <span>
              <img
                alt='Meals'
                src='https://supportlocal.sg/groceries.c7c44178e7540ee78cd1.svg'
              />
            </span>
            <span className='p-2'>Fresh Produce & Groceries</span>
          </Button>
        </Col>
        <Col xs={12} md={5} className='text-right'>
          <Button
            className='m-1'
            disabled={loading}
            variant='outline-secondary'
            onClick={handleFilter}
          >
            <FilterLeft className='ml-12 m-1' />
            Filter
          </Button>
          <Modal className='filterModal' show={showModal} onHide={handleFilter}>
            <Modal.Header closeButton>
              <Modal.Title>Refine your search</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form id='filterForm'>
                <Row className='filterName'>
                  <Col>
                    <strong>CUISINE</strong>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Check
                      inline
                      label='All'
                      type='checkbox'
                      id={`cuisine-checkbox-1`}
                    />
                    <Form.Check
                      inline
                      label='Asian'
                      type='checkbox'
                      id={`cuisine-checkbox-1`}
                    />
                    <Form.Check
                      inline
                      label='Seafood'
                      type='checkbox'
                      id={`cuisine-checkbox-2`}
                    />
                    <Form.Check
                      inline
                      label='Vegetarian'
                      type='checkbox'
                      id={`cuisine-checkbox-3`}
                    />
                    <Form.Check
                      inline
                      label='Something'
                      type='checkbox'
                      id={`cuisine-checkbox-4`}
                    />
                  </Col>
                </Row>
                <Row className='filterName'>
                  <Col>
                    <strong>LOCATION</strong>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Check
                      inline
                      label='All'
                      type='checkbox'
                      id={`cuisine-checkbox-1`}
                    />
                    <Form.Check
                      inline
                      label='Central'
                      type='checkbox'
                      id={`cuisine-checkbox-1`}
                    />
                    <Form.Check
                      inline
                      label='North'
                      type='checkbox'
                      id={`cuisine-checkbox-1`}
                    />
                    <Form.Check
                      inline
                      label='South'
                      type='checkbox'
                      id={`cuisine-checkbox-1`}
                    />
                    <Form.Check
                      inline
                      label='East'
                      type='checkbox'
                      id={`cuisine-checkbox-1`}
                    />
                    <Form.Check
                      inline
                      label='West'
                      type='checkbox'
                      id={`cuisine-checkbox-1`}
                    />
                  </Col>
                </Row>
                <Row className='filterName'>
                  <Col xs={12} md={6}>
                    <strong>MIN ORDER</strong>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={6}>
                    <Button
                      active={isButtonSelected(0)}
                      onClick={() => buttonPressed(0)}
                      className='m-1'
                      disabled={loading}
                      variant='outline-secondary'
                    >
                      <span className='p-2'>$0</span>
                    </Button>
                    <Button
                      active={isButtonSelected(0)}
                      onClick={() => buttonPressed(0)}
                      className='m-1'
                      disabled={loading}
                      variant='outline-secondary'
                    >
                      <span className='p-2'>$20</span>
                    </Button>
                    <Button
                      active={isButtonSelected(0)}
                      onClick={() => buttonPressed(0)}
                      className='m-1'
                      disabled={loading}
                      variant='outline-secondary'
                    >
                      <span className='p-2'>$50</span>
                    </Button>
                  </Col>
                </Row>
                <Row className='filterName'>
                  <Col>
                    <strong>SORT BY</strong>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button
                      active={isButtonSelected(0)}
                      onClick={() => buttonPressed(0)}
                      className='m-1'
                      disabled={loading}
                      variant='outline-secondary'
                    >
                      <span className='p-2'>Name</span>
                    </Button>
                    <Button
                      active={isButtonSelected(0)}
                      onClick={() => buttonPressed(0)}
                      className='m-1'
                      disabled={loading}
                      variant='outline-secondary'
                    >
                      <span className='p-2'>Min. Order</span>
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant='secondary' onClick={handleFilter}>
                Cancel
              </Button>
              <Button variant='primary' onClick={handleFilter}>
                Apply
              </Button>
            </Modal.Footer>
          </Modal>
          <Form id='searchbar' className='m-1'>
            <Form.Control placeholder='Search...' />
          </Form>
        </Col>
      </Row>
      <Row className='list-merchants'>
        <Col xs={12} md={6}>
          <Card className='merchant-card'>
            <Card.Body>
              <div className='merchant-icon'>
                <Card.Img src='https://supportlocal.sg/assets/img/meals.svg' />
                <span>Chinese</span>
              </div>
              <Card.Title>Tiong Bahru Yong Toufu</Card.Title>
              <Card.Text>
                <p>
                  Tel: 85006968 <br />
                  Min. Order: $20 <br />
                  Delivers: Islandwide
                </p>
                <strong>Delivery Info</strong>
                <p>
                  $5, Free delivery for orders $60 and above Place your orders
                  by 11am for same day delivery by 6pm! For orders placed after
                  11am, delivery will be on next day by 6pm.
                </p>
              </Card.Text>
              <Button variant='primary'>Go somewhere</Button>
            </Card.Body>
            <Card.Footer>
              <div className='merchant-menu'>
                <a href='#'>View Menu</a>
              </div>
              <div className='merchant-actions'>
                Order via
                <img
                  alt='facebook'
                  src='https://supportlocal.sg/whatsapp.127292b1dcabc8e15879.svg'
                />
                <img
                  alt='facebook'
                  src='https://supportlocal.sg/facebook.4c1b11a198118002a89d.svg'
                />
              </div>
            </Card.Footer>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card className='merchant-card'>
            <Card.Body>
              <div className='merchant-icon'>
                <Card.Img src='https://supportlocal.sg/assets/img/meals.svg' />
                <span>Chinese</span>
              </div>
              <Card.Title>Tiong Bahru Yong Toufu</Card.Title>
              <Card.Text>
                <p>
                  Tel: 85006968 <br />
                  Min. Order: $20 <br />
                  Delivers: Islandwide
                </p>
                <strong>Delivery Info</strong>
                <p>
                  $5, Free delivery for orders $60 and above Place your orders
                  by 11am for same day delivery by 6pm! For orders placed after
                  11am, delivery will be on next day by 6pm.
                </p>
              </Card.Text>
              <Button variant='primary'>Go somewhere</Button>
            </Card.Body>
            <Card.Footer>
              <div className='merchant-menu'>
                <a href='#'>View Menu</a>
              </div>
              <div className='merchant-actions'>
                Order via
                <img
                  alt='facebook'
                  src='https://supportlocal.sg/whatsapp.127292b1dcabc8e15879.svg'
                />
                <img
                  alt='facebook'
                  src='https://supportlocal.sg/facebook.4c1b11a198118002a89d.svg'
                />
              </div>
            </Card.Footer>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card className='merchant-card'>
            <Card.Body>
              <div className='merchant-icon'>
                <Card.Img src='https://supportlocal.sg/assets/img/meals.svg' />
                <span>Chinese</span>
              </div>
              <Card.Title>Tiong Bahru Yong Toufu</Card.Title>
              <Card.Text>
                <p>
                  Tel: 85006968 <br />
                  Min. Order: $20 <br />
                  Delivers: Islandwide
                </p>
                <strong>Delivery Info</strong>
                <p>
                  $5, Free delivery for orders $60 and above Place your orders
                  by 11am for same day delivery by 6pm! For orders placed after
                  11am, delivery will be on next day by 6pm.
                </p>
              </Card.Text>
              <Button variant='primary'>Go somewhere</Button>
            </Card.Body>
            <Card.Footer>
              <div className='merchant-menu'>
                <a href='#'>View Menu</a>
              </div>
              <div className='merchant-actions'>
                Order via
                <img
                  alt='facebook'
                  src='https://supportlocal.sg/whatsapp.127292b1dcabc8e15879.svg'
                />
                <img
                  alt='facebook'
                  src='https://supportlocal.sg/facebook.4c1b11a198118002a89d.svg'
                />
              </div>
            </Card.Footer>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card className='merchant-card'>
            <Card.Body>
              <div className='merchant-icon'>
                <Card.Img src='https://supportlocal.sg/assets/img/meals.svg' />
                <span>Chinese</span>
              </div>
              <Card.Title>Tiong Bahru Yong Toufu</Card.Title>
              <Card.Text>
                <p>
                  Tel: 85006968 <br />
                  Min. Order: $20 <br />
                  Delivers: Islandwide
                </p>
                <strong>Delivery Info</strong>
                <p>
                  $5, Free delivery for orders $60 and above Place your orders
                  by 11am for same day delivery by 6pm! For orders placed after
                  11am, delivery will be on next day by 6pm.
                </p>
              </Card.Text>
              <Button variant='primary'>Go somewhere</Button>
            </Card.Body>
            <Card.Footer>
              <div className='merchant-menu'>
                <a href='#'>View Menu</a>
              </div>
              <div className='merchant-actions'>
                Order via
                <img
                  alt='facebook'
                  src='https://supportlocal.sg/whatsapp.127292b1dcabc8e15879.svg'
                />
                <img
                  alt='facebook'
                  src='https://supportlocal.sg/facebook.4c1b11a198118002a89d.svg'
                />
              </div>
            </Card.Footer>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card className='merchant-card'>
            <Card.Body>
              <div className='merchant-icon'>
                <Card.Img src='https://supportlocal.sg/assets/img/meals.svg' />
                <span>Chinese</span>
              </div>
              <Card.Title>Tiong Bahru Yong Toufu</Card.Title>
              <Card.Text>
                <p>
                  Tel: 85006968 <br />
                  Min. Order: $20 <br />
                  Delivers: Islandwide
                </p>
                <strong>Delivery Info</strong>
                <p>
                  $5, Free delivery for orders $60 and above Place your orders
                  by 11am for same day delivery by 6pm! For orders placed after
                  11am, delivery will be on next day by 6pm.
                </p>
              </Card.Text>
              <Button variant='primary'>Go somewhere</Button>
            </Card.Body>
            <Card.Footer>
              <div className='merchant-menu'>
                <a href='#'>View Menu</a>
              </div>
              <div className='merchant-actions'>
                Order via
                <img
                  alt='facebook'
                  src='https://supportlocal.sg/whatsapp.127292b1dcabc8e15879.svg'
                />
                <img
                  alt='facebook'
                  src='https://supportlocal.sg/facebook.4c1b11a198118002a89d.svg'
                />
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
