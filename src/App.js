import './App.css';
import Layout from './Layout/Layout';
import Home from './Pages/Home';
import {Routes , Route} from 'react-router-dom'
import Portfolio from './Pages/Portfolio';
import Contacts from './Pages/Contacts';

function App() {
  return (
    <div >
    <Layout>
      <Routes>
        <Route path = '/' element ={<Home/>}/>
        <Route path = '/portfolio' element ={<Portfolio/>}/>
        <Route path = '/contact' element ={<Contacts/>}/>
      </Routes>
    </Layout>
     
    </div>
  );
}

export default App;
