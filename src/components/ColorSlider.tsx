import React, { useState } from 'react'

export function Slider() {
  // code
  // Begin by defining a method to describe a HSL
  const [hueValue, hueSetValue] = useState<number>(
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

  // code
  return <div></div>
}
