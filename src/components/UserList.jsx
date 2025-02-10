import React from 'react';
import styles from '../styles/UserList.module.css';

const UserList = ({ users, onDelete, onEdit }) => {
    const handleDeleteClick = (id) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            onDelete(id);
        }
    };

    return (
        <div className={styles.container}>
            <h1>User Management</h1>
            <button onClick={() => onEdit(null)} className={styles.addButton}>
                Add User
            </button>
            <table className={styles.userTable}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Department</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.department}</td>
                            <td>
                                <button onClick={() => onEdit(user)} className={styles.editButton}>Edit</button>
                                <button onClick={() => handleDeleteClick(user.id)} className={styles.deleteButton}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;
