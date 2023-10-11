import '../styles.css';
import 'leaflet/dist/leaflet.css';
import icons from '../images/pin.png';
import { Icon } from 'leaflet'
import { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { getUserLocation } from '../utils/utils'
import { dataAtom } from '../utils/recoilStore';
import { useRecoilValue } from 'recoil';

export default function InteractiveMapContainer() {
  const data = useRecoilValue(dataAtom);
  const [position, setPosition] = useState([34.05223, -118.24368]);
  const mapRef = useRef(null);
  useEffect(() => {
    if (data.location.lat !== '' && data.location.lng !== '') {
      const newCoordinates = [data.location.lat, data.location.lng];
      setPosition([data.location.lat, data.location.lng]); 
      flyToCoordinates(newCoordinates);
      return 
    }
    getUserLocation().then((coordinates) => {
      const userCoordinates = [coordinates.latitude, coordinates.longitude];
      setPosition(userCoordinates);
      flyToCoordinates(userCoordinates);
    })
  }, [data.location.lat, data.location.lng]);

  const customIcon = new Icon({
    iconUrl: icons,
    size: [38, 38]
  })

  const flyToCoordinates = (coordinates) => {
    if (mapRef.current) {
      mapRef.current.flyTo(coordinates, 13, { duration: 1 }); 
    }
  };
  return (
    <>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false} ref={mapRef}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={position} icon={customIcon}></Marker>
      </MapContainer>
    </>
  )
}
