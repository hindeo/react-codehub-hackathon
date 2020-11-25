import { useEffect, useState } from 'react';
import { COURSES } from '../api';
export default function useCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch(COURSES)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(data => {
        setCourses(data);
      })
      .catch(error => {
        console.log(error)
      });
  }, [])
  return courses;
}