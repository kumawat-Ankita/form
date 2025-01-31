import React, { useState } from 'react';
import { FORM_STEP } from '../constant';

export default function Otp({ setFormStep }) {
    const [otp, setOtp] = useState('');
    const [error, setError] = useState(false);
    const [showSuccessMsg, setShowSuccessMsg] = useState(false);

    const handleChange = (e) => setOtp(e.target.value);

    const handleSubmit = () => {
        if (!otp.trim()) {
            setError(true);
            return;
        }
        setShowSuccessMsg(true);
        setOtp('');
    };

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
            {error && <div className="error">Please enter a valid OTP.</div>}

            <div className="button-group">
                <button className="back-btn" onClick={() => setFormStep(FORM_STEP.EMAIL_PASS)}>
                    Back
                </button>
                <button className="btn" onClick={handleSubmit}>
                    Continue
                </button>
            </div>
            {showSuccessMsg && <div className="successMsg">Form Submitted Successfully!</div>}
        </div>
    );
}
