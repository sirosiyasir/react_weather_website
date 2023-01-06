import React, { useState, useEffect } from "react"
import ApiKey from "../../ApiKey"

function DefaultCity() {
  // url'den gelecek olan 3 adet api'yi .map'le birlikte kullanabilmek useState kullanarak için array içerisine koyuyorum
  const [apıInfo, setApıInfo] = useState([])

  const apikey = ApiKey.apiKey
  const unit = "metric"

  useEffect(() => {
    // useEffect kullanılmadığı zaman apiye dakikada binlerce istek gönderiyor çünkü isteği herhangi bir event'e bağlamadık
    // bu yüzden de useEffect kullanmamız gerekti. (Mesela Api.jsx'te event'e bağladığımız için bu useEffect kullanmadan da isteği yakaladık)
    Promise.all(
      ["İzmir", "İstanbul", "Ankara"].map((id) =>
        fetch(
          `http://api.openweathermap.org/data/2.5/weather?q=${id}&appid=${apikey}&units=${unit}`
        ).then((response) => response.json())
      )
    ).then((data) => {
      setApıInfo(() => {
        return data
      })
    })
  }, [])

  return apıInfo
}

export default DefaultCity
