import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

// Function to simulate delay
const delay = (ms) => new Promise(res => setTimeout(res, ms));

export const fetchUsers = async () => {
    try {
        // Simulate delay to show loading state
        await delay(500);
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        throw new Error(`Failed to fetch users: ${error.message}`);
    }
};

export const createUser = async (user) => {
    try {
        // Simulate delay
        await delay(500);
        const response = await axios.post(API_URL, user);
        return response.data;
    } catch (error) {
        throw new Error(`Failed to create user: ${error.message}`);
    }
};

export const updateUser = async (user) => {
    try {
        // Simulate delay
        await delay(500);
        const response = await axios.put(`${API_URL}/${user.id}`, user);
        return response.data;
    } catch (error) {
        throw new Error(`Failed to update user: ${error.message}`);
    }
};

export const deleteUser = async (id) => {
    try {
        // Simulate delay
        await delay(500);
        await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        throw new Error(`Failed to delete user: ${error.message}`);
    }
};
