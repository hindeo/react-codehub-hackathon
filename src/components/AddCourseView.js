import { Jumbotron, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default function AddCourseView() {
  return (
    <Jumbotron>
      <Form>
        <h2>Add Course</h2>
        <FormGroup>
          <Label for="courseTitle">Title</Label>
          <Input type="text" name="courseTitle" id="courseTitle" placeholder="Course title..." />
        </FormGroup>
        <FormGroup>
          <Label for="courseDuration">Duration</Label>
          <Input type="text" name="courseDuration" id="courseDuration" placeholder="Course duration..." />
        </FormGroup>
        <FormGroup>
          <Label for="courseImage">Image Path</Label>
          <Input type="text" name="courseImage" id="courseImage" placeholder="Course image path..." />
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
          Bookable
        </Label>
        </FormGroup>
        <hr />
        <h2>Instructors</h2>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
          John Tsevdos
        </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
          Yiannis Nikolakopoulos
        </Label>
        </FormGroup>
        <hr />
        <FormGroup>
          <Label for="courseDescription">Description</Label>
          <Input type="textarea" name="courseDescription" id="courseDescription" />
        </FormGroup>
        <h2>Dates</h2>
        <FormGroup>
          <Label for="startDate">Start date:</Label>
          <Input type="date" name="startDate" id="startDate" placeholder="Start date..." />
        </FormGroup>
        <FormGroup>
          <Label for="endDate">End date:</Label>
          <Input type="date" name="endDate" id="endDate" placeholder="End date..." />
        </FormGroup>
        <hr />
        <h2>Price</h2>
        <FormGroup>
          <Label for="priceEarly">Start date:</Label>
          <Input type="number" min={0} step={0.01} name="priceEarly" id="priceEarly" placeholder="Early bird price..." />
        </FormGroup>
        <FormGroup>
          <Label for="priceNormal">Start date:</Label>
          <Input type="number" min={0} step={0.01} name="priceNormal" id="priceNormal" placeholder="Normal price..." />
        </FormGroup>
        <hr />
        <Button color="primary" className=" float-right">Submit</Button>
      </Form>
    </Jumbotron>
  );
}