import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Importing useNavigate hook
import styles from '../../css/Login.module.css'

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const navigate = useNavigate(); // Initializing useNavigate hook

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send formData to server for login using Axios
            const response = await axios.post('http://localhost:5000/login', formData);
            console.log(response.data); // Log the response from the backend
            navigate('/profile'); // Navigate to '/profile' on successful login
        } catch (error) {
            console.error('Error logging in user:', error);
        }
    };

    return (
        <div>
            <h1 className={styles.h1Intro}>b.better</h1>
            <h4 className={styles.h4Intro}>Login below:</h4>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="username"
                    placeholder="Username..."
                    value={formData.username}
                    onChange={handleChange}
                />
                <input 
                    type="password"
                    name="password"
                    placeholder="Password..."
                    value={formData.password}
                    onChange={handleChange}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
