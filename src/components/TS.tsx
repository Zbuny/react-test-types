import React, { useState } from 'react';

type User = {
  name: string;
  age: number;
  role: string;
};

type Props = {
  onSubmit: (user: User) => void;
};

const UserTSForm: React.FC<Props> = ({ onSubmit }) => {
  const [user, setUser] = useState<User>({ name: '', age: 0, role: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: name === 'age' ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>TypeScript Form</h2>
      <input name="name" placeholder="Name" value={user.name} onChange={handleChange} />
      <input name="age" type="number" placeholder="Age" value={user.age} onChange={handleChange} />
      <select name="role" value={user.role} onChange={handleChange}>
        <option value="">Choose role</option>
        <option value="admin">Admin</option>
        <option value="user">User</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserTSForm;
