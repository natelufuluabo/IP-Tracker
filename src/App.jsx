/* eslint-disable no-unused-vars */
import './styles.css';
import { useState, useEffect } from 'react';
import AbsoluteContainer from './components/AbsoluteContainer';
import InteractiveMapContainer from './components/MapContainer';
import { detectScreenSize, getUserLocation, getData } from './utils/utils';
import { ipAddressAtom, locationAtom, timezoneAtom, ispAtom, positionAtom } from './utils/recoilStore';
import { useRecoilState } from 'recoil';
import desktopBg from './images/pattern-bg-desktop.png';
import mobileBg from './images/pattern-bg-mobile.png';

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [ipAddress, setIpAddress] = useRecoilState(ipAddressAtom);
  const [location, setLocation] = useRecoilState(locationAtom);
  const [timezone, setTimezone] = useRecoilState(timezoneAtom);
  const [isp, setIsp] = useRecoilState(ispAtom);
  const [position, setPosition] = useRecoilState(positionAtom);
  useEffect(() => {
    detectScreenSize(setScreenWidth);
    getUserLocation();
    async function fetchData() {
      const data = await getData();
      setIpAddress(data.ip);
      setLocation(`${data.location.city}, ${data.location.region}`);
      setTimezone(data.location.timezone);
      setIsp(data.isp);
      setPosition(
        {
          lat: data.location.lat,
          long: data.location.lng
        }
      )
    }
    fetchData()
  }, [setIpAddress, setLocation, setTimezone, setIsp, setPosition]);
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
