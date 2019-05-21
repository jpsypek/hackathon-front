import React, {Component} from 'react'

class NewRestaurantForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: "",
      type: "",
      city: ""
    }
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addRestaurant(this.state)
    this.setState({
      name: "",
      type: "",
      city: ""
    })
  }

  render () {
    const { name, type, city } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="name" value={name} placeholder="Restaurant Name" onChange={this.handleChange} />
          <select name="type" value={type} onChange={this.handleChange}>
            <option value="">(Select a Type)</option>
            <option value="Vegan">Vegan</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Paleo">Paleo</option>
          </select>
          <select name="city" value={city} onChange={this.handleChange}>
            <option value="">(Select a City)</option>
            <option value="Denver">Denver</option>
            <option value="Seattle">Seattle</option>
            <option value="Austin">Austin</option>
          </select>
        <button type="submit">Add new restaurant</button>
      </form>
    )
  }
}
export default NewRestaurantForm
