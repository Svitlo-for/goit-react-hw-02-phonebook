import { Component } from 'react';
import { StyledFormContainer, StyledWrapperContacts } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
// import { nanoid } from 'nanoid';

// const id = nanoid();

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  handleAddContacts = contactData => {
    const hasContactDuplicate = this.state.contacts.some(
      contact => contact.name === contactData.name
    );
    if (hasContactDuplicate) {
      alert(`Oops! Contact with name ${contactData.name} already exists`);
      return;
    }

    this.setState(prevState => {
      return {
        contacts: [contactData, ...prevState.contacts],
      };
    });
  };

  render() {
    return (
      <StyledFormContainer>
        <h1 className="title">Phonebook</h1>
        <ContactForm handleAddContacts={this.handleAddContacts} />
        <StyledWrapperContacts>
          <h2 className="title">Contacts</h2>
          <label>
            Find contacts by name
            <input type="text" name="name" required />
          </label>
        </StyledWrapperContacts>
      </StyledFormContainer>
    );
  }
}
