import { Component } from 'react';
import { Wrapper } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Phonebook</h1>
        <Wrapper>
          <label>
            <p>Name</p>
            <input type="text" name="name" required />
          </label>
          <label>
            <p>Number</p>
            <input type="text" name="name" required />
          </label>
          <button>Add contact</button>
        </Wrapper>
        <h2>Contacts</h2>
        <ul></ul>
      </form>
    );
  }
}
