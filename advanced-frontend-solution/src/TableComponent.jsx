import Table from 'react-bootstrap/Table';

function TableComponent(props) {
	return(
	<Table className="table table-hover">
	<tbody>
    <tr>
      <td>Type:</td>
      <td>{props.details.type}</td>
    </tr>
    <tr>
      <td>Material:</td>
      <td>{props.details.pattern}</td>
      </tr>
      <tr>
      <td>Webart:</td>
      <td>{props.details.default_weave}</td>
    </tr>
    <tr>
      <td>Gewicht:</td>
      <td>{props.details.default_weight} g/m2</td>
      </tr>
      <tr>
      <td>Finishing:</td>
      <td>{props.details.default_finish}</td>
      </tr>
  </tbody>
</Table>

);
}

export default TableComponent;
