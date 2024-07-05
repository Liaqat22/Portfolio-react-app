import React from 'react';
import Header from './Header';
import Footer from './Footer';
import bgvideo from '../media/bgvedeo2.mp4';
// import './Layout.css';

function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <main className="main-content">
        <div className="video-container">
          <video className="background-video" src={bgvideo} loop autoPlay muted />
        </div>
        <div className="content"style={{minHeight:"90vh"}}>
          {children}
        </div>
      <Footer />
      </main>
    </div>
  );
}

export default Layout;
