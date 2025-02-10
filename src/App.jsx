import React, { useState, useEffect } from 'react';
import { fetchUsers, createUser, updateUser, deleteUser } from './services/api';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import ErrorMessage from './components/ErrorMessage';
import styles from './styles/App.module.css';

function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const data = await fetchUsers();
      setUsers(data);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSave = async (userData) => {
    try {
      if (userData.id) {
        await updateUser(userData);
        setUsers(users.map(u => u.id === userData.id ? userData : u));
      } else {
        const newUser = await createUser(userData);
        setUsers([...users, { ...newUser, id: users.length + 1 }]);
      }
      setEditingUser(null);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      setUsers(users.filter(u => u.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={styles.app}>
      {error && <ErrorMessage error={error} onClose={() => setError(null)} />}
      {editingUser !== null ? (
        <UserForm
          user={editingUser}
          onSave={handleSave}
          onCancel={() => setEditingUser(null)}
        />
      ) : (
        <UserList
          users={users}
          onDelete={handleDelete}
          /* Pass a function that SETS editingUser */
          onEdit={setEditingUser}
        />
      )}
    </div>
  );
}

export default App;
