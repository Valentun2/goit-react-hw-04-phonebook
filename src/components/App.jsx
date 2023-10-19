import { useEffect, useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';

export const App = () => {
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')) ?? []);
  const [filter, setFilter] = useState('');

  const createContact = data => {
    
    const isUser = contacts.find(({ name }) => name === data.name);
    if (isUser) {
      alert(`${data.name} is alredy in contacts`);
      return;
    }
    const newContact = {
      ...data,
      id: nanoid(),
    };

    setContacts([...contacts, newContact]);
  };

  const contactFilter = nameUser => setFilter(nameUser);
  const filterArr = () => {
    return contacts.filter(({ name }) =>
      name
        .toLocaleLowerCase()
        .trim()
        .includes(filter.toLocaleLowerCase().trim())
    );
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const deleteContact = id => {
    setContacts(prev => prev.filter(item => item.id !== id));
  };


  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ marginBottom: 10 }}>Phonebook</h1>
      <ContactForm createContact={createContact} />

      <h2 style={{ marginBottom: 10 }}>Contacts</h2>
      <Filter contactFilter={contactFilter} />
      <ContactList arr={filterArr} deleteContact={deleteContact} />
    </div>
  );
};
