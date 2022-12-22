import ApiKey from "./ApiKey"
// JSX'teki değerleri yakalamak ve onları değiştirmek için useState kullanıyorum
import { useState } from "react"

function Api() {
  const [cityName, setCityName] = useState("")

  const apikey = ApiKey.apiKey

  // kullanıcının input'a girdiği değeri yakalamak için onChange'i kullanıyorum. Oradan gelen değerle cityName useState'ini set ediyorum
  function handleTextChange(e) {
    setCityName(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    const userInputCityName = cityName
    console.log(userInputCityName)
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}`
    )
      .then((resp) => resp.json())
      .then((api) => {
        const temp = api.main.temp
        console.log(temp)
      })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* burada value={cityName} kullanma nedenim , bu olmadan React'in bize uyarı vermesidir. Verilen uyarı kontrollü ve kontrolsüz girişlerle alakalıdır
      Sebebiyse, cityName'i direkt olarak onChange'la set etmemizdir halbuki önce ona bir değer vermeliyiz. React'te bunu kontrolsüz olarak algılıyor ve
      bir component'a ya hep kontrollü davran ya da hep kontrolsüz davran diye uyarıyor */}
        <input onChange={handleTextChange} type="text" value={cityName} />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default Api
