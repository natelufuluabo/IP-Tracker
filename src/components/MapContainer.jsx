import '../styles.css';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { getUserLocation } from '../utils/utils'
import { positionAtom } from '../utils/recoilStore';
import { useRecoilValue } from 'recoil';

export default function InteractiveMapContainer() {
  const { lat, long } = useRecoilValue(positionAtom);
  const position = [lat, long];
  const userPos = getUserLocation();
  return (
    <>
      <MapContainer center={position || [userPos.latitude, userPos.longitude]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={position || [userPos.latitude, userPos.longitude]}></Marker>
      </MapContainer>
    </>
  )
}
