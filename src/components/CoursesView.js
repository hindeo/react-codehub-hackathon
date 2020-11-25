import { CardGroup, Table } from 'reactstrap';
import CourseRow from './CourseRow';
import CourseCard from './CourseCard';

export default function CoursesView({ courses, limitLatest = null, type = "tabular" }) {
  let components;
  
  if (type === "tabular") {
    components = courses.slice(-limitLatest).map(course => <CourseRow info={course} key={course.id} />);
    return (
      <Table>
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Bookable</th>
            <th>Price</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {components}
        </tbody>
      </Table>
    );
  } else { //Type is Cards
    components = courses.slice(-limitLatest).map(course => <CourseCard info={course} key={course.id} />);
    return (
      <CardGroup>
        {components}
      </CardGroup>
    );
  }
}