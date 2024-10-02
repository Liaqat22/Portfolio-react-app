import React from 'react';
import Header from './Header';
import Footer from './Footer';
import bgvideo from '../media/27725-365890983_small.mp4';
// import './Layout.css';

function Layout({ children }) {
  return (
    <div className="layout" >
      <Header />
      <main className="main-content">
        <div className="video-container">
          <video className="background-video" src={bgvideo} loop autoPlay muted />
        </div>
        <div className="content"style={{minHeight:"100vh"}}>
          {children}
        </div>
      <Footer />
      </main>
    </div>
  );
}

export default Layout;
