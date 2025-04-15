// @flow
import React from 'react';

type Props = {
  name: string,
  age: number,
  role: string,
};

function UserFlowCard({ name, age, role }: Props) {
  return (
    <div style={{ border: '1px solid teal', margin: '1rem', padding: '1rem' }}>
      <h3>Flow Component</h3>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Role: {role}</p>
    </div>
  );
}

export default UserFlowCard;
