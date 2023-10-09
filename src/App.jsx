/* eslint-disable no-unused-vars */
import './styles.css';
import { useState, useEffect } from 'react';
import AbsoluteContainer from './components/AbsoluteContainer';
import InteractiveMapContainer from './components/MapContainer';
import { detectScreenSize, getUserLocation, getDataWithDomain } from './utils/utils';
import { dataAtom } from './utils/recoilStore';
import { useRecoilState } from 'recoil';
import desktopBg from './images/pattern-bg-desktop.png';
import mobileBg from './images/pattern-bg-mobile.png';

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [data, setData] = useRecoilState(dataAtom);
  useEffect(() => {
    detectScreenSize(setScreenWidth);
    getUserLocation();
    async function fetchData() {
      const data = await getDataWithDomain();
      setData(data);
    }
    fetchData()
  }, [setData]);
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
