import './App.css';
import Layout from './Layout/Layout';
import { Routes, Route } from 'react-router-dom';
import { lazy,Suspense } from 'react';

const Home = lazy(() => import('./Pages/Home'));
const Portfolio = lazy(() => import('./Pages/Portfolio'));
const Contacts = lazy(() => import('./Pages/Contacts'));

function App() {
  return (
    <div>
      <Layout>
        <Suspense >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contacts />} />
          </Routes>
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;
 
