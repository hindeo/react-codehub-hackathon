import { Jumbotron, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { COURSES } from '../api';
import {useCourse, useInstructors} from '../hooks';
import { useHistory } from "react-router-dom";

export default function AddCourseView() {

  const [instructors] = useInstructors([]);
  const [course, setCourse] = useCourse();

  let history = useHistory();
  return (
    <Jumbotron>
      <Form onSubmit={e => {
            e.preventDefault();

            fetch(COURSES, {
              method: "POST",
              body: JSON.stringify(course),
              headers: {
                "Content-type": "application/json; charset=UTF-8"
              }
            })
            .then(response => response.json())
            .then(data => {
              console.log(data)
              history.goBack();
            })
            .catch(error => console.log(error));
          }}>
        <h2>Add Course</h2>
        <FormGroup>
          <Label for="courseTitle">Title</Label>
          <Input type="text" name="courseTitle" id="courseTitle" placeholder="Course title..." onChange={e => setCourse({ ...course, title: e.target.value })} />
        </FormGroup>
        <FormGroup>
          <Label for="courseDuration">Duration</Label>
          <Input type="text" name="courseDuration" id="courseDuration" placeholder="Course duration..." onChange={e => setCourse({ ...course, duration: e.target.value })} />
        </FormGroup>
        <FormGroup>
          <Label for="courseImage">Image Path</Label>
          <Input type="text" name="courseImage" id="courseImage" placeholder="Course image path..." onChange={e => setCourse({ ...course, imagePath: e.target.value })} />
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" checked={course.open} onChange={e => {
              setCourse({ ...course, open: !course.open })
            }}
            />{' '}
          Bookable
        </Label>
        </FormGroup>
        <hr />
        <h2>Instructors</h2>

        {instructors.map(instructor => (
          <FormGroup key={instructor.id} check>
            <Label check>
              <Input type="checkbox"
                value={instructor.id}
                checked={course.instructors.includes(instructor.id)}
                onChange={
                  e => {
                    const checked = e.target.checked;
                    const value = e.target.value;
                    setCourse(prevState => {
                      let newInstructors = [...prevState.instructors];
                      if (checked) {
                        newInstructors = newInstructors.concat(value);
                      } else {
                        const index = newInstructors.indexOf(value);
                        if (index > -1) {
                          newInstructors.splice(index, 1);
                        }
                      }
                      return { ...course, instructors: newInstructors };
                    });
                  }
                }
              />
              {`${instructor.name.first} ${instructor.name.last}`}
            </Label>
          </FormGroup>
        ))}

        <hr />
        <FormGroup>
          <Label for="courseDescription">Description</Label>
          <Input type="textarea" name="courseDescription" id="courseDescription" onChange={e => {
            setCourse({ ...course, description: e.target.value });
          }} />
        </FormGroup>
        <h2>Dates</h2>
        <FormGroup>
          <Label for="startDate">Start date:</Label>
          <Input type="date" name="startDate" id="startDate" placeholder="Start date..." onChange={e => {
            setCourse((prevState) => {
              const newDates = { start_date: e.target.value, end_date: prevState.dates.end_date };

              return { ...course, dates: newDates };
            });
          }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="endDate">End date:</Label>
          <Input type="date" name="endDate" id="endDate" placeholder="End date..." onChange={e => {
            setCourse((prevState) => {
              const newDates = { start_date: prevState.dates.start_date, end_date: e.target.value };

              return { ...course, dates: newDates };
            });
          }}
          />
        </FormGroup>
        <hr />
        <h2>Price</h2>
        <FormGroup>
          <Label for="priceEarly">Early bird:</Label>
          <Input type="number" min={0} step={0.01} name="priceEarly" id="priceEarly" placeholder="Early bird price..."
            onChange={e => {
              const normalBefore = course.price.normal;
              setCourse({ ...course, price: { normal: normalBefore, early_bird: e.target.value } })
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="priceNormal">Normal:</Label>
          <Input type="number" min={0} step={0.01} name="priceNormal" id="priceNormal" placeholder="Normal price..."
            onChange={e => {
              const earlyBirdBefore = course.price.early_bird;
              setCourse({ ...course, price: { normal: e.target.value, early_bird: earlyBirdBefore } })
            }}
          />
        </FormGroup>
        <hr />
        <Button color="primary" className=" float-right">Submit</Button>
      </Form>
    </Jumbotron>
  );
}