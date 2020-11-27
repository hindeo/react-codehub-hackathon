import { Button } from 'reactstrap';
import { useHistory } from "react-router-dom";

export default function CourseRow(props) {
  let history = useHistory();
  return (
    <tr>
      <td><img src='/assets/icons/info-square-fill.svg' alt={props.info.title} title={props.info.title}></img></td>
      <td>{props.info.title}</td>
      <td><img src={props.info.open ? '/assets/icons/check.svg' : '/assets/icons/x.svg'} alt={props.info.open ? 'Bookable': 'Not Bookable'}></img></td>
      <td>{props.info.price.normal}</td>
      <td>{`${props.info.dates.start_date} - ${props.info.dates.end_date}`}</td>
      <td><Button color="primary" onClick={e => {history.push(`/view/${props.info.id}`)}}>View Course</Button></td>
    </tr>
  );
}