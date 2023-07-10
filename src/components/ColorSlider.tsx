import React, { useState } from 'react'

export function Slider() {
  // code
  // Begin by defining a method to describe a HSL
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
  const newBackgroundColor = `hsl(${hueValue},${saturationValue},${lightnessValue})`
  const newStyle = { backgroundColor: newBackgroundColor }

  // Generate a function to randomize initial values of HSL
  function randomColor() {
    hueSetValue(Math.floor(Math.random() * 361))
    saturationSetValue(Math.floor(Math.random() * 101))
    lightnessSetValue(Math.floor(Math.random() * 101))
  }

  //
  function handleHueValue(event: React.ChangeEvent<HTMLInputElement>) {
    hueSetValue(event.target.value)
    console.log(hueSetValue)
  }

  function handleSaturationValue(event: React.ChangeEvent<HTMLInputElement>) {
    saturationSetValue(event.target.value)
    console.log(saturationValue)
  }

  function handleLightnessValue(event: React.ChangeEvent<HTMLInputElement>) {
    lightnessSetValue(event.target.value)
    console.log(lightnessValue)
  }

  // code
  return (
    <div>
      <header>
        <h1>Basic HSL color picker mini project!</h1>
        <div className="box" style={newStyle}>
          <p>{newBackgroundColor}</p>
        </div>
        <h3>
          <button onClick={randomColor}>click2RANDOMize</button>
        </h3>
      </header>
      <body>
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
      </body>
    </div>
  )
}
