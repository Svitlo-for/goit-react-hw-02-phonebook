import { Component } from 'react';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const contactData = {
      ...this.state,
    };

    this.props.handleAddContacts(contactData);

    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="wrapperPhonebook">
        <label>
          Name
          <input
            onChange={this.handleInputChange}
            value={this.state.name}
            type="text"
            name="name"
            required
          />
        </label>
        <label>
          Number
          <input
            onChange={this.handleInputChange}
            value={this.state.number}
            type="tel"
            name="number"
            required
          />
        </label>
        <button type="submit" className="btn">
          Add contact
        </button>
      </form>
    );
  }
}
