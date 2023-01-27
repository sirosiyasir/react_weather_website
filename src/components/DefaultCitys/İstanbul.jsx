// api key'i public olarak yayınlamamak için .jsx'te object haline getirdim ve .gitignore'a ekledim
import ApiKey from "../../ApiKey"
// WeatherDescription.jsx'i kullanarak backgroundImage'i hava durumuna göre değiştiriyorum
import weatherDescription from "../shared/WeatherDescription"
import { useState, useEffect } from "react"

function İzmir() {
  // API'den aldığım değerleri kullanmak için state oluşturuyorum ve state'i daha sonra api bilgileriyle değiştireceğim için object'e eşitliyorum
  const [apıInfo, setApıInfo] = useState({
    image: "",
    description: "",
    feelsLike: "",
    humidity: "",
    temp: "",
    visibility: "",
    windSpeed: "",
    windDeg: "",
    tempMin: "",
    tempMax: "",
    pressure: "",
    country: "",
    city: "",
  })

  // API key'imi "apikey" const'una kaydediyorum
  const apikey = ApiKey.apiKey

  useEffect(() => {
    const unit = "metric"
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=İstanbul&appid=${apikey}&units=${unit}`
    )
      .then((resp) => resp.json())
      .then((api) => {
        // oluşturduğum state'teki object'leri buradaki api bilgilerine eşitliyorum
        setApıInfo(() => {
          return {
            temp: "Temperature: " + api.main.temp + "°",
            image:
              "https://openweathermap.org/img/wn/" +
              api.weather[0].icon +
              "@2x.png",
            description: api.weather[0].main,
            feelsLike: "Fells like: " + api.main.feels_like,
            humidity: "Humidity: " + api.main.humidity,
            city: api.name,
          }
        })
      })
  }, [])
  return (
    <div
      style={{
        backgroundImage: `url(${weatherDescription(apıInfo.description)})`,
        backgroundSize: "cover",
      }}
      className="default-city"
    >
      <div>
        <h1>{apıInfo.city}</h1>
        <h2>{apıInfo.temp}</h2>

        <div className="description">
          <p>{apıInfo.description}</p>
          <img src={apıInfo.image} />
        </div>
        <div className="more-info">
          <h4>{apıInfo.feelsLike}</h4>
          <h4>{apıInfo.humidity}</h4>
        </div>
      </div>
    </div>
  )
}

export default İzmir
