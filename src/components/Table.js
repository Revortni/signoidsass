import React from 'react';

const Row = props => {
  let columns = [];

  if (props.header) {
    columns = props.list.map((x, i) => (
      <th key={i} className='table__header'>
        {x}
      </th>
    ));

    return (
      <thead>
        <tr>{columns}</tr>
      </thead>
    );
  }
  columns = props.list.map((x, i) => (
    <td key={i} className='table__column'>
      {x}
    </td>
  ));

  return <tr>{columns}</tr>;
};

const Table = ({ val }) => {
  return (
    <table className='table'>
      <Row list={val} header />
      <tbody className='table__body'>
        <Row list={val} />
        <Row list={val} />
        <Row list={val} />
      </tbody>
    </table>
  );
};

export { Table };
