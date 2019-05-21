import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Header/Header'
import Footer from './Footer/Footer'
import SearchBar from './SearchBar/SearchBar'
import RestaurantContainer from './RestaurantContainer/RestaurantContainer'
import NewRestaurantForm from './NewRestaurantForm/NewRestaurantForm'

class App extends Component {
  constructor () {
    super ()
    this.state = {
      restaurants: [{
        id: 1,
        name: "demo 1",
        type: "Vegan",
        city: "Denver"
      },
      {
        id: 2,
        name: "demo 2",
        type: "Vegetarian",
        city: "Austin"
      },
      {
        id: 3,
        name: "demo 3",
        type: "Paleo",
        city: "Denver"
      },
      {
        id: 4,
        name: "demo 4",
        type: "Vegetarian",
        city: "Seattle"
      }],
      filteredRestaurants: [],
      showNew: false
    }
  }

  filterRestaurants = (city, type) => {
    const current = [...this.state.restaurants]
    if (city !== "" && type !== "") {
      const filteredRestaurants = current.filter((restaurant) => restaurant.type === type && restaurant.city === city)
      this.setState({filteredRestaurants})
    } else if (city === "" && type !== "") {
      const filteredRestaurants = current.filter((restaurant) => restaurant.type === type)
      this.setState({filteredRestaurants})
    } else if (city !== "" && type === "") {
      const filteredRestaurants = current.filter((restaurant) => restaurant.city === city)
      this.setState({filteredRestaurants})
    }
  }

  showNewForm = () =>
  this.setState({showNew: !this.state.showNew})

  addRestaurant = (restaurant) => {
    const newRestaurant = {...restaurant, id: Date.now()}
    const restaurants = [...this.state.restaurants, newRestaurant]
    this.setState({restaurants})
  }

  deleteRestaurant = (id) => {
    const restaurants = this.state.restaurants.filter((restaurant) => restaurant.id !== id)
    const filteredRestaurants = this.state.filteredRestaurants.filter((restaurant) => restaurant.id !== id)
    this.setState({restaurants, filteredRestaurants})
  }

  render () {
    const {filteredRestaurants, restaurants} = this.state
    return (
      <React.Fragment>
        <Header />
        <SearchBar restaurants={restaurants} filterRestaurants={this.filterRestaurants}/>
        <button onClick={this.showNewForm}>Add a New Restaurant</button>
        {this.state.showNew ? <NewRestaurantForm addRestaurant={this.addRestaurant}/> : null}
        <RestaurantContainer  deleteRestaurant={this.deleteRestaurant} restaurants={filteredRestaurants}/>
        <Footer />
      </React.Fragment>
    )
  }
}

export default App;
