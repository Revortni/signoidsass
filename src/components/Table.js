import React from 'react';

const Row = props => {
  let columns = [];

  if (props.header) {
    columns = props.list.map((x, i) => (
      <div key={i} className='table__column table__column--header'>
        {x}
      </div>
    ));

    return <div className='table__row table__row--header'>{columns}</div>;
  }
  columns = props.list.map((x, i) => (
    <div key={i} className='table__column'>
      {x}
    </div>
  ));

  return <div className='table__row'>{columns}</div>;
};

const Table = ({ val }) => {
  return (
    <div className='table'>
      <Row list={val} header />
      <Row list={val} />
      <Row list={val} />
      <Row list={val} />
    </div>
  );
};

export { Table };
