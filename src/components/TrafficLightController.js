import React, { useState } from 'react';
import TrafficLight from './TrafficLight'

function TrafficLightController(){
 
  const [lights, setLights] = useState([
    {id: 0, name: "First", color: "green"},
    {id: 1, name: "Second", color: "green"},
    {id: 2, name: "Third", color: "green" },
  ]);
  

const next = (name) => {
  const colors = ["green", "yellow", "red"]
    // Find the light we want to modify and store it in selectLight variable.  Because each light is an object, both the 
    // light object and selectLight will share the same memory location, thus when selectLight is updated, so it the light object.
    let selectLight = lights.find(item => {
        return item.name === name;
    });
    
    // Check to find the current index value of the color and increase the value by one if less then the last index number, or reset it by going to index 0.
    if (colors.indexOf(selectLight.color) < colors.length -1){
    selectLight.color = colors[colors.indexOf(selectLight.color)+1];
    } else {
        selectLight.color = colors[0];
    }
   
  //since selectLight and lights share the same memory location, by updating selectLight, lights was also updated.

  setLights([...lights])

 
}; 
  const trafficLights = lights.map((light) => {
      return(
        <div>
          <TrafficLight 
            key={light.id}
            name={light.name} 
            color={light.color} 
            cb={next}
            />
        </div>
      )}
  );


  return(
      <>
        {trafficLights}
      </>
    )
};

export default TrafficLightController;