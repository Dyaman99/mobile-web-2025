$(document).ready(function() {

    $('.responsive').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
          
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });

      
//     // Step 1: Request permission for geolocation and get the user's location
// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(success, error);
//   } else { 
//     console.log("Geolocation is not supported by this browser.");
//   }
// }

// // Step 2: Success function for fetching the location
// function success(position) {
//   const lat = position.coords.latitude;
//   const lon = position.coords.longitude;
  
//   console.log(`Latitude: ${lat}, Longitude: ${lon}`);  // Debug: Check coordinates
  
//   // Step 3: Fetch the city name based on latitude and longitude
//   fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2b08e572221c3ab012d30f2499cafa99
// &units=metric`)
//     .then(response => response.json())
//     .then(data => {
//       console.log("API Response:", data);  // Debug: Check API response
//       const city = data.name;  // Get city name from the API response
//       displayCityName(city);  // Call function to display the city
//     })
//     .catch(err => console.log('Error fetching location data:', err));
// }

// // Step 4: Error handling if geolocation fails
// function error(error) {
//   switch(error.code) {
//     case error.PERMISSION_DENIED:
//       console.log("User denied the request for Geolocation.");
//       break;
//     case error.POSITION_UNAVAILABLE:
//       console.log("Location information is unavailable.");
//       break;
//     case error.TIMEOUT:
//       console.log("The request to get user location timed out.");
//       break;
//     case error.UNKNOWN_ERROR:
//       console.log("An unknown error occurred.");
//       break;
//   }
// }

// // Step 5: Display the city name if screen width is larger than 1200px
// function displayCityName(city) {
//   console.log(`City: ${city}`);  // Debug: Ensure city is fetched
//   if (window.innerWidth > 1200) {
//     const cityNameElement = document.getElementById("city-name");
//     if (cityNameElement) {
//       cityNameElement.textContent = city;  // Set the city name in the span
//     } else {
//       console.log("City name element not found!");  // Debug: Check if the element exists
//     }
//   }
// }

// // Call the function to get the location when the page loads
// window.onload = getLocation;
    
  });