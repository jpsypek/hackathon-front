import React, { Component } from 'react'

class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      city: "",
      type: ""
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
    this.props.filterRestaurants(this.state.city, this.state.type)
  }


  render () {
    return  (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            City
            <select name="city" value={this.state.city} onChange={this.handleChange}>
              <option value="">(Select a City)</option>
              <option value="Denver">Denver</option>
              <option value="Seattle">Seattle</option>
              <option value="Austin">Austin</option>
            </select>
          </label>
          <label>
            Type
            <select name="type" value={this.state.type} onChange={this.handleChange}>
              <option value="">(Select a Type)</option>
              <option value="Vegan">Vegan</option>
              <option value="Vegetarian">Vegetarian</option>
              <option value="Paleo">Paleo</option>
            </select>
          </label>
          <button type="submit">Search</button>
        </form>

      </div>
    )
  }
}
export default SearchBar
