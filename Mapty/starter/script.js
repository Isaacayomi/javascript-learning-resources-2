'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');
let map, mapEvent;
// Using the geolocation API (sucess fn, error fn)
if (navigator.geolocation)
  // Takes two callback functions (success and the error callback)
  navigator.geolocation.getCurrentPosition(
    // Success callback
    function (position) {
      console.log(position);
      // Getting the longitude and latitude
      // const latitude = position.coords.latitude
      // const longitude = position.coords.longitude
      const { longitude } = position.coords;
      const { latitude } = position.coords;
      console.log(latitude, longitude);
      // Getting your current location on google map
      // console.log(`https://www.google.pt/maps/@${latitude}, ${longitude}`);

      const coords = [latitude, longitude];
      // we must have a div element in our HTML with the id name of ('map') so that our map can display in that element
      map = L.map('map').setView(coords, 12);
      // console.log(map)

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      //Adding an event listener on the map, the mapEvent displays a marker on wherever we click
      map.on('click', function (mapE) {
        mapEvent = mapE;
        form.classList.remove('hidden');
        inputDistance.focus();
      });
    },

    // Error callback
    function () {
      alert('Could not get current position');
    }
  );

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Clear input fields
  inputDistance.value =
    inputDuration.value =
    inputCadence.value =
    inputElevation.value =
      '';
  // Display the marker
  // console.log(mapEvent);
  const latitude = mapEvent.latlng.lat;
  const longitude = mapEvent.latlng.lng;
  // OR
  // const { lat, lng } = mapEvent.latlng;

  L.marker([latitude, longitude])
    .addTo(map)
    .bindPopup(
      L.popup({
        maxWidth: 250, // Sets maxwidth of the marker
        minWidth: 150, // sets minwidth of the marker
        autoClose: false, // prevents the marker from closing itself
        closeOnClick: false, // prevents the marker from closing when another position is being clicked
        className: 'running-popup', // adds a custom class styling to the marker
      })
    )
    .setPopupContent('Workout') // sets the content of the marker
    .openPopup();
});

// Toggles the form 'select' type
inputType.addEventListener('change', function () {
  inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
  inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
});
