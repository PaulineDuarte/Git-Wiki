
import { useState } from 'react';
import gitlogo from '../assets/githublogo.png'
import Button from '../components/Button';
import Input from '../components/Input';
import ItemRepo from '../components/ItemRepo';
import {api} from '../services/api' 

import {Container} from './styles'


function App() {

  const [currentRepo, setCurrentRepo] = useState(''); 
  const [repos,setRepos] = useState([]);
  
  const handleSearchRepo = async () => {

    const {data} =  await api.get(`repos/${currentRepo}`)
    console.log(data)

    if(data.id) {
      const isExist = repos.find(repo => repo.id === data.id)
      if (!isExist){
        setRepos(prev => [...prev, data]);
        setCurrentRepo("")
        return 
      }
    }
    alert('Repositório não encontrado')
  }

  const handleRemoveRepo = (id) => { 
    setRepos (prev => prev.filter(repo => repo.id !==id))

  }

  return (
    <Container>
      <img src={gitlogo} width={72} height={72} alt='imagem do logo do github'/>
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo}/>
      {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo ={repo}/>)} 
    </Container>
  );
}

export default App;
