// api key'i public olarak yayınlamamak için .jsx'te object haline getirdim ve .gitignore'a ekledim
import ApiKey from "../ApiKey"
// JSX'teki değerleri yakalamak ve onları değiştirmek için useState kullanıyorum
import { useState } from "react"

function Api() {
  // kullanıcının inputa girdiği şehri yakalamak için cityName adında state oluşturuyorum
  const [cityName, setCityName] = useState("")
  // API'den aldığım değerleri kullanmak için state'ler oluşturuyorum
  const [image, setImage] = useState("")
  const [description, setDescription] = useState("")
  const [feelsLike, setFellsLike] = useState("")
  const [humidity, setHumidity] = useState("")
  // temp state'i oluşturuyorum ve API'den gelen değeri setTemp kullanarak kaydediyorum(direkt tek bir const'un içine kaydetmememin sebebi scope'tur)
  const [temp, setTemp] = useState("")
  // API key'imi "apikey" const'una kaydediyorum
  const apikey = ApiKey.apiKey
  // kullanıcının input'a girdiği değeri yakalamak için onChange'i kullanıyorum. Oradan gelen değerle cityName useState'ini set ediyorum
  function handleTextChange(e) {
    setCityName(e.target.value)
  }

  // form gönderildikten sonra api'yi çalıştırıyorum
  function handleSubmit(e) {
    e.preventDefault()
    const unit = "metric"
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}&units=${unit}`
    )
      .then((resp) => resp.json())
      .then((api) => {
        // TR bazında oluşturduğum için önce bir doğrulama alıyorum ardından API'den gelen değerleri state'e işliyorum
        if (api.sys.country === "TR") {
          setTemp("Temperature: " + api.main.temp + "°")
          setImage(
            "https://openweathermap.org/img/wn/" +
              api.weather[0].icon +
              "@2x.png"
          )
          setDescription(api.weather[0].main)
          setFellsLike("Fells like: " + api.main.feels_like)
          setHumidity("Humidity: " + api.main.humidity)
        }
      })
  }

  return (
    <div className="form-div">
      <form onSubmit={handleSubmit}>
        {/* burada value={cityName} kullanma nedenim , bu olmadan React'in bize uyarı vermesidir. Verilen uyarı kontrollü ve kontrolsüz girişlerle alakalıdır
      Sebebiyse, cityName'i direkt olarak onChange'la set etmemizdir halbuki önce ona bir değer vermeliyiz. React'te bunu kontrolsüz olarak algılıyor ve
      bir component'a ya hep kontrollü davran ya da hep kontrolsüz davran diye uyarıyor */}
        <input
          onChange={handleTextChange}
          type="text"
          value={cityName}
          placeholder="Kars.."
        />
        <button type="submit">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
        <h2>{temp}</h2>

        <div className="description">
          <p>{description}</p>
          <img src={image} />
        </div>
        <div className="more-info">
          <h4>{feelsLike}</h4>
          <h4>{humidity}</h4>
        </div>
      </form>
    </div>
  )
}

export default Api
