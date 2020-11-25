import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

export default function CourseCard(props) {
  return (
    <Card>
      <CardImg top width="100%" src={props.info.imagePath} alt="Card image cap" />
      <CardBody>
          <CardTitle tag="h5">{props.info.title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>{props.info.description}</CardText>
          <Button color="primary">View</Button>
        </CardBody>
    </Card>
  );
}