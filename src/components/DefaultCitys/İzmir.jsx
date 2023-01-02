import React, { useState, useEffect } from "react"
import ApiKey from "../../ApiKey"
import Card from "../CreateCard"

function Izmır() {
  // api'leri fetch içerisinde yakalamak için useState kullanıyorum
  const [apıInfo, setApıInfo] = useState({
    image: "",
    description: "",
    feelsLike: "",
    humidity: "",
    temp: "",
    city: "",
  })

  const apikey = ApiKey.apiKey
  const unit = "metric"

  useEffect(() => {
    // useEffect kullanılmadığı zaman apiye dakikada binlerce istek gönderiyor çünkü isteği herhangi bir event'e bağlamadık
    // bu yüzden de useEffect kullanmamız gerekti. (Mesela Api.jsx'te event'e bağladığımız için bu useEffect kullanmadan da isteği yakaladık)
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=İzmir&appid=${apikey}&units=${unit}`
    )
      .then((response) => response.json())
      .then((data) => {
        setApıInfo(() => {
          return {
            temp: "Temperature: " + data.main.temp + "°",
            image:
              "https://openweathermap.org/img/wn/" +
              data.weather[0].icon +
              "@2x.png",
            description: data.weather[0].main,
            feelsLike: "Fells like: " + data.main.feels_like + "°",
            humidity: "Humidity: " + data.main.humidity,
            city: data.name,
          }
        })
      })
  }, [])
  // direk state olarak <Card />'ın içine koyamadığım için önce variable'a sabitliyorum
  let tempCard = apıInfo.temp
  let iconCard = apıInfo.image
  let descriptionCard = apıInfo.description
  let feelsLikeCard = apıInfo.feelsLike
  let humidityCard = apıInfo.humidity
  let cityCard = apıInfo.city

  // return ederek yeni bir card oluşturuyorum props sayesinde de createCard.jsx'e
  // bilgi akışı yapıyorum
  return (
    <Card
      temp={tempCard}
      icon={iconCard}
      description={descriptionCard}
      feelsLike={feelsLikeCard}
      humidity={humidityCard}
      city={cityCard}
    />
  )
}

export default Izmır
