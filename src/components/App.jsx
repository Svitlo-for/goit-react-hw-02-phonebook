import { Component } from 'react';

import { StyledFormContainer, StyledWrapperContacts } from './App.styled';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactBook } from './ContactBook/ContactBook';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  // handleSubmit = contactData => {
  //   contactData.id = nanoid();
  //   this.setState(prevState => {
  //     return {
  //       contacts: [{ ...contactData }, ...prevState.contacts],
  //     };
  //   });
  // };

  handleAddContacts = (name, number) => {
    const hasContactDuplicate = this.state.contacts.some(
      contact => contact.name === name
    );
    if (hasContactDuplicate) {
      alert(`Oops! Contact with name ${name} already exists`);
      return;
    }

    const addContact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    this.setState(prevState => ({
      contacts: [{ ...addContact }, ...prevState.contacts],
    }));
  };

  onDelete = id => {
    const data = this.state.contacts.filter(contact => contact.id !== id);
    this.setState({ contacts: [...data] });
  };

  handleInputChange = event => {
    console.log('event', event);
    this.setState({ [event.target.name]: event.target.value });
  };

  filterContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  render() {
    return (
      <StyledFormContainer>
        <h1 className="title">Phonebook</h1>
        <ContactForm
          handleAddContacts={this.handleAddContacts}
          // onSubmit={this.handleSubmit}
        />
        <StyledWrapperContacts>
          <h2 className="title">Contacts</h2>
          {this.state.contacts.length !== 0 && (
            <Filter
              filter={this.state.filter}
              onChange={this.handleInputChange}
            />
          )}
          <ContactBook
            contacts={this.filterContacts()}
            onDelete={this.onDelete}
          />
        </StyledWrapperContacts>
      </StyledFormContainer>
    );
  }
}
