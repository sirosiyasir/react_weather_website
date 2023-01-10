// api key'i public olarak yayınlamamak için .jsx'te object haline getirdim ve .gitignore'a ekledim
import ApiKey from "../ApiKey"
// JSX'teki değerleri yakalamak ve onları değiştirmek için useState kullanıyorum
import { useState, useEffect } from "react"
//Spinner.gif'i import ediyorum
import Spinner from "./shared/Spinner.jsx"
// WeatherDescription.jsx'i kullanarak backgroundImage'i hava durumuna göre değiştiriyorum
import weatherDescription from "./shared/WeatherDescription.jsx"
// Form'u ayrı bir .jsx olarak oluşturup kodu daha temiz ve okunabilir kılıyorum
import FormArea from "./FormArea"
// input kısmını ayrı bir .jsx olarak oluşturup kodu daha temiz ve okunabilir kılıyorum
import InputArea from "./InputArea"

function Api() {
  // kullanıcının inputa girdiği şehri yakalamak için cityName adında state oluşturuyorum
  const [cityName, setCityName] = useState("Düzce")
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
  })
  //Spinner'ı çalıştırmak için true ve false şeklinde yöneteceğim bir useState oluşturuyorum
  const [loading, setLoading] = useState(false)

  // API key'imi "apikey" const'una kaydediyorum
  const apikey = ApiKey.apiKey
  // kullanıcının input'a girdiği değeri yakalamak için onChange'i kullanıyorum. Oradan gelen değerle cityName useState'ini set ediyorum
  function handleTextChange(e) {
    // input'a girilen değeri state'e kaydediyoruz
    setCityName(e.target.value)
  }

  /* ----Default olarak Düzce'nin hava durumunu yansıtıyorum---- */
  useEffect(() => {
    setLoading(true)
    const unit = "metric"
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}&units=${unit}`
    )
      .then((resp) => resp.json())
      .then((api) => {
        // TR bazında oluşturduğum için önce bir doğrulama alıyorum ardından API'den gelen değerleri state'e işliyorum
        if (api.sys.country === "TR") {
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
              visibility: "Visibility: " + api.visibility,
              windSpeed: "Wind Speed: " + api.wind.speed,
              windDeg: "Wind Deg: " + api.wind.deg,
              tempMin: "Temp Min: " + api.main.temp_min,
              tempMax: "Temp Max: " + api.main.temp_max,
              pressure: "Pressure: " + api.main.pressure,
              country: api.sys.country,
            }
          })
        }
      })
  }, [])

  /* ------------------------------ */

  // form gönderildikten sonra api'yi çalıştırıyorum
  function handleSubmit(e) {
    /* setTimeout sayesinde form gönderildikten 100 milisaniye sonra loading.gif döndürülecek ve 500 milisaniye içindeyse hava durumu bilgileri.. */

    setLoading(false)
    setTimeout(() => {
      setLoading(true)
    }, 500)

    e.preventDefault()
    const unit = "metric"

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}&units=${unit}`
    )
      .then((resp) => resp.json())
      .then((api) => {
        // TR bazında oluşturduğum için önce bir doğrulama alıyorum ardından API'den gelen değerleri state'e işliyorum
        if (api.sys.country === "TR") {
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
              visibility: "Visibility: " + api.visibility,
              windSpeed: "Wind Speed: " + api.wind.speed,
              windDeg: "Wind Deg: " + api.wind.deg,
              tempMin: "Temp Min: " + api.main.temp_min,
              tempMax: "Temp Max: " + api.main.temp_max,
              pressure: "Pressure: " + api.main.pressure,
              country: api.sys.country,
            }
          })
        }
      })
  }

  /* Eğer loading state'i true'ysa hava durumu bilgileri gösterilecek , false'sa <Spinner/>(loading.gif) gösterilecek */
  return loading ? (
    <div
      style={{
        backgroundImage: `url(${weatherDescription(apıInfo.description)})`,
        backgroundSize: "cover",
      }}
      className="form-div"
    >
      <FormArea
        country={apıInfo.country}
        tempMin={apıInfo.tempMin}
        tempMax={apıInfo.tempMax}
        pressure={apıInfo.pressure}
        temp={apıInfo.temp}
        description={apıInfo.description}
        image={apıInfo.image}
        feelsLike={apıInfo.feelsLike}
        humidity={apıInfo.humidity}
        visibility={apıInfo.visibility}
        windSpeed={apıInfo.windSpeed}
        windDeg={apıInfo.windDeg}
        handleSubmit={handleSubmit}
        handleTextChange={handleTextChange}
        cityName={cityName}
        loading={loading}
      />
    </div>
  ) : (
    <div className="form-div" style={{ height: "300px" }}>
      {/* form içerisine koymamın sebebi css'de "form input{}" diye css tanımlamam */}
      <form>
        <InputArea
          handleTextChange={handleTextChange}
          handleSubmit={handleSubmit}
          cityName={cityName}
        />
      </form>
      <Spinner />
    </div>
  )
}

export default Api
