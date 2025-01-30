import React, { useState } from 'react';

export default function Basic_Details({ setFormStep }) {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
    });
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleClick = (e) => {
        e.preventDefault();
        setError(false);

        if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.includes('@')) {
            setError(true);
            return;
        }

        setFormStep('EMAIL_PASS');
    };

    return (
        <div className="container">
            <div className="input-group">
                <label htmlFor="firstName">First Name:</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                />
            </div>
            <div className="input-group">
                <label htmlFor="lastName">Last Name:</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                />
            </div>
            <div className="input-group">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            {error && <div className="error">Please fill out all fields correctly.</div>}
            <button className="btn" onClick={handleClick}>Continue</button>
        </div>
    );
}
