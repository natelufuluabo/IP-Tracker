import './styles.css';
import { useState, useEffect } from 'react';
import AbsoluteContainer from './components/AbsoluteContainer';
import InteractiveMapContainer from './components/MapContainer';
import { detectScreenSize, getUserLocation } from './utils/utils';
import desktopBg from './images/pattern-bg-desktop.png';
import mobileBg from './images/pattern-bg-mobile.png';

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    detectScreenSize(setScreenWidth);
    getUserLocation();
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
