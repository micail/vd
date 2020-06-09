import React, { useState } from 'react';

import './Table.scss';

const Table = ({ entries }) => {
  const [sortingOption, setSortingOption] = useState(null);
  let sorted = [...entries];

  /** Ascending and Descending sorting */
  const sortingWay = key => {
    let direction = 'ascending';
    if ( sortingOption && sortingOption.key === key && sortingOption.direction === 'ascending') {
      direction = 'descending';
    }
    setSortingOption({ key, direction });
  }

  if (sortingOption !== null) {
    sorted.sort((a, b) => {
      if (a[sortingOption.key] < b[sortingOption.key]) {
        return sortingOption.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortingOption.key] > b[sortingOption.key]) {
        return sortingOption.direction === 'ascending' ? -1 : 1;
      }
      return 0;
    });
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name
          <button type="button" onClick={() => sortingWay('name')}>
            </button>
          </th>
          <th>Surname</th>
          <th>email</th>
          <th>Phone</th>
          <th>Age</th>
          <th>City
          <button type="button" onClick={() => sortingWay('city')}>
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