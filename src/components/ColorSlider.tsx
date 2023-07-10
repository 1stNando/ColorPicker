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
  }

  // code
  return <div></div>
}
