import React, { Component } from 'react'
import './SearchBar.css'

class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      city: "",
      categories: ""
    }
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.filterRestaurants(this.state.city, this.state.categories)
  }


  render () {
    const {categories, city} = this.state
    return  (
      <div class = 'search'>
        <p class ='ptitle'><img src="https://web.archive.org/web/20090731084353if_/http://hk.geocities.com/food_linkhk/10.gif" />~ Look For a Healthy Restaurant Near You! ^_^ ~<img src="https://web.archive.org/web/20090803100009if_/http://hk.geocities.com/ndhufood/images/cute03/02.gif"/></p>
        <form onSubmit={this.handleSubmit}>
          <label>
            <p>City</p>
            <select name="city" value={city} onChange={this.handleChange}>
              <option value="">(Select a City)</option>
              <option value="Denver">Denver</option>
              <option value="Seattle">Seattle</option>
              <option value="Austin">Austin</option>
            </select>
          </label>
          <label>
            <p>Category</p>
            <select name="categories" value={categories} onChange={this.handleChange}>
              <option value="">(Select a Category)</option>
              <option value="vegan">Vegan</option>
              <option value="vegetarian">Vegetarian</option>
              <option value="gluten_free">Gluten Free</option>
              <option value="juicebars">Juicebars</option>
            </select>
          </label>
          <button type="submit">Search</button>
        </form>

      </div>
    )
  }
}
export default SearchBar
