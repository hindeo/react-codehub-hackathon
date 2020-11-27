import HeaderBar from './components/HeaderBar';
import Dashboard from './components/Dashboard';
import CoursesView from './components/CoursesView';
import CourseView from './components/CourseView';
import AddCourseView from './components/AddCourseView';
import useCourses from './hooks/useCourses';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {

  const courses = useCourses();
  return (
    <Router>
      <div className="App">
        <section>
          <HeaderBar />
        </section>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route exact path="/all">
            <CoursesView courses={courses} type="cards"/>
          </Route>
          <Route exact path="/add">
            <AddCourseView />
          </Route>
          <Route exact path="/view/:courseId" component={CourseView}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
