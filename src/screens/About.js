import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <Container>
      <Row>
        <h2 className='m-1'>They need our support!</h2>
      </Row>
      <Row>
        <p>
          The Covid-19 pandemic and the recent CB measures have threatened the
          livelihoods of many in Singapore.
        </p>
      </Row>
      <Row>
        <p>
          A few of us care for our local small businesses, especially the F&B
          industry, and decided to come together to do our part.
        </p>
      </Row>
      <Row>
        <p>
          In collab with Society Staples, we created a one-stop portal that
          consolidates and curates information about our local hawkers, making
          it easy for you to dabao your meals and groceries! Everything bao ka
          liao!
        </p>
      </Row>
      <Row>
        <p>
          This one-stop portal allows you to search and order your food and
          groceries easily. Please note that this list is a work in progress.
          While we try to curate and be as accurate as possible, it is best to
          contact the respective shop owners to clarify any doubts.
        </p>
      </Row>
      <Row>
        <p>
          If you wish to be added onto this platform,{' '}
          <Link to='/form'>fill up this form</Link>.
        </p>
      </Row>
      <Row>
        <p>
          Contact us at{' '}
          <a href='mailto:helpinglocalsg@gmail.com'>helpinglocalsg@gmail.com</a>{' '}
          if you have any enquiries or notice any discrepancies.
        </p>
      </Row>
      <Row>
        <h2 className='m-1'>Who we are</h2>
      </Row>
      <Row>
        <p>
          This team is made up of individuals who share a common purpose and
          passion to improve lives of people, through empathising and solving
          problems using design and technology.
        </p>
      </Row>
      <Row>
        <p>
          They first met one another at a hackathon n years ago. Since then,
          they have chiong through many hackathons and adventures together since
          their university and working days (oh those sleepless nights). Now, as
          they are busy with adulting, they find comfort that they could still
          do this project (without staying up too late this time), and remain
          close friends.
        </p>
      </Row>
    </Container>
  );
}
