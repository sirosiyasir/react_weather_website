/* BU SAYFA ŞU ANDA ÇALIŞMIYOR(defaultCity.jsx sayfası Promise.all'da hata verdiği için) AMA DAHA 
ÖNCE defaultCity.jsx'yle BİRLİKTE KULLANARAK 3 FARKLI ŞEHRİN API BİLGİSİNİ YANSITIYORDUM */
import React, { useState } from "react"
// WeatherDescription.jsx'i kullanarak backgroundImage'i hava durumuna göre değiştiriyorum
import weatherDescription from "./shared/WeatherDescription.jsx"

//props sayesinde DefaultCitys'teki bilgileri aktarıyor ve Card oluşturuyorum
function Card(props) {
  return (
    <div
      style={{
        backgroundImage: `url(${weatherDescription(props.description)})`,
        backgroundSize: "cover",
      }}
      className="default-city"
    >
      <div>
        <h1>{props.city}</h1>
        <h2>{props.temp}</h2>

        <div className="description">
          <p>{props.description}</p>
          <img src={props.icon} />
        </div>
        <div className="more-info">
          <h4>{props.feelsLike}</h4>
          <h4>{props.humidity}</h4>
        </div>
      </div>
    </div>
  )
}

function createCard(data) {
  // burada Card'ı oluşturuyorum ve props sayesinde API'den gelen bilgilerle dolduruyorum.
  return (
    <Card
      key={data.id}
      temp={"Temperature: " + data.main.temp + "°"}
      icon={
        "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"
      }
      description={data.weather[0].main}
      feelsLike={"Fells like: " + data.main.feels_like + "°"}
      humidity={"Humidity: " + data.main.humidity}
      city={data.name}
    />
  )
}

export default createCard
