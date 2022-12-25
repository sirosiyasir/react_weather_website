import React, { useState } from "react"
import ApiKey from "../../ApiKey"
import Card from "../CreateCard"

function Izmır() {
  // api'leri fetch içerisinde yakalamak için useState kullanıyorum
  const [temperature, setTemperature] = useState("")
  const [icon, setIcon] = useState("")
  const [description, setDescription] = useState("")
  const [feelsLike, setFeelsLike] = useState("")
  const [humidity, setHumidity] = useState("")
  const [city, setCity] = useState("")
  const apikey = ApiKey.apiKey
  const unit = "metric"

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=İzmir&appid=${apikey}&units=${unit}`
  )
    .then((resp) => resp.json())
    .then((data) => {
      setTemperature("Temperature: " + data.main.temp)
      setFeelsLike("Fells like: " + data.main.feels_like)
      setHumidity("Humidity: " + data.main.humidity)
      setDescription(data.weather[0].main)
      setIcon(
        "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"
      )
      setCity(data.name)
    })

  // direk state olarak <Card />'ın içine koyamadığım için önce variable'a sabitliyorum
  let tempCard = temperature
  let iconCard = icon
  let descriptionCard = description
  let feelsLikeCard = feelsLike
  let humidityCard = humidity
  let cityCard = city

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
