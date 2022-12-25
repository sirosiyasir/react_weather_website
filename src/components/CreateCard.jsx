import React from "react"

//props sayesinde DefaultCitys'teki bilgileri aktarıyor ve Card oluşturuyorum
function Card(props) {
  return (
    <div className="default-city">
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

export default Card
