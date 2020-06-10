import React, { useContext, Fragment } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactContext from './../../context/contact/contact.context';
import ContactItems from './ContactItems';

const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filtered } = contactContext;

  if (contacts.length < 1) {
    return <h4>Please add a contact</h4>;
  }
  return (
    <Fragment>
      <TransitionGroup>
        {filtered !== null
          ? filtered.map((contact) => (
              <CSSTransition key={contact.id} timeout={500} classNames='item'>
                <ContactItems contact={contact} />
              </CSSTransition>
            ))
          : contacts.map((contact) => (
              <CSSTransition key={contact.id} timeout={500} classNames='item'>
                <ContactItems contact={contact} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </Fragment>
  );
};

export default Contacts;
