import React from "react"

function InputArea(props) {
  return (
    <div className="input-button">
      <input
        onChange={props.handleTextChange}
        type="text"
        placeholder={props.cityName + "..."}
      />
      <button type="submit">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  )
}

export default InputArea
