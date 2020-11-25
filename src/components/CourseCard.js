import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

export default function CourseCard(props) {
  return (
    <Card>
      <CardTitle tag="h5">{props.info.title}</CardTitle>
      <CardImg top width="100%" src={props.info.imagePath} alt="Card image cap" />
      <CardBody>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>Price: {props.info.price.normal}</CardText>
          <CardText>Duration: {props.info.duration}</CardText>
          <CardText>Dates: {props.info.dates.start_date} - {props.info.dates.end_date}</CardText>
          {/* <CardText>{props.info.description}</CardText> */}
          <Button color="primary">View</Button>
        </CardBody>
    </Card>
  );
}