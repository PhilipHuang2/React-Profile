import './Css/App.css';
import Header from './Header'
import AboutMe from './AboutMe'
import Portfolio from './Portfolio';
import Contact from './Contact'
import Resume from './Resume';
import {useState} from 'react'
import Footer from './Footer';

function App() {
  const [activePage, setPage] = useState('aboutMe');
  const returnPage = () => {
    switch(activePage){
      case 'aboutMe':
        return <AboutMe />;
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
      default:
        return <Resume />;
    }

  }
  return (
    <div>
      <Header changePage={setPage} page={activePage}/>
      {returnPage()}
      <Footer/>
    </div>
  );
}

export default App;
