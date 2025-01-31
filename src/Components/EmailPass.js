import React, { useState } from 'react';
import { FORM_STEP } from '../constant';

export default function EmailPass({ setFormStep }) {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleClick = () => {
        setError(false);

        if (!formData.password.trim()) {
            setError(true);
            return;
        }
        setFormStep('OTP');
    };

    const handleBackClick = () => {
        setFormStep(FORM_STEP.BASIC_DETAILS);
    };

    return (
        <div className="container">
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
            <div className="input-group">
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="***********"
                    value={formData.password}
                    onChange={handleChange}
                />
            </div>
            {error && <div className="error">Please enter your password.</div>}
            <div className="button-group">
                <button className="back-btn" onClick={handleBackClick}>Back</button>
                <button className="btn" onClick={handleClick}>Continue</button>
            </div>
        </div>
    );
}
