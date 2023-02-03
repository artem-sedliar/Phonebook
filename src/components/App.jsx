
import { Component } from 'react';
import style from './App.module.css';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import List from './List/List';

import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const json = localStorage.getItem('contacts');
    const contacts = JSON.parse(json);

    if (contacts) {
      this.setState({
        contacts,
      });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;

    if (prevState.length !== contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  saveContact = (name, number) => {
    const { contacts } = this.state;
    const newContact = { id: nanoid(), name, number };

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert(`${name} is already in contacts list!`);
    } else {
      this.setState(prevState => {
        const prevContacts = prevState.contacts;
        return {
          contacts: [...prevContacts, newContact],
        };
      });
    }
  };

  deleteContact = id => {
    const { contacts } = this.state;
    const remainigContacts = contacts.filter(contact => contact.id !== id);

    this.setState({ contacts: remainigContacts });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  render() {
    const { filter, contacts } = this.state;

    return (
      <div className={style.app}>
        <h1 className={style.mainTitle}>Phonebook</h1>
        <Form addContact={this.saveContact} />

        <h2 className={style.title}>Contacts</h2>
        <Filter filter={filter} onChange={this.handleChange} />
        {contacts.length !== 0 && (
          <List
            contacts={contacts}
            filter={filter}
            delContact={this.deleteContact}
          />
        )}
      </div>
    );
  }
}