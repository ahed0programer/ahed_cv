// function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition, showError);
//     } else {
//         console.log("Geolocation is not supported by this browser.");
//     }
// }

// let = loc = {latitude:null,longitude:null}

// function showPosition(position) {
//     console.log("Latitude: " + position.coords.latitude);
//     console.log("Longitude: " + position.coords.longitude);
//     loc["latitude"] = position.coords.latitude;
//     loc["longitude"] = position.coords.longitude;
  
// }

// function showError(error) {
//     switch (error.code) {
//         case error.PERMISSION_DENIED:
//             console.log("User denied the request for Geolocation.");
//             break;
//         case error.POSITION_UNAVAILABLE:
//             console.log("Location information is unavailable.");
//             break;
//         case error.TIMEOUT:
//             console.log("The request to get user location timed out.");
//             break;
//         case error.UNKNOWN_ERROR:
//             console.log("An unknown error occurred.");
//             break;
//     }
// }

// getLocation();
// console.log(loc);
// console.log(loc["latitude"]);

// fetch('https://ipinfo.io/json?token=ea96190e8bcec6')
//     .then(response => response.json())
//     .then(data => {
//         const [latitude, longitude] = data.loc.split(',');
//         console.log('Latitude 2:', latitude);
//         console.log('Longitude 2:', longitude);
//     })
//     .catch(error => {
//         console.error('Error fetching location:', error);
//     });
