import { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <>
        <h2>Phonebook</h2>
        <div>
          <input type="text" name="name" required />
          <button>Add contact</button>
        </div>
        <h2>Contacts</h2>
        <ul></ul>
      </>
    );
  }
}
