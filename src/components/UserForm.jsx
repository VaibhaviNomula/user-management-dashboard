import React, { useState, useEffect } from 'react';
import styles from '../styles/UserForm.module.css';

const UserForm = ({ user, onSave, onCancel }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        department: ''
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (user) {
            setFormData(user);
        } else {
            setFormData({ firstName: '', lastName: '', email: '', department: '' }); // Reset form
        }
        setErrors({}); 
    }, [user]);

    const validate = () => {
        let errors = {};
        if (!formData.firstName) errors.firstName = 'First Name is required';
        if (!formData.lastName) errors.lastName = 'Last Name is required';
        if (!formData.email) {
            errors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = 'Invalid email format';
        }
        if (!formData.department) errors.department = 'Department is required';
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            onSave(formData);
        }
    };

    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <h2>{user ? 'Edit User' : 'Add User'}</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        First Name:
                        <input
                            type="text"
                            value={formData.firstName}
                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        />
                        {errors.firstName && <p className={styles.error}>{errors.firstName}</p>}
                    </label>
                    <label>
                        Last Name:
                        <input
                            type="text"
                            value={formData.lastName}
                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        />
                        {errors.lastName && <p className={styles.error}>{errors.lastName}</p>}
                    </label>
                    <label>
                        Email:
                        <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                        {errors.email && <p className={styles.error}>{errors.email}</p>}
                    </label>
                    <label>
                        Department:
                        <input
                            type="text"
                            value={formData.department}
                            onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                        />
                        {errors.department && <p className={styles.error}>{errors.department}</p>}
                    </label>
                    <div className={styles.buttonGroup}>
                        <button type="submit" className={styles.saveButton}>Save</button>
                        <button type="button" onClick={onCancel} className={styles.cancelButton}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserForm;
