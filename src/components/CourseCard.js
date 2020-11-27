import { useHistory } from "react-router-dom";

import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

export default function CourseCard({info}) {
  const history = useHistory();

  return (
    <Card>
      <CardTitle tag="h5">{info.title}</CardTitle>
      <CardImg top width="100%" src={info.imagePath} alt="Card image cap" />
      <CardBody>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>Price: {info.price.normal}</CardText>
          <CardText>Duration: {info.duration}</CardText>
          <CardText>Dates: {info.dates.start_date} - {info.dates.end_date}</CardText>
          {/* <CardText>{info.description}</CardText> */}
          <Button color="primary" onClick={e => {history.push(`/view/${info.id}`)}}>View</Button>
        </CardBody>
    </Card>
  );
}