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
    return new Promise((resolve, reject) => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          function (position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            resolve({ latitude, longitude });
          },
          function (error) {
            // Handle any errors that occur while getting the location
            switch (error.code) {
              case error.PERMISSION_DENIED:
                reject('User denied the request for Geolocation.');
                break;
              case error.POSITION_UNAVAILABLE:
                reject('Location information is unavailable.');
                break;
              case error.TIMEOUT:
                reject('The request to get user location timed out.');
                break;
              case error.UNKNOWN_ERROR:
                reject('An unknown error occurred while getting the location.');
                break;
              default:
                reject('An error occurred while getting the location: ' + error.message);
            }
          }
        );
      } else {
        reject('Geolocation is not supported in this browser.');
      }
    });
  };
  

export const getData = async () => {
    const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
    try {
      const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&domain=google.com`;
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Re-throw the error to handle it at a higher level
    }
  };
  