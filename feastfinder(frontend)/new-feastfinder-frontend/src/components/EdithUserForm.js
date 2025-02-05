import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUsers, updateUser } from '../apiservice';

const EditUserForm = ({ onSave }) => {
  const { id } = useParams();
  const [formData, setFormData] = useState({ username: '', email: '' });

  useEffect(() => {
    const getUser = async () => {
      const users = await fetchUsers();
      const user = users.find(user => user.id === parseInt(id, 10));
      if (user) {
        setFormData(user);
      }
    };
    getUser();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateUser(id, formData);
    onSave();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Username"
        required
      />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditUserForm;
