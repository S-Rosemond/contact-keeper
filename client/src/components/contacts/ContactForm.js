import React, { useState, useContext, useEffect } from 'react';
import ContactContext from './../../context/contact/contact.context';

const ContactForm = () => {
  const contactContext = useContext(ContactContext);
  const { addContact, current, clearCurrent, updateContact } = contactContext;

  const initialState = {
    name: '',
    email: '',
    phone: '',
    type: 'personal',
  };

  useEffect(() => {
    current !== null ? setContact(current) : setContact(initialState);
  }, [current]);

  const [contact, setContact] = useState(initialState);

  const { name, email, phone, type } = contact;

  const onChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    current ? updateContact(contact) : addContact(contact);

    clearCurrent();
    setContact(initialState);
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>
        {current !== null ? ' Edit Contact' : 'Add Contact'}
      </h2>
      <label htmlFor='name'>Name</label>
      <input
        id='name'
        type='text'
        placeholder='John Doe'
        name='name'
        value={name}
        onChange={onChange}
      />
      <label htmlFor='email'>Email</label>
      <input
        id='email'
        type='email'
        placeholder='Doe@email.com'
        name='email'
        value={email}
        onChange={onChange}
      />
      <div className='phone'>
        <label htmlFor='phone'>Phone</label>
        <input
          id='phone'
          type='tel'
          placeholder='111-111-1111'
          name='phone'
          value={phone}
          onChange={onChange}
        />
      </div>
      <h5>Contact Type</h5>
      <input
        type='radio'
        name='type'
        value='personal'
        checked={type === 'personal'}
        onChange={onChange}
      />{' '}
      Personal{' '}
      <input
        type='radio'
        name='type'
        value='business'
        checked={type === 'business'}
        onChange={onChange}
      />{' '}
      Business
      <div className=''>
        <input
          type='submit'
          value={current !== null ? 'Update Contact' : 'Add Contact'}
          className='btn btn-primary btn-block'
        />
      </div>
      {current && (
        <div className=''>
          <button onClick={clearAll} className='btn btn-dark btn-block'>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
