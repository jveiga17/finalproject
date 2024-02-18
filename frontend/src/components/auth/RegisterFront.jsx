import React, { useState } from 'react';
import axios from 'axios';
import styles from '../../css/Register.module.css'

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

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
            // Send formData to server for registration using Axios
            const response = await axios.post('http://localhost:5000/register', formData);
            console.log(response.data); // Log the response from the backend

            // redrecting after successful registration
            window.location.href = '/login';
        } catch (error) {
            console.error('Error registering user:', error);
        }
    };

    return (
        <div>
            <h1 className={styles.h1Intro}>b.better</h1>
            <h4 className={styles.h4Intro}>Please register below to create your account!</h4>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="username"
                    placeholder="Username..."
                    value={formData.username}
                    onChange={handleChange}
                />
                <input 
                    type="email"
                    name="email"
                    placeholder="Email..."
                    value={formData.email}
                    onChange={handleChange}
                />
                <input 
                    type="password"
                    name="password"
                    placeholder="Password..."
                    value={formData.password}
                    onChange={handleChange}
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
