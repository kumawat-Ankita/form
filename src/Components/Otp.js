import React from 'react';


export default function Otp({ otp, setOtp, error, showSuccessMsg }) {
    const handleChange = (e) => setOtp(e.target.value);

    return (
        <div>
            <div className="input-group">
                <label htmlFor="otp">OTP:</label>
                <input
                    type="password"
                    id="otp"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={handleChange}
                />
            </div>
            {error && <div className="error">{error}</div>}
            {showSuccessMsg && <div className="successMsg">Form Submitted Successfully!</div>}
        </div>
    );
}
