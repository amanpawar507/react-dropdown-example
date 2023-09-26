import React, { useState } from "react";
import "./App.css";

const countries = [
  {
    country: "United States",
    countryCode: "US",
    cities: ["New York", "Los Angeles", "Chicago", "Miami"]
  },
  {
    country: "United Kingdom",
    countryCode: "UK",
    cities: ["London", "Manchester", "Edinburgh", "Birmingham"]
  },
  {
    country: "Canada",
    countryCode: "CA",
    cities: ["Toronto", "Vancouver", "Montreal", "Calgary"]
  },
  {
    country: "Australia",
    countryCode: "AU",
    cities: ["Sydney", "Melbourne", "Brisbane", "Perth"]
  }
  // Add more countries and cities as needed
];

function CountryCityDropdown() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");

  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value;
    setSelectedCountry(selectedCountry);
    loadCities(selectedCountry);
  };

  const loadCities = (selectedCountry) => {
    const country = countries.find((c) => c.country === selectedCountry);

    if (country) {
      setCities(country.cities);
    } else {
      setCities([]);
    }
  };

  const handleCityChange = (event) => {
    const selectedCity = event.target.value;
    setSelectedCity(selectedCity);
  };

  return (
    <div>
      <label>Select a country:</label>
      <select value={selectedCountry} onChange={handleCountryChange}>
        <option value="">Select a country</option>
        {countries.map((country) => (
          <option key={country.country} value={country.country}>
            {country.country}
          </option>
        ))}
      </select>

      {selectedCountry && (
        <div>
          <label>Select a city:</label>
          <select value={selectedCity} onChange={handleCityChange}>
            <option value="">Select a city</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
      )}

      {selectedCountry && selectedCity && (
        <div>
          <p>Selected Country is: {selectedCountry}</p>
          <p>Selected City is: {selectedCity}</p>
        </div>
      )}
    </div>
  );
}

export default CountryCityDropdown;
