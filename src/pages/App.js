
import gitlogo from '../assets/githublogo.png'
import Input from '../components/Input';

import {Container} from './styles'

function App() {
  return (
    <Container>
      <img src={gitlogo} width={72} height={72} alt='imagem do logo do github'/>
      <Input/>
    </Container>
  );
}

export default App;
