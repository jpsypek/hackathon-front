import React from 'react'

const Restaurant = (props) => {

  return (
    <div>
      <h3>{props.name}</h3>
      <h3>{props.type}</h3>
      <h3>{props.city}</h3>
      <button onClick={() => props.deleteRestaurant(props.id)}>Delete</button>
    </div>
  )
}
export default Restaurant
