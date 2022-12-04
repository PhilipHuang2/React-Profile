import './Css/App.css';
import Header from './Header'
import {useState} from 'react'

function App() {
  const [activePage, setPage] = useState('aboutMe');
  const tellPage =  () => {
    console.log(activePage)
  }
  return (
    <Header changePage={setPage} page={activePage}/>

  );
}

export default App;
