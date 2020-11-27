import { useState } from 'react'
import { Container, Row, Col, Button, CardDeck, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useCourse, useInstructors } from '../hooks';
import { COURSES } from '../api';
import InstructorCard from './InstructorCard';
import { useHistory } from "react-router-dom";

export default function CourseView({ match }) {

  const [course] = useCourse(match.params.courseId);
  const [instructors] = useInstructors();
  const [modal, setModal] = useState(false);
  let history = useHistory();

  const toggle = (answer) => {
    // if (answer) {
    //   fetch(COURSES, {
    //     method: "POST",
    //     body: JSON.stringify(course),
    //     headers: {
    //       "Content-type": "application/json; charset=UTF-8"
    //     }
    //   })
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    //     .catch(error => console.log(error));
    // };
    setModal(!modal);
  };

  const instructorCards = instructors.map(instr => <InstructorCard key={instr.id} info={instr} />)
  return (
    <div>
      <Container fluid>
        <Row lg="12">
          <Col><h2>{course.title}</h2></Col>
        </Row>
        <Row>
          <Col><img className="rounded mx-auto d-block" src={course.imagePath} alt={course.title} title={course.title} /></Col>
        </Row>
        <Row>
          <Col sm={{ size: 6, order: 2 }}><strong>Price: </strong>{course.price.normal}</Col>
          <Col className="text-right" sm={{ size: 6, order: 2 }}><strong>Duration: </strong>{course.duration}</Col>
        </Row>
        <Row>
          <Col sm={{ size: 6, order: 2 }}><strong>Bookable: <img src={course.open ? '/assets/icons/check.svg' : '/assets/icons/x.svg'} alt={course.open ? 'Bookable' : 'Not Bookable'}></img></strong> {course.open}</Col>
          <Col className="text-right" sm={{ size: 6, order: 2 }}><strong>Date:</strong> {course.dates.start_date} - {course.dates.end_date}</Col>
        </Row>
        <Row>
          <Col className="text-justify">{course.description}</Col>
        </Row>
        <Row>
          <Col><h2>Instructors</h2></Col>
        </Row>
        <Row>
          <Col>
            <CardDeck>
              {instructorCards}
            </CardDeck>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button color="primary">Edit</Button>{' '}
            <Button color="danger" onClick={e => { toggle(true) }}>Delete</Button>{' '}
          </Col>
        </Row>
      </Container>
      <Modal isOpen={modal} toggle={toggle} backdrop>
        <ModalHeader toggle={toggle}>Delete Course</ModalHeader>
        <ModalBody>
          Are you sure?
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={toggle}>Yes</Button>{' '}
          <Button color="primary" onClick={toggle}>No</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}