import React, { useState } from 'react';

import './Table.scss';

const Table = ({ entries }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>email</th>
          <th>Phone</th>
          <th>Age</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
        {entries.map(entry => (
          <tr key={entry.id}>
            <td>{entry.name}</td>
            <td>{entry.surname}</td>
            <td>{entry.email}</td>
            <td>{entry.phone}</td>
            <td>{entry.age}</td>
            <td>{entry.city}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
};

export default Table;