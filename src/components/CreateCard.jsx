import React, { useState } from "react"

//props sayesinde DefaultCitys'teki bilgileri aktarıyor ve Card oluşturuyorum
function Card(props) {
  // havanın durumuna göre arka plan resmi gönderiyorum
  const weatherDescription = () => {
    switch (props.description) {
      case "Clear":
        return "https://i.pinimg.com/originals/ca/f3/3b/caf33b6f1e780a09082433dbae2e9fd1.jpg"
        break
      case "Mist":
        return "https://images.unsplash.com/photo-1603794052293-650dbdeef72c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWlzdHxlbnwwfHwwfHw%3D&w=1000&q=80"
        break
      case "Clouds":
        return "https://scied.ucar.edu/sites/default/files/styles/half_width/public/2021-10/cumulus-clouds.jpg?itok=qsNXhfWh"
        break
      case "Thunderstorm":
        return "https://images.newscientist.com/wp-content/uploads/2019/03/20115708/gettyimages-673747736.jpg"
        break
      case "Rain":
        return "https://cdn.kpbs.org/dims4/default/ce33be2/2147483647/strip/true/crop/4032x2268+0+378/resize/1200x675!/quality/90/?url=http%3A%2F%2Fkpbs-brightspot.s3.amazonaws.com%2Fc2%2Fbe%2F85b3755442799f1149136e16ddb8%2Frain-allied-gardens.jpg"
        break
      case "Snow":
        return "https://media.istockphoto.com/id/1066960598/photo/winter-holiday-background-with-snow-copy-space.jpg?s=612x612&w=0&k=20&c=KjOIp2ns1988noHZXBT8DbS3fOlhd_GXSHsoO7vtAeE="
        break
      case "Drizzle":
        return "https://thumbs.dreamstime.com/b/drizzle-rainforest-drizzling-tropical-gives-cold-refresh-emotion-55108517.jpg"
        break
    }
  }

  return (
    <div
      style={{
        backgroundImage: `url(${weatherDescription()})`,
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
  return (
    <Card
      key={data.weather[0].id}
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
