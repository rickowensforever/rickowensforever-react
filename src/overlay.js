// Overlay.js
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Ephemera from './ephemera';
import Garments from './garments';
import './styles.css'; // Import the external styles

const Header = () => (
  <div className="header">
    <div className="header-text">
      <a><Link to="/">rickowensforever</Link></a>
    </div>
  </div>
);

const LeftSidebar = () => (
  <div className="left-sidebar">
    <div className="left-sidebar-text">
      <a><Link to="/ephemera">ephemera</Link></a>
    </div>
    <div className="left-sidebar-text">
      <a><Link to="/garments">garments</Link></a>
    </div>
  </div>
);

const RightSidebar = () => (
  <div className="right-sidebar">
    <div className="right-element">
      <a href="https://www.instagram.com/rickowensforever/">instagram</a>
    </div>
    <div className="right-element">
      <a href="https://www.patreon.com/rickowensforever/">patreon</a>
    </div>
  </div>
);

const Footer = () => (
  <div className="footer">
    <div className="footer-text">
      <a href="mailto:info@rickowensforever.com">info@rickowensforever.com</a>
    </div>
  </div>
);

const Overlay = () => {
  const [showSidebars, setShowSidebars] = useState(true);
  const location = useLocation();

  const toggleSidebars = () => {
    setShowSidebars(!showSidebars);
  };

  useEffect(() => {
    const handleResize = () => {
      setShowSidebars(window.innerWidth >= 600);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div>
      <Header />
      <div className='button-content'>
        <CSSTransition
          in={window.innerWidth < 600}
          timeout={500}
          classNames="fade"
          unmountOnExit
        >
          <button onClick={toggleSidebars}>
            {showSidebars ? '-' : '+'}
          </button>
        </CSSTransition>
      </div>
      <div className="main-content">
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={500}
            classNames="fade"
          >
            <Routes>
              <Route path="/" element={<Header />} />
              <Route path="/ephemera" element={<Ephemera />} />
              <Route path="/garments" element={<Garments />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
        <CSSTransition
          in={showSidebars}
          timeout={500}
          classNames="fade"
          unmountOnExit
        >
          <LeftSidebar />
        </CSSTransition>
        <CSSTransition
          in={showSidebars}
          timeout={500}
          classNames="fade"
          unmountOnExit
        >
          <RightSidebar />
        </CSSTransition>
      </div>
      <Footer />
    </div>
  );
};

export default Overlay;
