export default function CourseRow(props) {

  const bookable = new Date() < new Date(props.info.dates.start_date);
  return (
    <tr>
      <td><img src='/assets/icons/info-square-fill.svg' alt={props.info.title} title={props.info.description}></img></td>
      <td>{props.info.title}</td>
      <td><img src={bookable ? '/assets/icons/check.svg' : '/assets/icons/x.svg'} alt={bookable ? 'Bookable': 'Not Bookable'}></img></td>
      <td>{props.info.price.normal}</td>
      <td>{`${props.info.dates.start_date} - ${props.info.dates.end_date}`}</td>
      <td></td>
    </tr>
  );
}