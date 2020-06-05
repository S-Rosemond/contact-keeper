import React, { useContext, Fragment } from 'react';
import ContactContext from './../../context/contact/contact.context';
import ContactItems from './ContactItems';

const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts } = contactContext;
  return (
    <Fragment>
      {contacts.map((contact) => (
        <ContactItems key={contact.id} contact={contact} />
      ))}
    </Fragment>
  );
};

export default Contacts;
