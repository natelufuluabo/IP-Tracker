import './styles.css';
import { useState, useEffect } from 'react';
import AbsoluteContainer from './components/AbsoluteContainer';
import InteractiveMapContainer from './components/MapContainer';
import desktopBg from './images/pattern-bg-desktop.png';
import mobileBg from './images/pattern-bg-mobile.png';

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    // Add an event listener to track screen width changes
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const imgSrc = screenWidth >= 426 ? desktopBg : mobileBg;
  return (
    <div className="mainContainer">
      <div className="bgImage">
        <img src={imgSrc} />
      </div>
      <InteractiveMapContainer />
      <AbsoluteContainer />
    </div>
  )
}

export default App
