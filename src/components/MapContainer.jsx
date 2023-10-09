import '../styles.css';
import 'leaflet/dist/leaflet.css';
import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { getUserLocation } from '../utils/utils'
import { dataAtom } from '../utils/recoilStore';
import { useRecoilValue } from 'recoil';

export default function InteractiveMapContainer() {
  const data = useRecoilValue(dataAtom);
  const [position, setPosition] = useState([34.05223, -118.24368]);
  useEffect(() => {
    if (data.location.lat !== '' && data.location.lng !== '') {
      setPosition([data.location.lat, data.location.lng]); 
      return 
    }
    getUserLocation().then((coordinates) => {
      const userCoordinates = [coordinates.latitude, coordinates.longitude];
      setPosition(userCoordinates);
    })
  }, [data.location.lat, data.location.lng])
  return (
    <>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={position}></Marker>
      </MapContainer>
    </>
  )
}
