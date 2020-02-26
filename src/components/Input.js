import React from 'react';

const val = [
  'All projects',
  'ABBR',
  'Shortcut URL',
  'Date Created',
  'ISSN',
  'Author'
];

export const FormInput = props => {
  let { className, textarea, label, name, type, ...rest } = props;
  let style = className || '';
  let ip = '';
  switch (type) {
    case 'textarea':
      ip = <textarea {...rest} name={name} />;
      break;
    case 'select':
      let { options, ...other } = { options: val, ...rest };
      ip = (
        <select name={name} {...other}>
          {options.map((x, i) => {
            return (
              <option key={i} value={x}>
                {x}
              </option>
            );
          })}
        </select>
      );
      break;

    default:
      ip = <input name={name} {...rest} />;
  }

  return (
    <div className={['input ' + style]}>
      {label ? <label htmlFor={name}>{label}</label> : null}
      {ip}
    </div>
  );
};
