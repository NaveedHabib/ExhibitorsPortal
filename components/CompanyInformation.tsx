// components/CompanyInformationForm.tsx
import Globals from '@/modules/Globals';
import React, { useRef } from 'react';
import axios from "axios";
import { TfiControlBackward } from 'react-icons/tfi';

interface Props {
    formData: any;
    setFormData: (data: any) => void;
    previousStep: () => void;
    submitForm: () => void;
}

const CompanyInformationForm: React.FC<Props> = ({ formData, setFormData, previousStep, submitForm }) => {
    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const fileUpload = (e: any) => {
        if (e.target.value) {
            var file = e.target.files[0];

            const reader = new FileReader();
            reader.onloadend = () => {

                var dataType = reader.result?.toString().substring(0, reader.result?.toString().indexOf(";")).replace("data:", "");

                var base64String = reader.result?.toString()
                    .replace('data:', '')
                    .replace(/^.+,/, '');

                var FinalImage = base64String?.toString();

                axios.post(`${Globals.API_URL}Account/UploadImage`, {
                    "ImageBase64": FinalImage,
                    "dataType": dataType
                })
                    .then((data: any) => {
                        if (data) {
                            var filename = data.data;
                            setFormData({ ...formData, [e.target.name]: filename });
                        }
                    })
            };
            reader.readAsDataURL(file);
        }
        else {
            setFormData({ ...formData, [e.target.name]: '' });
        }
    }

    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = () => {
        if (formRef.current && formRef.current.checkValidity()) {
            // Form is valid, proceed with form submission
            submitForm()
        } else {
            // Form is invalid, trigger browser's built-in validation UI
            formRef.current?.reportValidity();
        }
    };

    return (
        <div className='mt-5'>
            <form className='' ref={formRef}>
                <h5 className='mb-3'>Company Information:</h5>
                <div className="row">
                    <div className="col-lg-6 mb-3">
                        <label htmlFor="companyName" className='text-secondary'>Company Name*</label>
                        <input className='form-control' type="text" name="companyName" placeholder="Company Name*" value={formData.companyName} onChange={handleChange} required />

                    </div>
                    <div className="col-lg-6 mb-3">
                        <label htmlFor="companyEmail" className='text-secondary'>Company Email*</label>
                        <input className='form-control' type="email" name="companyEmail" placeholder="Company Email" value={formData.companyEmail} onChange={handleChange} required />

                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6 mb-3">
                        <label htmlFor="companylogo" className='text-secondary'>Company Logo*</label>
                        <input className='form-control' type="file" name="companyLogo" placeholder="Company Logo" onChange={fileUpload} accept=".png,.jpg,.jpeg" required />

                    </div>
                    <div className="col-lg-6 mb-3">
                        <label htmlFor="companyWebsite" className='text-secondary'>Company Website*</label>
                        <input className='form-control' type="text" name="companyWebsite" placeholder="Company Website" value={formData.companyWebsite} onChange={handleChange} required />

                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6 mb-3">
                        <label htmlFor="contactNumber" className='text-secondary'>Company Contact Number*</label>
                        <input className='form-control' type="text" name="contactNumber" placeholder="Company Number" value={formData.contactNumber} onChange={handleChange} required />

                    </div>
                    <div className="col-lg-6 mb-3">
                        <label htmlFor="companyAddress" className='text-secondary'>Company Address*</label>
                        <input className='form-control' type="text" name="companyAddress" placeholder="Company Address" value={formData.companyAddress} onChange={handleChange} required />

                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6 mb-3">
                        <label htmlFor="companyWebsite" className='text-secondary'>Linkedin*</label>
                        <input className='form-control' type="text" name="linkedin" placeholder="LinkedIn URL" value={formData.linkedin} onChange={handleChange} required />

                    </div>
                    <div className="col-lg-6 mb-3">
                        <label htmlFor="fasciaName" className='text-secondary'>Fascia Name*</label>
                        <input className='form-control' type="text" name="fasciaName" placeholder="Fascia Name" value={formData.fasciaName} onChange={handleChange} required />

                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mb-3">
                        <label htmlFor="projectInterest" className='text-secondary'>Project Interest*</label>
                        <input className='form-control' type="text" name="projectInterest" placeholder="Project of Interest" value={formData.projectInterest} onChange={handleChange} required />

                    </div>
                </div>

                <div className="row">
                    <div className="col-12 mb-3">
                        <label htmlFor="companyOverview" className='text-secondary'>Company Overview*</label>
                        <textarea rows={3} className='form-control' name="companyOverview" placeholder="Company Overview" value={formData.companyOverview} onChange={handleChange} required />

                    </div>
                </div>

                <div className="row">
                    <div className="col-12 mb-3 d-flex justify-content-between align-items-center">
                        <button type="button" onClick={previousStep} className='d-flex gap-2 align-items-center bg-white'>
                            <TfiControlBackward />
                            <span>Previous</span></button>
                        <button type="button" className='btn btn-primary text-white'
                        //  onClick={submitForm}
                         onClick={handleSubmit}
                        >Submit</button>
                    </div>
                </div>

            </form>
        </div>
    );
};



export default CompanyInformationForm;
