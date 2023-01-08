// api key'i public olarak yayınlamamak için .jsx'te object haline getirdim ve .gitignore'a ekledim
import ApiKey from "../ApiKey"
// JSX'teki değerleri yakalamak ve onları değiştirmek için useState kullanıyorum
import { useState, useEffect } from "react"
//Spinner.gif'i import ediyorum
import Spinner from "./shared/Spinner.jsx"
// WeatherDescription.jsx'i kullanarak backgroundImage'i hava durumuna göre değiştiriyorum
import weatherDescription from "./shared/WeatherDescription.jsx"

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
    }, 500); 

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
              image: "https://openweathermap.org/img/wn/" +
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
    <div style={{
        backgroundImage: `url(${weatherDescription(apıInfo.description)})`,
        backgroundSize: "cover",
      }}
      className="form-div"
    >
    {/* className'de ? : operatörü kullanıp öbür elementler'de kullanmamamın sebebii , className'in değerinin boolean olamamasıdır */}
      <div className={apıInfo.country}>
        <h5>{ apıInfo.tempMin}</h5>
        <h5>{ apıInfo.tempMax}</h5>
        <h5>{ apıInfo.pressure}</h5>
      </div>
      <form onSubmit={handleSubmit}>
        {/* burada value={cityName} kullanma nedenim , bu olmadan React'in bize uyarı vermesidir. Verilen uyarı kontrollü ve kontrolsüz girişlerle alakalıdır
      Sebebiyse, cityName'i direkt olarak onChange'la set etmemizdir halbuki önce ona bir değer vermeliyiz. React'te bunu kontrolsüz olarak algılıyor ve
      bir component'a ya hep kontrollü davran ya da hep kontrolsüz davran diye uyarıyor */}
        <div className="input-button">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder={cityName + "..."}
          />
          <button type="submit">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>

        <h2>{ apıInfo.temp}</h2>

         <div className="description">
          <p>{ apıInfo.description}</p>
          <img src={ loading ? apıInfo.image : "https://i.gifer.com/origin/b4/b4d657e7ef262b88eb5f7ac021edda87.gif"} style={{width:"100px", marginLeft:"7px", }}/>
        </div> 
      
        <div className="more-info">
          <h4>{ apıInfo.feelsLike}</h4>
          <h4>{ apıInfo.humidity}</h4>
        </div>
      </form>
      {/* className'i api'den almamın sebebi div'e verdiğim backgroundColor'ın default olarak gözükmesi
      (yani daha şehir aratılmadan ve tabii bu bilgiler apiden doldurulmadan ekranda oval kutucuklar görünüyor) */}
      <div className={apıInfo.country}>
        <h5>{ apıInfo.visibility}</h5>
        <h5>{ apıInfo.windSpeed}</h5>
        <h5>{ apıInfo.windDeg}</h5>
      </div>
    </div>
  ) : <div className="form-div" style={{height:"300px"}}>
  <form>
  <div className="input-button">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Düzce.."
            value={cityName}
          />
          <button type="submit">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>  
  </form>
  <Spinner />
  </div> 
}

export default Api
