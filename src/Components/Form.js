import React, { useState } from 'react';
import './Styles/form.css';
import Basic_Details from './Basic_Details';
import Email_Pass from './Email_Pass';
import Otp from './Otp';

export default function Form() {
    const [formStep, setFormStep] = useState('BASIC_DETAILS')
    return (
        <div className="mainDiv">
            <h1>Form</h1>
            {formStep === 'BASIC_DETAILS' && (
                <Basic_Details setFormStep={setFormStep} />
            )}


            {formStep === 'EMAIL_PASS' && (
                <Email_Pass setFormStep={setFormStep} />
            )}


            {formStep === 'OTP' && (
                <Otp setFormStep={setFormStep} />
            )}

        </div>
    );
}
