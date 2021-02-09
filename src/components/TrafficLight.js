import React from 'react';

function TrafficLight(props){
let { id, name, color, cb } = props
// console.log(props)

  return(
    <>
      <h2>The color at {name} is <span className={color}>{color}</span> </h2>
      <button onClick={() => cb(name)}>Click</button>
    </>
  )
}

export default TrafficLight;