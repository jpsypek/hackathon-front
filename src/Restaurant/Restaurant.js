import React from 'react'
import './Restaurant.css'

const Restaurant = (props) => {

  return (
    <div class='text'>
      <h3 class='blogtext'>{props.name}</h3>
      <h4 class='footertext'> Rating of {props.rating} stars!!!</h4>
      <h4 class='footertext'>{props.city}</h4>
      <p class='content'> {props.categories}</p>
      <button onClick={() => props.deleteRestaurant(props.id)}>Delete</button>
    </div>
  )
}
export default Restaurant
