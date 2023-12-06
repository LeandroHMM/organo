//import Colaborador from '../Colaborador';
import Colaborador from "../Colaborador";
import "./Time.css";

const Time = (props) => {
  return (

    props.colaboradores.length > 0 ? <section className="time" style={{ backgroundColor: props.corDaFrente }}>
      <h3 style={{ borderColor: props.corDoFundo }}>{props.nome}</h3>

      <div className="colaboradores">
        {props.colaboradores.map((colaborador) => 
          <Colaborador
            corDeFundo={props.corDoFundo}
            key={colaborador.nome}
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
          />
        )}
      </div>
    </section>
    : ""
  );
};

export default Time;
