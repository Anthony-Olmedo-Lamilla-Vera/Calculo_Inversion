import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import CompTables from "./Components/CompTables";
import { useState } from "react";

function App() {
  const Estado = useSelector((state) => state);
  const [Dates, setDates] = useState(Estado);
  const [Monto, setMonto] = useState(0);
  const [MontoAdicionalMensual, setMontoAdicionalMensual] = useState(0);
  const [AñosPlazo, setAñosPlazo] = useState(0);
  const [Porcentaje, setPorcentaje] = useState(0);

  const dispatch = useDispatch();
  let recaudoanuales = [];
  let monto = Monto;
  const añosPlazo = AñosPlazo;
  const interes = Porcentaje;
  const montoadicionalmensuak = MontoAdicionalMensual * 12;
  let años = 0;
  const CalculoInv = (e) => {
    e.preventDefault();
    const detalleProceso = [];

    while (años < añosPlazo) {
      años++;
      console.log(monto);
      let recaudoanual = monto * (interes / 100);
      detalleProceso.push({
        año: años,
        interesGanadoAnual: recaudoanual,
        montoacumulado: monto,
        montoadicionalAnual: montoadicionalmensuak,
        porcentajeInteres: interes,
      });
      recaudoanuales.push(detalleProceso);
      monto =
        parseInt(monto) +
        parseInt(montoadicionalmensuak) +
        parseInt(recaudoanual);
    }
    dispatch({
      type: "@recaudo/Anual",
      payload: recaudoanuales[0],
    });

    console.log("recaudo", recaudoanuales[0]);
    console.log("Estado", Dates);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="title-header">
          <h1>Calculo de Retorno de Inversion a años plazos</h1>
        </div>
      </header>

      <section>
        <div className="form-section">
          <form action="">
            <div className="inputs-section">
              <label htmlFor="">Monto de Inversion ($)</label>
              <input
                value={Monto}
                onChange={(e) => setMonto(e.target.value)}
                type="number"
                className="input-section"
              />
            </div>
            <div className="inputs-section">
              <label htmlFor="">Plazo de Inversion (Años)</label>
              <input
                value={AñosPlazo}
                onChange={(e) => setAñosPlazo(e.target.value)}
                type="number"
                className="input-section"
              />
            </div>
            <div className="inputs-section">
              <label htmlFor="">% Interes anual </label>
              <input
                value={Porcentaje}
                onChange={(e) => setPorcentaje(e.target.value)}
                type="number"
                className="input-section"
              />
            </div>
            <div className="inputs-section">
              <label htmlFor="">Monto Adicional Mensual</label>
              <input
                value={MontoAdicionalMensual}
                onChange={(e) => setMontoAdicionalMensual(e.target.value)}
                type="number"
                className="input-section"
              />
            </div>
            <div className="button-section">
              <button onClick={CalculoInv}>
                Calcular Retorno de Inversion
              </button>
            </div>
          </form>
        </div>

        <div className="section-result">
          <h2>Resultados</h2>
          <div className="content-result">
            <table>
              <thead>
                <tr>
                  <th>Año N° </th>
                  <th>Interes (%) </th>
                  <th>Monto Adicional </th>
                  <th>Inversion Anual Acumulada</th>
                  <th>Interes Ganado (%)</th>
                </tr>
              </thead>
              {Dates.map((x) => {
                return (
                  <CompTables
                    key={x.año}
                    año={x.año}
                    porcentajeInteres={x.porcentajeInteres}
                    montoAnualAdicional={x.montoadicionalAnual}
                    MontoAcumulado={x.montoacumulado}
                    InteresGanado={x.interesGanadoAnual}
                  />
                );
              })}
            </table>
          </div>
        </div>
      </section>
      <footer>
        <div className="content-footer">
          <div className="Estadoo-footer">
            <h4 className="title-footer">Contactos</h4>
            <h5 className="telefono">Telefono</h5>

            <h5 className="correo">Correo</h5>
            <h5 className="direccion">Direccion</h5>
          </div>
          <div className="logo-footer"></div>
        </div>
      </footer>
    </div>
  );
}

export default App;
