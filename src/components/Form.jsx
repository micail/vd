import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEntry } from '../store/actions/recordActions'

import './Form.scss';

const Form = ({ close }) => {
  const [customer, setCustomer] = useState({});
  const dispatch = useDispatch();

  const handleChange = (event) => {
    event.persist();
    setCustomer(() => ({ ...customer, [event.target.id]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addEntry(customer));
    /** Close modal after save */
    close();
  };

  return (
    <div className="vd-modal-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          <span>Name:</span>
          <input id="name" name="name" placeholder="Enter name" onChange={handleChange} value={customer.name || ''} required />
        </label>
        <label htmlFor="surname">
          <span>Surname:</span>
          <input id="surname" name="surname" placeholder="Enter surname" onChange={handleChange} value={customer.surname || ''} required />
        </label>
        <label htmlFor="email">
          <span>email:</span>
          <input id="email" name="email" placeholder="Enter email" onChange={handleChange} value={customer.email || ''} required type="email" />
        </label>
        <label htmlFor="phone">
          <span> Phone:</span>
          <input id="phone" name="phone" placeholder="Enter phone" onChange={handleChange} value={customer.phone || ''} required type="tel" />
        </label>
        <label htmlFor="age">
          <span> Age:</span>
          <input id="age" name="age" placeholder="Enter age" onChange={handleChange} value={customer.age || ''} required type="number" />
        </label>
        <label htmlFor="city">
          <span> City:</span>
          <input id="city" name="city" placeholder="Enter city" onChange={handleChange} value={customer.city || ''} required />
        </label>
        <input className="button" type="submit" value="Save" />
      </form>
    </div>
  );
};

export default Form;
