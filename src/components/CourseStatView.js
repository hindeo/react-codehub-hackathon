import { ListGroupItem, Badge } from 'reactstrap'
export default function CourseStatView(props) {
  return (
    <ListGroupItem className="flex-fill align-items-center"><h6>{props.crsst.title.toUpperCase()} <Badge color="secondary">{props.crsst.amount}</Badge></h6></ListGroupItem>
  );
}