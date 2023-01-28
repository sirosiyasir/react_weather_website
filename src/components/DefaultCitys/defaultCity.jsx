import ApiKey from "../../ApiKey"
import { useState, useEffect } from "react"

function ChatGPTApıDeneme() {
  const [data, setData] = useState([])
  const apikey = ApiKey.apiKey
  const unit = "metric"
  // bir kerede birden fazla data alabilmek için Promise.all'ı kullanıyorum
  useEffect(() => {
    Promise.all([
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=İzmir&appid=${apikey}&units=${unit}`
      ),
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=Ankara&appid=${apikey}&units=${unit}`
      ),
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=İstanbul&appid=${apikey}&units=${unit}`
      ),
    ])
      .then((responses) => {
        return Promise.all(responses.map((response) => response.json()))
      })
      .then((data) => {
        setData(data)
      })
      .catch((error) => console.error(error))
  }, [apikey])

  return data
}

export default ChatGPTApıDeneme
