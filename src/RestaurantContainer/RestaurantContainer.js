import React from 'react'
import Restaurant from '../Restaurant/Restaurant'

const RestaurantContainer = (props) => {

  const restaurantList = props.restaurants.map((restaurant) => {
    return <Restaurant key={restaurant.id} {...restaurant} deleteRestaurant={props.deleteRestaurant} />
  })
  return (
    <div>
      {restaurantList}
    </div>
  )
}
export default RestaurantContainer
