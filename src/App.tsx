import React, { useState } from 'react';
import UserTSForm from './components/TS';
import UserFlowCard from './components/Flow';
import UserPropTypesCard from './components/PropTypes';

type User = {
  name: string;
  age: number;
  role: string;
};

function App() {
  const [user, setUser] = useState<User | null>(null);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>PropTypes, Flow, and TypeScript Test</h1>
      <UserTSForm onSubmit={setUser} />
      {user && (
        <>
          <UserFlowCard {...user} />
          <UserPropTypesCard {...user} />
        </>
      )}
    </div>
  );
}

export default App;
