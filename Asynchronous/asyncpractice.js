const whereAmI = function (lat, lng) {
  fetch(
    `https://geocode.xyz/${lat},${lng}?geoit=json&auth=55532362827180944412x107392`
  )
    .then(resp => {
      if (!resp.ok)
        throw new Error(
          `Problem with geocoding ${err.message}, ${resp.status}`
        );
      return resp.json();
    })
    .then(data => console.log(`You are in ${data.city}, ${data.country}`))
    .catch(err => alert(`Something went wrong: ${err.message}, ${resp.status}`));
};

whereAmI(52.508, 13.381);
whereAmI(12.508, 30.381);
