
import { useState } from 'react';
import gitlogo from '../assets/githublogo.png'
import Button from '../components/Button';
import Input from '../components/Input';
import ItemRepo from '../components/ItemRepo';
import {api} from '../services/api' 

import {Container} from './styles'


function App() {

 const [ currentRepo, setCurrentRepo] = useState(''); 
 const [respos,setRepos] = useState([]);
 
 const handleSearchRepo = async () => {

   const {data} =  await api.get(`repos/${currentRepo}`)

   if(data.id) {
    setRepos(prev => [...prev, data]);
    setCurrentRepo("")
    return 
   }

   alert('Repositório não encontrado')
  
  }

  return (
    <Container>
      <img src={gitlogo} width={72} height={72} alt='imagem do logo do github'/>
      <Input value = {currentRepo} onChange={(e)=> setCurrentRepo(e.target.value)}/>
      <Button onClick={handleSearchRepo}/>
      {respos.map(repo => <ItemRepo repo ={repo}/>)} 
    </Container>
  );
}

export default App;
