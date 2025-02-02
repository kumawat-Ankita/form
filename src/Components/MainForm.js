import React, { useState } from 'react';
import './Styles/form.css';
import BasicDetails from './BasicDetails';
import EmailPass from './EmailPass';
import Otp from './Otp';
import { FORM_STEP } from '../constant';

export default function Form() {
    const [formStep, setFormStep] = useState(FORM_STEP.BASIC_DETAILS);
    const [error, setError] = useState('');
    const [showBackBtn, setShowBackBtn] = useState(true);
    const [otp, setOtp] = useState('');
    const [showSuccessMsg, setShowSuccessMsg] = useState(false);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const handleBackClick = () => {
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        });
        setError('');
        if (formStep === FORM_STEP.EMAIL_PASS) {
            setFormStep(FORM_STEP.BASIC_DETAILS);
        } else if (formStep === FORM_STEP.OTP) {
            setFormStep(FORM_STEP.EMAIL_PASS);
            setShowSuccessMsg(false);
        }
    };

    const handleClick = () => {
        setError('');
        if (formStep === FORM_STEP.BASIC_DETAILS) {
            if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.includes('@')) {
                setError('Please fill all the details.');
                return;
            }
            setFormStep(FORM_STEP.EMAIL_PASS);
        } else if (formStep === FORM_STEP.EMAIL_PASS) {
            if (!formData.password.trim()) {
                setError('Enter email and pass both.');
                return;
            }
            setFormStep(FORM_STEP.OTP);
            setError('');
        } else if (formStep === FORM_STEP.OTP) {
            if (!otp.trim()) {
                setError('Enter Otp');
                return;
            }
            setShowSuccessMsg(true);
            setOtp('');
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                password: '',
            });
        }
    };

    return (
        <div className="mainDiv">
            <h1>Form</h1>
            {formStep === FORM_STEP.BASIC_DETAILS && (
                <BasicDetails error={error} setFormData={setFormData} formData={formData} />
            )}

            {formStep === FORM_STEP.EMAIL_PASS && (
                <EmailPass formData={formData} setFormData={setFormData} setError={setError} error={error} />
            )}

            {formStep === FORM_STEP.OTP && (
                <Otp otp={otp} setOtp={setOtp} setError={setError} showSuccessMsg={showSuccessMsg} error={error} />
            )}

            <div className='button-group'>
                {showBackBtn && (formStep === FORM_STEP.EMAIL_PASS || formStep === FORM_STEP.OTP) && (
                    <button onClick={handleBackClick}>Back</button>
                )}

                <button onClick={handleClick}>Continue</button>
            </div>

        </div>
    );
}
