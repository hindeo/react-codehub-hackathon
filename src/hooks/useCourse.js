import { useState, useEffect } from 'react';
import { COURSES } from '../api';

export default function useCourse(id = null) {
  const [course, setCourse] = useState({
    title: '',
    imagePath: '',
    price: {
      normal: null,
      early_bird: null
    },
    dates: {
      start_date: '',
      end_date: '',
    },
    duration: '',
    open: false,
    instructors: [],
    description: '',
    invalids: []
  });

  function removeFromInvalids(field) {
    const newInvalids = [course.invalids];
    let idx = newInvalids.indexOf(field);
    if (idx > -1) {
      newInvalids.splice(idx, 1);
    }
    setCourse({ ...course, invalids: newInvalids });
  }

  function addToInvalids(field) {
    const newInvalids = [course.invalids];
    newInvalids.push(field);

    setCourse({ ...course, invalids: newInvalids });
  }

  const validateCourse = (course) => {
    Object.keys(course).forEach(key => {
      switch (key) {
        case 'title':
          course.title === '' ? addToInvalids('title') : removeFromInvalids('title');
          break;
        case 'imagePath':
          course.imagePath === '' ? addToInvalids('imagePath') : removeFromInvalids('imagePath');
          break;
        case 'price':
          course.price.normal === '' ? addToInvalids('imagePath') : removeFromInvalids('imagePath')
          break;
        case 'dates':
          // course.title === '' ? addToInvalids('imagePath') : removeFromInvalids('imagePath')
          break;
        case 'duration':
          course.duration === '' ? addToInvalids('duration') : removeFromInvalids('duration');
          break;
        case 'instructors':
          //course.title === '' ? addToInvalids('imagePath') : removeFromInvalids('imagePath')
          break;
        case 'description':
          course.description === '' ? addToInvalids('description') : removeFromInvalids('description');
          break;
        default:
          break;
      }
    });
    setCourse(course);
  };

  useEffect(() => {
    if (id) {
      fetch(`${COURSES}/${id}`)
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Something went wrong ...');
          }
        })
        .then(data => {
          setCourse(data);
        })
        .catch(error => {
          console.log(error)
        });
    }
  }, [id]);

  return [course, setCourse, validateCourse];
}