export const detectScreenSize = (setScreenWidth) => {
    // Add an event listener to track screen width changes
    const handleResize = () => {
        setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    // Remove the event listener when the component unmounts
    return () => {
        window.removeEventListener('resize', handleResize);
    };
}

export const getUserLocation = () => {
    if ('geolocation' in navigator) {
            // Get the user's current location
            navigator.geolocation.getCurrentPosition(function(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
  
            return { latitude, longitude }
        }, function(error) {
            // Handle any errors that occur while getting the location
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    console.error('User denied the request for Geolocation.');
                    break;
                case error.POSITION_UNAVAILABLE:
                    console.error('Location information is unavailable.');
                    break;
                case error.TIMEOUT:
                    console.error('The request to get user location timed out.');
                    break;
                case error.UNKNOWN_ERROR:
                    console.error('An unknown error occurred while getting the location.');
                    break;
                default:
                console.error('An error occurred while getting the location:', error);
            }
        });
    } else {
        console.error('Geolocation is not supported in this browser.');
    }
}