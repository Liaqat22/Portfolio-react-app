import React from 'react';
import Header from './Header';
import Footer from './Footer';
// import bgvideo from 'https://res.cloudinary.com/dc1vhqmg2/video/upload/v1728704204/27725-365890983_small_adcttl.mp4';
// import './Layout.css';

function Layout({ children }) {
  return (
    <div className="layout" >
      <Header />
      <main className="main-content">
        <div className="video-container">
          <video className="background-video" src="https://res.cloudinary.com/dc1vhqmg2/video/upload/v1728709256/27725-365890983_small_1_ozimn6.mp4" loop autoPlay muted />
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
