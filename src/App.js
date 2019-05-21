import React, { Component } from 'react';
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
      restaurants: [],
      filteredRestaurants: [],
      showNew: false
    }
  }

  filterRestaurants = (city, categories) => {
    const current = [...this.state.restaurants]
    if (city !== "" && categories !== "") {
      const filteredRestaurants = current.filter((restaurant) => restaurant.categories.split(", ").includes(categories) && restaurant.city === city)
      this.setState({filteredRestaurants})
    } else if (city === "" && categories !== "") {
      const filteredRestaurants = current.filter((restaurant) => restaurant.categories.split(", ").includes(categories))
      this.setState({filteredRestaurants})
    } else if (city !== "" && categories === "") {
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
    const body = restaurant
    fetch('http://localhost:3000/restaurants', {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
      })
      .catch(error => (console.error(error.message)))
    }


  deleteRestaurant = (id) => {
    const restaurants = this.state.restaurants.filter((restaurant) => restaurant.id !== id)
    const filteredRestaurants = this.state.filteredRestaurants.filter((restaurant) => restaurant.id !== id)
    this.setState({restaurants, filteredRestaurants})
    const body = id
    fetch(`http://localhost:3000/restaurants/${id}`, {
      method: "DELETE",
      headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
      })
      .catch(error => (console.error(error.message)))
  }


  componentDidMount () {
    fetch('http://localhost:3000/restaurants')
      .then(response => response.json())
      .then(restaurants => this.setState({
        restaurants: restaurants,
        filteredRestaurants: restaurants}))
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
