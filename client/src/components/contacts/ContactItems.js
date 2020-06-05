import React from 'react';
import PropTypes from 'prop-types';

const ContactItems = ({ contact }) => {
  const { id, name, email, phone, type } = contact;

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
        <button className='btn btn-dark btn-sm'>Edit</button>
        <button className='btn btn-danger btn-sm'>Delete</button>
      </p>
    </div>
  );
};

ContactItems.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItems;
