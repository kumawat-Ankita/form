import React from 'react';

export default function EmailPass({ formData, setFormData, error }) {

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
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
            {error && <div className="error">{error}</div>}

        </div>
    );
}
