import '../styles.css';
import { getData } from '../utils/utils';
import { dataAtom } from '../utils/recoilStore';
import { useRecoilValue } from 'recoil';

export default function AbsoluteContainer() {
    const data = useRecoilValue(dataAtom);
    const location = `${data.location.city}, ${data.location.region}`
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
                    <h3 className='info'>{data.ip || '---'}</h3>
                </div>
                <button>|</button>
                <div className='infoContainer'>
                    <h3 className='title'>LOCATION</h3>
                    <h3 className='info'>{location || '---'}</h3>
                </div>
                <button>|</button>
                <div className='infoContainer'>
                    <h3 className='title'>TIMEZONE</h3>
                    <h3 className='info'>{data.location.timezone || '---'}</h3>
                </div>
                <button>|</button>
                <div className='infoContainer'>
                    <h3 className='title'>ISP</h3>
                    <h3 className='info'>{data.isp || '---'}</h3>
                </div>
            </div>
        </div>
    )
}
