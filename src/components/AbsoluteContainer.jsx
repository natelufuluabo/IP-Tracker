import '../styles.css';
import { getData } from '../utils/utils';
import { ipAddressAtom, locationAtom, timezoneAtom, ispAtom } from '../utils/recoilStore';
import { useRecoilValue } from 'recoil';

export default function AbsoluteContainer() {
    const ipAddress = useRecoilValue(ipAddressAtom);
    const location = useRecoilValue(locationAtom);
    const timezone = useRecoilValue(timezoneAtom);
    const isp = useRecoilValue(ispAtom);
    const handleSubmit = () => {
        getData();
    }
    return (
        <div className="absoluteContainer">
            <h1>IP Address Tracker</h1>
            <div className="ipInputCotainer">
                <input type='text' className='ipInput' placeholder='Search for IP address ou domain' />
                <button onClick={handleSubmit}><i className="fa-solid fa-chevron-right"></i></button>
            </div>
            <div className='infosContainer'>
                <div className='infoContainer'>
                    <h3 className='title'>IP ADDRESS</h3>
                    <h3 className='info'>{ipAddress || '---'}</h3>
                </div>
                <button>|</button>
                <div className='infoContainer'>
                    <h3 className='title'>LOCATION</h3>
                    <h3 className='info'>{location || '---'}</h3>
                </div>
                <button>|</button>
                <div className='infoContainer'>
                    <h3 className='title'>TIMEZONE</h3>
                    <h3 className='info'>{timezone || '---'}</h3>
                </div>
                <button>|</button>
                <div className='infoContainer'>
                    <h3 className='title'>ISP</h3>
                    <h3 className='info'>{isp || '---'}</h3>
                </div>
            </div>
        </div>
    )
}
