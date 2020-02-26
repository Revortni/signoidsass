import React from 'react';

const Row = props => {
  let columns = [];

  if (props.header) {
    columns = props.list.map((x, i) => <th key={i}>{x}</th>);

    return (
      <thead className='table-csv__header'>
        <tr>{columns}</tr>
      </thead>
    );
  }
  columns = props.list.map((x, i) => <td key={i}>{x}</td>);

  return <tr className='table-csv__row'>{columns}</tr>;
};

const Table = ({ val }) => {
  return (
    <table className='table-csv'>
      <Row list={val} header />
      <tbody>
        <Row list={val} />
        <Row list={val} />
        <Row list={val} />
      </tbody>
    </table>
  );
};

export { Table };
