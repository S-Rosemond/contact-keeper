import React, { useContext, useRef, useEffect } from 'react';
import ContactContext from './../../context/contact/contact.context';

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const { filterContact, clearFilter, filtered } = contactContext;

  const text = useRef('');

  useEffect(() => {
    if (filtered === null) text.current.value = '';
  }, []);

  const onChange = (e) => {
    text.current.value !== '' ? filterContact(e.target.value) : clearFilter();
  };

  return (
    <form>
      <input
        ref={text}
        type='text'
        id=''
        placeholder='Filter Contacts...'
        onChange={onChange}
      />
    </form>
  );
};

export default ContactFilter;
