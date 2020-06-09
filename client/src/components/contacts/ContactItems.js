import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContactContext from './../../context/contact/contact.context';

const ContactItems = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent } = contactContext;

  const { id, name, email, phone, type } = contact;

  const onDelete = (id) => {
    deleteContact(id);
    clearCurrent();
  };

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>
        {name}{' '}
        <span
          style={{ float: 'right' }}
          className={
            'badge letter-spacing-half capitalize ' +
            (type === 'business' ? 'badge-dark' : 'badge-success')
          }
        >
          {type}
        </span>
      </h3>
      <ul>
        {email && (
          <li>
            <i className='fas fa-envelope-open'></i> {email}
          </li>
        )}

        {phone && (
          <li>
            <i className='fas fa-phone'></i> {phone}
          </li>
        )}
      </ul>
      <p>
        <button
          onClick={setCurrent.bind(null, contact)}
          className='btn btn-dark btn-sm'
        >
          Edit
        </button>
        <button
          onClick={onDelete.bind(null, id)}
          className='btn btn-danger btn-sm'
        >
          Delete
        </button>
      </p>
    </div>
  );
};

ContactItems.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItems;
