import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './assets/css/global.scss';
import { Counter } from './components/counter';
import { RepositoryList } from './components/repositoryList';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RepositoryList/>  
    </>
  )
}

export default App
