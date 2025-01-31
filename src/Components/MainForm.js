import React, { useState } from 'react';
import './Styles/form.css';
import Basic_Details from './BasicDetails';
import Email_Pass from './EmailPass';
import Otp from './Otp';
import { FORM_STEP } from '../constant';

export default function Form() {
    const [formStep, setFormStep] = useState('BASIC_DETAILS')
    return (
        <div className="mainDiv">
            <h1>Form</h1>
            {formStep === FORM_STEP.BASIC_DETAILS && (
                <Basic_Details setFormStep={setFormStep} />
            )}

            {formStep === FORM_STEP.EMAIL_PASS && (
                <Email_Pass setFormStep={setFormStep} />
            )}

            {formStep === FORM_STEP.OTP && (
                <Otp setFormStep={setFormStep} />
            )}

        </div>
    );
}
