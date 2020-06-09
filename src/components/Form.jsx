import React, { useState } from 'react';

import './Form.scss';

const Form = () => {
  const [customer, setCustomer] = useState({});


  const handleChange = (event) => {
    event.persist();
    setCustomer(() => ({ ...customer, [event.target.id]: event.target.value }));
  };

  const handleSubmit = (event) => {
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:
          <input id="name" name="name" placeholder="Enter name" onChange={handleChange} value={customer.name || ''} required />
        </label>
        <label htmlFor="surname">
          Surname:
          <input id="surname" name="surname" placeholder="Enter surname" onChange={handleChange} value={customer.surname || ''} required />
        </label>
        <label htmlFor="email">
          email:
          <input id="email" name="email" placeholder="Enter email" onChange={handleChange} value={customer.email || ''} required type="email" />
        </label>
        <label htmlFor="phone">
          Phone:
          <input id="phone" name="phone" placeholder="Enter phone" onChange={handleChange} value={customer.phone || ''} required type="tel" />
        </label>
        <label htmlFor="age">
          Age:
          <input id="age" name="age" placeholder="Enter age" onChange={handleChange} value={customer.age || ''} required type="number" />
        </label>
        <label htmlFor="city">
          City:
          <input id="city" name="city" placeholder="Enter city" onChange={handleChange} value={customer.city || ''} required />
        </label>
        <input type="submit" value="Save" />
      </form>
    </div>
  );
};

export default Form;
