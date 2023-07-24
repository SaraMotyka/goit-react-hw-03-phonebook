import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { nanoid } from 'nanoid';
import css from '../ContactForm/ContactForm.module.css';

export class ContactForm extends Component {
  handleFormSubmit = event => {
    event.preventDefault();

    const name = event.target.name.value;
    const number = event.target.number.value;
    const { addContact } = this.props;

    addContact({ name, number });
    event.target.reset();
  };

  render() {
    return (
      <section className={css.form}>
        <h1 className={css.form__title}>Phonebook</h1>
        <form className={css.form__container} onSubmit={this.handleFormSubmit}>
          <label className={css.form__label}>Name</label>
          <input
            type="text"
            name="name"
            className={css.form__input}
            pattern="^[a-zA-Za]+(([' \-][a-zA-Za])?[a-zA-Za]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Enter name"
          />
          <label className={css.form__label}>Number</label>
          <input
            type="tel"
            name="number"
            className={css.form__input}
            pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="Enter phone number"
          />
          <button className={css.form__btn} type="submit">
            Add contact
          </button>
        </form>
      </section>
    );
  }
}

ContactForm.propTypes = {
  number: PropTypes.string,
  name: PropTypes.string,
  addContact: PropTypes.func,
};
export default ContactForm;
