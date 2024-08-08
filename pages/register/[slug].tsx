// pages/register.tsx
import React, { useEffect, useState } from 'react';

import CompanyInformationForm from '@/components/CompanyInformation';
import PersonalInformationForm from '@/components/PersonalInformationForm';
import Link from 'next/link';
import axios from "axios";
import eventModel from '@/sysmodel/eventModel';
import Globals from '@/modules/Globals';


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
        axios.post(`${Globals.API_URL}Account/ExhbitorSignup/${eventid}`, formData)
            .then((data: any) => {
                window.location.href = `${Globals.BASE_URL}login/${eventid}`;
            })
    };

    var eventid = window.location.pathname.replace("/register/", "");

    const [EventData, SetEventData] = useState<eventModel>();

    useEffect(() => {
        if (eventid) {
            axios.get(`${Globals.API_URL}Exhibitor/GetEvent/${eventid}`).then((r: any) => {
                const dataModel: eventModel = r.data;
                SetEventData(dataModel);
            });
        }
    }, []);

    return (
        <div className='container'>

            <div className="form-card mt-5">

                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <img src={EventData?.Logo} alt={EventData?.Name} className='company-logo' />
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
