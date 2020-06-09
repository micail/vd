import React, { useState } from 'react';

import './Table.scss';

const Table = ({ entries }) => {
  const [sortedBy, setSortedBy] = useState(null);

  let sorted = [...entries];
  
  if(sortedBy !== null) {
    sorted.sort((a, b) => {
      if (a[sortedBy] < b[sortedBy]) {
        return -1;
      }
      if (a[sortedBy] > b[sortedBy]) {
        return 1;
      }
      return 0;
    });
  }
  
  return (
    <table>
      <thead>
        <tr>
          <th>Name
          <button type="button" onClick={() => setSortedBy('name')}>
            </button>
          </th>
          <th>Surname</th>
          <th>email</th>
          <th>Phone</th>
          <th>Age</th>
          <th>City
          <button type="button" onClick={() => setSortedBy('city')}>
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {sorted.map(entry => (
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