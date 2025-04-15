import React from 'react';
import PropTypes from 'prop-types';

type Props = {
  name: string;
  age: number;
  role: string;
};

function UserPropTypesCard({ name, age, role }: Props) {
  return (
    <div style={{ border: '1px solid purple', margin: '1rem', padding: '1rem' }}>
      <h3>PropTypes Component</h3>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Role: {role}</p>
    </div>
  );
}

UserPropTypesCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  role: PropTypes.string.isRequired,
};

export default UserPropTypesCard;
