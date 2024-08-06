// pages/register.tsx
import React, { useState } from 'react';

import CompanyInformationForm from '@/components/CompanyInformation';
import PersonalInformationForm from '@/components/PersonalInformationForm';
import Link from 'next/link';


const Register: React.FC = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        standSpace: '',
        password: '',
        confirmPassword: '',
        companyName: '',
        companyEmail: '',
        companyLogo: null,
        companyWebsite: '',
        contactNumber: '',
        companyAddress: '',
        linkedin: '',
        fasciaName: '',
        projectInterest: '',
        companyOverview: ''
    });

    const nextStep = () => {
        setStep(step + 1);
    };

    const previousStep = () => {
        setStep(step - 1);
    };

    const submitForm = () => {
        // Handle form submission
        console.log(formData);
    };

    return (
        <div className='container'>

            <div className="form-card mt-5">

                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <img src="/assets/imgs/Aimlogo.png" alt="" className='company-logo' />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        {step === 1 && <PersonalInformationForm formData={formData} setFormData={setFormData} nextStep={nextStep} />}
                        {step === 2 && <CompanyInformationForm formData={formData} setFormData={setFormData} previousStep={previousStep} submitForm={submitForm} />}
                    </div>



                </div>




            </div>

        </div>
    );
};

export default Register;
