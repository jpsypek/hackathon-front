import React from 'react'
import './Restaurant.css'

const Restaurant = (props) => {

  return (
    <div class='posts'>
      <h3>Name: {props.name}</h3>
      <h4>Rating: {props.rating}</h4>
      <h4>City: {props.city}</h4>
      <p>Categories: {props.categories}</p>
      <button onClick={() => props.deleteRestaurant(props.id)}>Delete</button>
    </div>
  )
}
export default Restaurant
