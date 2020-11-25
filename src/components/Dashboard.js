import { useEffect, useState } from 'react';
import { ListGroup } from 'reactstrap';
import Motd from './Motd'
import CourseStatView from './CourseStatView'
import CoursesView from './CoursesView'
import { Spinner } from 'reactstrap';
import { COURSESTATS } from '../api';
import useCourses from '../hooks/useCourses';

export default function Dashboard() {

  
  const [courseStats, setCourseStats] = useState([]);
  const [loading, setLoading] = useState(true);

  const courses = useCourses();

  useEffect(() => {
    fetch(COURSESTATS)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(data => {
        setCourseStats(data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error)
      });

  }, [])

  const courseStatsComponents = courseStats.map(courseStat => <CourseStatView key={courseStat.id} crsst={courseStat} />);
  return (
    <div>
      <div className={loading ? 'full-page-loader' : 'hidden'}>
        <div className="d-flex justify-content-center">
          <Spinner style={{ width: '15rem', height: '15rem' }} />
        </div>
      </div>
      <div>
        <section>
          <Motd />
        </section>
        <section>
          <div className="container-fluid">
            <ListGroup horizontal flush={false} className="m-2">
              {courseStatsComponents}
            </ListGroup>
          </div>
        </section>
        <section>
          <CoursesView courses={courses} limitLatest={5}/>
        </section>
      </div>
    </div>

  );
} 