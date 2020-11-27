import { useState, useEffect } from 'react';
import { INSTRUCTORS } from '../api';

export default function useInstructors() {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch(INSTRUCTORS)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(data => {
        setInstructors(data);
      })
      .catch(error => {
        console.log(error)
      });
  }, []);

  return [instructors, setInstructors];
}