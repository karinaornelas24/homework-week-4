import React from "react";
import "./index.css";

export default function WeatherApp() {
  return (
    <div className="row">
      <div className="card">
        <div className="card-body">
          <div className="clearfix weather-temperature">
            <heading>
              <form>
                <input
                  type="text"
                  id="search-text-input"
                  placeHolder="Enter a city"
                  autoComplete="off"
                />
                <input
                  type="submit"
                  class="btn-btn-primary"
                  value="Search 🔎"
                />
              </form>
              <h1 className="city">Helsinki</h1>
              <h2 className="day">Thursday, April 8 13:50</h2>
              <p>
                19
                <a href="/" className="active">
                  °C{" "}
                </a>
                | <a href="/">°F </a>
              </p>

              <img
                src="http://openweathermap.org/img/wn/10d@2x.png"
                alt="weather-icon"
              />
              <span className="description"> Clear sky</span>
              <ul>
                <li>Wind: 8 km/h </li>
                <li> Humidity: 29%</li>
              </ul>
            </heading>
          </div>
        </div>
      </div>

      <footer>
        <a href="https://github.com/karinaornelas24/homework-week-4">
          Open-source code{" "}
        </a>
        by Ana Karina Ornelas
      </footer>
    </div>
  );
}
