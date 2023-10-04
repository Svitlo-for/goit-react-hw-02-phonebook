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

  reset = () => {
    this.setState({ name: '', number: '' });
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

    this.reset();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="wrapperPhonebook">
        <input
          className="inputForm"
          onChange={this.handleInputChange}
          value={this.state.name}
          type="text"
          name="name"
          placeholder="Name"
          required
        />
        <input
          className="inputForm"
          onChange={this.handleInputChange}
          value={this.state.number}
          type="tel"
          name="number"
          placeholder="Number"
          required
        />
        <button type="submit" className="btn">
          Add contact
        </button>
      </form>
    );
  }
}
