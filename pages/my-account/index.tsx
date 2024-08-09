import SideBarComponent from '@/components/SideBarComponent'
import Globals from '@/modules/Globals';
import Helper from '@/modules/Helper';
import accountProfileModel from '@/sysmodel/accountProfileModel';
import eventModel from '@/sysmodel/eventModel';
import { loggedModel } from '@/sysmodel/loginModel';
import Link from 'next/link'
import axios from "axios";
import React, { useEffect, useState } from 'react'
import accountModel from '@/sysmodel/accountModel';

export default function MyAccount() {

    const loggedData: loggedModel | null = Helper.getLoggedData();

    const [accountProfile, accountProfilecode] = useState<accountProfileModel>();

    const [account, accountcode] = useState<accountModel>();

    const [FileData, SetFileData] = useState<string>();

    useEffect(() => {
        if (loggedData) {
            axios.get(`${Globals.API_URL}Account/GetExhibitorProfile/${loggedData.id}`).then((r: any) => {
                const dataModel: accountProfileModel = r.data;
                accountProfilecode(dataModel);

                SetFileData(dataModel.CompanyLogo);
            });

            axios.get(`${Globals.API_URL}Account/GetAccount/${loggedData.itemGuid}`).then((r: any) => {
                const dataModel: accountModel = r.data;
                accountcode(dataModel);
            });
        }
    }, []);

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
                            SetFileData(filename);
                        }
                    })
            };
            reader.readAsDataURL(file);
        }
        else {
            SetFileData('');
        }
    }

    function updateProfile(e: any) {
        e.preventDefault();

        var Name: any = document.getElementById("Name");
        var companyName: any = document.getElementById("companyName");
        var companyEmail: any = document.getElementById("companyEmail");
        var companyLogo = FileData;
        var companyWebsite: any = document.getElementById("companyWebsite");
        var contactNumber: any = document.getElementById("contactNumber");
        var companyAddress: any = document.getElementById("companyAddress");
        var linkedin: any = document.getElementById("linkedin");
        var fasciaName: any = document.getElementById("fasciaName");
        var projectInterest: any = document.getElementById("projectInterest");
        var companyOverview: any = document.getElementById("companyOverview");

        axios.post(`${Globals.API_URL}Account/ExhbitorUpdate/${loggedData?.id}`, ({
            "Name": Name.value,
            "companyName": companyName.value,
            "companyEmail": companyEmail.value,
            "companyLogo": companyLogo,
            "companyWebsite": companyWebsite.value,
            "contactNumber": contactNumber.value,
            "companyAddress": companyAddress.value,
            "linkedin": linkedin.value,
            "fasciaName": fasciaName.value,
            "projectInterest": projectInterest.value,
            "companyOverview": companyOverview.value
        }))
            .then((data: any) => {
                var successmessageData = document.getElementById("success-message");
                successmessageData?.classList.remove("d-none");
            })
    }

    return (
        <div className='my-account-wrapper margin-top-section'>
            <div className="container">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item" aria-current="page">
                            <Link href='/' className='text-dark'>Home</Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">My Account</li>
                    </ol>
                </nav>

                <div className="section-container">
                    <SideBarComponent />
                    <div className="contents-section">

                        <form className='my-form' onSubmit={(e) => {
                            updateProfile(e);
                        }}>
                            <div className="row ">
                                <div className="col-12">
                                    <p className=''>Update Profile</p>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-lg-6">
                                    <label htmlFor="name" className='mb-1'>Name</label>
                                    <input type="text" className='form-control' id='Name' defaultValue={account?.Name} placeholder='Name' required />

                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-6 mb-3">
                                    <label htmlFor="companyName" className='text-secondary'>Company Name*</label>
                                    <input className='form-control' type="text" name="companyName" id='companyName' placeholder="Company Name*" defaultValue={accountProfile?.CompanyName} required />

                                </div>
                                <div className="col-lg-6 mb-3">
                                    <label htmlFor="companyEmail" className='text-secondary'>Company Email*</label>
                                    <input className='form-control' type="email" id="companyEmail" placeholder="Company Email" defaultValue={accountProfile?.CompanyEmail} required />

                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-6 mb-3">
                                    <label htmlFor="companylogo" className='text-secondary'>Company Logo*</label>
                                    <input className='form-control' type="file" name="companyLogo" placeholder="Company Logo" onChange={fileUpload} accept=".png,.jpg,.jpeg" />
                                    {
                                        FileData ? (
                                            <img src={FileData} alt="Company Logo" style={{ width: '100px', height: '100px', objectFit: 'contain' }} />
                                        ) : ""
                                    }
                                </div>
                                <div className="col-lg-6 mb-3">
                                    <label htmlFor="companyWebsite" className='text-secondary'>Company Website</label>
                                    <input className='form-control' type="text" id="companyWebsite" placeholder="Company Website" defaultValue={accountProfile?.CompanyWebsite} />

                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-6 mb-3">
                                    <label htmlFor="contactNumber" className='text-secondary'>Company Contact Number*</label>
                                    <input className='form-control' type="text" id="contactNumber" placeholder="Company Number" defaultValue={accountProfile?.CompanyTelNo} required />

                                </div>
                                <div className="col-lg-6 mb-3">
                                    <label htmlFor="companyAddress" className='text-secondary'>Company Address*</label>
                                    <input className='form-control' type="text" id="companyAddress" placeholder="Company Address" defaultValue={accountProfile?.CompanyAddress} required />

                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-6 mb-3">
                                    <label htmlFor="companyWebsite" className='text-secondary'>Linkedin*</label>
                                    <input className='form-control' type="text" id="linkedin" placeholder="LinkedIn URL" defaultValue={accountProfile?.LinkedInProfile} required />

                                </div>
                                <div className="col-lg-6 mb-3">
                                    <label htmlFor="fasciaName" className='text-secondary'>Fascia Name*</label>
                                    <input className='form-control' type="text" id="fasciaName" placeholder="Fascia Name" defaultValue={accountProfile?.FasciaName} required />

                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 mb-3">
                                    <label htmlFor="projectInterest" className='text-secondary'>Project Interest*</label>
                                    <input className='form-control' type="text" id="projectInterest" placeholder="Project of Interest" defaultValue={accountProfile?.ProjectInterest} required />

                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12 mb-3">
                                    <label htmlFor="companyOverview" className='text-secondary'>Company Overview*</label>
                                    <textarea rows={3} className='form-control' id="companyOverview" placeholder="Company Overview" defaultValue={accountProfile?.CompanyBrief} required />

                                </div>
                            </div>

                            <div className="row">
                                <div className="col-6">
                                    <p id='success-message' style={{ fontSize: "14px" }} className='text-success mb-2 d-none'>Profile updated successfully.</p>
                                    <button type='submit' className='update-btn'>Update</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>


            </div>

        </div>
    )
}
