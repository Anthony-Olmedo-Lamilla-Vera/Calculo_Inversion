import React from "react";

function CompTables(props) {
  return (
    <tbody>
      <tr>
        <td>{props.año}</td>
        <td>
          {props.porcentajeInteres} <span>%</span>
        </td>
        <td>
          {props.montoAnualAdicional} <span>$</span>
        </td>
        <td>
          {props.MontoAcumulado} <span>$</span>
        </td>
        <td>
          {props.InteresGanado} <span>$</span>
        </td>
      </tr>
    </tbody>
  );
}

export default CompTables;
