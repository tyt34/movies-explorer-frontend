import React from 'react'
import './CheckBox.css'

function CheckBox(props) {
  const nowUrl = window.location.href.split('/')

  function handleCheck(e) {
    if (nowUrl[nowUrl.length-1] === 'saved-movies') { // saved-movies
      props.setCheckSaved(!props.checkSaved)
    } else { ////////////////////////////////////////// movies
      props.setCheck(!props.check)
      localStorage.setItem('check', !props.check)
    }
  }

  return (
    <section
      className="check"
    >
      <input
        type="checkbox"
        className="check-checkbox"
        name="toggleSwitch"
        id="toggleSwitch"
        checked={props.check}
        onChange={handleCheck}
      />
        <label
          className="check-label"
          htmlFor="toggleSwitch"
        >
          <span
            className="check-inner"
          >
          </span>
          <span
            className="check-switch">
          </span>
        </label>
    </section>
  )
}

export default CheckBox
