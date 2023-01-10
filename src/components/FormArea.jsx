import React from "react"
import InputArea from "./InputArea"

function FormArea(props) {
  return (
    <div>
      <div className={props.country}>
        <h5>{props.tempMin}</h5>
        <h5>{props.tempMax}</h5>
        <h5>{props.pressure}</h5>
      </div>
      <form onSubmit={props.handleSubmit}>
        <InputArea
          handleTextChange={props.handleTextChange}
          handleSubmit={props.handleSubmit}
          cityName={props.cityName}
        />

        <h2>{props.temp}</h2>

        <div className="description">
          <p>{props.description}</p>
          <img
            src={
              props.loading
                ? props.image
                : "https://i.gifer.com/origin/b4/b4d657e7ef262b88eb5f7ac021edda87.gif"
            }
            style={{ width: "100px", marginLeft: "7px" }}
          />
        </div>

        <div className="more-info">
          <h4>{props.feelsLike}</h4>
          <h4>{props.humidity}</h4>
        </div>
      </form>
      {/* className'i api'den almamın sebebi div'e verdiğim backgroundColor'ın default olarak gözükmesi
  (yani daha şehir aratılmadan ve tabii bu bilgiler apiden doldurulmadan ekranda oval kutucuklar görünüyor) */}
      <div className={props.country}>
        <h5>{props.visibility}</h5>
        <h5>{props.windSpeed}</h5>
        <h5>{props.windDeg}</h5>
      </div>
    </div>
  )
}

export default FormArea
