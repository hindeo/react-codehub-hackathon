import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

export default function InstructorCard({info}) {

  return (
    <Card>
      <CardBody>
          <CardTitle tag="h5">{info.name.first}  {info.name.last}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{info.email}</CardSubtitle>
          <CardText>Date of birth: {info.dob}</CardText>
          <CardText>LinkedIn: {info.linkedin}</CardText>
          <CardText>{info.bio}</CardText>
        </CardBody>
    </Card>
  );
}