import React, { useState } from 'react'

export function Slider() {
  // code
  // Randomizing numbers at start of App.
  const [hueValue, hueSetValue] = useState<string | number>(
    Math.floor(Math.random() * 361)
  )
  const [saturationValue, saturationSetValue] = useState<string | number>(
    Math.floor(Math.random() * 101)
  )
  const [lightnessValue, lightnessSetValue] = useState<string | number>(
    Math.floor(Math.random() * 101)
  )

  // Using string interpolation and inline style React code to represent the background color
  const newBackgroundColor = `hsl(${hueValue},${saturationValue}%,${lightnessValue}%)`
  const newStyle = { backgroundColor: newBackgroundColor }

  // Randomizing for use in the "random button" clickable
  function randomColor() {
    hueSetValue(Math.floor(Math.random() * 361))
    saturationSetValue(Math.floor(Math.random() * 101))
    lightnessSetValue(Math.floor(Math.random() * 101))
  }

  // EVENT HANDLERS
  function handleHueValue(event: React.ChangeEvent<HTMLInputElement>) {
    hueSetValue(event.target.value)
    console.log(event.target.value)
  }

  function handleSaturationValue(event: React.ChangeEvent<HTMLInputElement>) {
    saturationSetValue(event.target.value)
    console.log(event.target.value)
  }

  function handleLightnessValue(event: React.ChangeEvent<HTMLInputElement>) {
    lightnessSetValue(event.target.value)
    console.log(event.target.value)
  }

  // code
  return (
    <div>
      <header>
        <h1>Basic HSL color picker mini project!</h1>
        <div className="box" style={newStyle}>
          <p>Check this color out: {newBackgroundColor}</p>
        </div>
        <h3>
          <button onClick={randomColor}>click2RANDOMize</button>
        </h3>
      </header>
      <div className="body">
        <section>
          <input
            value={hueValue}
            onChange={handleHueValue}
            type="range"
            id="Hue"
            name="Hue"
            min="0"
            max="360"
          />
          <label htmlFor="Hue"> H {hueValue}</label>
        </section>
        <section>
          <input
            value={saturationValue}
            onChange={handleSaturationValue}
            type="range"
            id="Saturation"
            name="Saturation"
            min="0%"
            max="100%"
          />
          <label htmlFor="Saturation">S {saturationValue}</label>
        </section>
        <section>
          <input
            value={lightnessValue}
            onChange={handleLightnessValue}
            type="range"
            id="Lightness"
            name="Lightness"
            min="0%"
            max="100%"
          />
          <label htmlFor="Lightness">L {lightnessValue}</label>
        </section>
      </div>
    </div>
  )
}
