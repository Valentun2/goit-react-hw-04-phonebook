import {  useEffect, useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';

export const App = () => {
  // state = {
  //   contacts: [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ],
  //   filter: '',
  // };

const [contacts, setContacts] = useState(calback()??[]);
    const [filter, setFilter] = useState('');

  const createContact = data => {
    const isUser = contacts.find(({ name }) => name === data.name);
    if (isUser) {
      alert(`${contacts.name} is alredy in contacts`);
      return;
    }
    const newContact = {
      ...data,
      id: nanoid(),
    };

    setContacts([...contacts, newContact]);
  };

  const contactFilter = nameUser => setFilter( nameUser);
  const filterArr = () =>{
    return contacts.filter(({ name }) =>
      name
        .toLocaleLowerCase()
        .trim()
        .includes(filter.toLocaleLowerCase().trim())
    )}

useEffect(()=>{ 
   localStorage.setItem('contacts', JSON.stringify(contacts));
  },[contacts])
// useEffect(()=>{  localStorage.setItem('contacts', JSON.stringify(contacts));},[])

  // componentDidUpdate(_, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }
  const deleteContact = id => {
    setContacts(prev => (
     prev.filter(item => item.id !== id)
    ));
  };

  // componentDidMount() {
  //   const localContacts = localStorage.getItem('contacts');
  //   if (localContacts !== null) {
  //     this.setState({ contacts: JSON.parse(localContacts) });
  //   }
  // }

  function calback(){
      const localContacts = JSON.parse(localStorage.getItem('contacts'));
      // const u = JSON.parse(localContacts)
    return  localContacts
    
  }
  console.log(calback());

    return (
      <div style={{ padding: 20 }}>
        <h1 style={{ marginBottom: 10 }}>Phonebook</h1>
        <ContactForm createContact={createContact} />

        <h2 style={{ marginBottom: 10 }}>Contacts</h2>
        <Filter contactFilter={contactFilter} />
        <ContactList arr={filterArr} deleteContact={deleteContact} />
      </div>
    );
  
    }
