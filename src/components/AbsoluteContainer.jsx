import '../styles.css';

export default function AbsoluteContainer() {
    return (
        <div className="absoluteContainer">
            <h1>IP Address Tracker</h1>
            <div className="ipInputCotainer">
                <input type='text' className='ipInput' placeholder='Search for IP address ou domain' />
                <button><i className="fa-solid fa-chevron-right"></i></button>
            </div>
            <div className='infosContainer'>
                <div className='infoContainer'>
                    <h3 className='title'>IP ADDRESS</h3>
                    <h3 className='info'>192.212.174.101</h3>
                </div>
                <button>|</button>
                <div className='infoContainer'>
                    <h3 className='title'>LOCATION</h3>
                    <h3 className='info'>Brooklyn, NY 10001</h3>
                </div>
                <button>|</button>
                <div className='infoContainer'>
                    <h3 className='title'>TIMEZONE</h3>
                    <h3 className='info'>UTC -05:00</h3>
                </div>
                <button>|</button>
                <div className='infoContainer'>
                    <h3 className='title'>ISP</h3>
                    <h3 className='info'>SpaceX Starlink</h3>
                </div>
            </div>
        </div>
    )
}
