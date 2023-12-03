import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const times = [
  {
    nome: 'Programação',
    corPrimaria: '#57C278',
    corSedundaria: '#D9F7E9'
  },
  {
    nome: 'Front-End',
    corPrimaria: '#82CFFA',
    corSedundaria: '#E8F8FF'
  },
  {
    nome: 'Data Science',
    corPrimaria: '#A6D157',
    corSedundaria: '#F0F8E2'
  },
  {
    nome: 'Devops',
    corPrimaria: '#E06B69',
    corSedundaria: '#FDE7E8'
  },
  {
    nome: 'UX e Design',
    corPrimaria: '#DB6EBF',
    corSedundaria: '#FAE9F5'
  },
  {
    nome: 'Mobile',
    corPrimaria: '#FFBA05',
    corSedundaria: '#FFF5D9'
  },
  {
    nome: 'Inovação e Gestão',
    corPrimaria: '#FF8A29',
    corSedundaria: '#FFEEDF'
  }]

  const [colaboradores, setColaboradores] = useState([]);
  const aoNovoColaboradorAdicionado = (colaborador) => {
    debugger
    setColaboradores([...colaboradores, colaborador]);
  }

  console.log("colabordores >>> ", colaboradores);

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
     
      {times.map(time => <Time 
      key={time.nome} 
      nome={time.nome} 
      corDoFundo={time.corPrimaria} 
      corDaFrente={time.corSedundaria}
      colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
      
    </div>
  );
}

export default App;
