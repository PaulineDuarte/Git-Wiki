
import { useState } from 'react';
import gitlogo from '../assets/githublogo.png'
import Button from '../components/Button';
import Input from '../components/Input';
import ItemRepo from '../components/ItemRepo';

import {Container} from './styles'


function App() {

 const [respos,setRepos] = useState([]);








  return (
    <Container>
      <img src={gitlogo} width={72} height={72} alt='imagem do logo do github'/>
      <Input/>
      <Button/>
      <ItemRepo/>
    </Container>
  );
}

export default App;
