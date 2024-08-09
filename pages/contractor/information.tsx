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

    const [File3DDesign, Set3DDesignData] = useState<string>();
    const [FileTechnicalDrawing, SetTechnicalDrawingData] = useState<string>();

    useEffect(() => {
        if (loggedData) {
            axios.get(`${Globals.API_URL}Account/GetExhibitorProfile/${loggedData.id}`).then((r: any) => {
                const dataModel: accountProfileModel = r.data;
                accountProfilecode(dataModel);

                Set3DDesignData(dataModel.Design3D);
                SetTechnicalDrawingData(dataModel.TechnicalDrawing);
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
                            if(e.target.name == "3DDesign"){
                                Set3DDesignData(filename);
                            }
                            else{
                                SetTechnicalDrawingData(filename);
                            }
                        }
                    })
            };
            reader.readAsDataURL(file);
        }
        else {
            Set3DDesignData('');
            SetTechnicalDrawingData('');
        }
    }

    function updateProfile(e: any) {
        e.preventDefault();

        var Name: any = document.getElementById("Name");
        var companyName: any = document.getElementById("companyName");
        var Email: any = document.getElementById("Email");
        var contactNo: any = document.getElementById("contactNo");
        var Country: any = document.getElementById("Country");
        var standHeight: any = document.getElementById("standHeight");
        var standWidth: any = document.getElementById("standWidth");
        var StandLength: any = document.getElementById("StandLength");

        axios.post(`${Globals.API_URL}Exhibitor/ContractorUpdate/${loggedData?.id}`, ({
            "ContractorCompany": companyName.value,
            "ContractorCountry": Country.value,
            "ContractorName": Name.value,
            "ContractorEmail": Email.value,
            "ContractorMobile": contactNo.value,
            "Design3D": File3DDesign,
            "TechnicalDrawing": FileTechnicalDrawing,
            "Height": standHeight.value,
            "width": standWidth.value,
            "Length": StandLength.value
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
                        <li className="breadcrumb-item " aria-current="page">
                            <Link href="/contractor" className='text-dark'>
                                Contractors
                            </Link>
                        </li>

                        <li className="breadcrumb-item active" aria-current="page">Information</li>
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
                                    <p className=''>Contractor Information</p>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-lg-6">
                                    <label htmlFor="name" className='mb-1'>Contractor Name*</label>
                                    <input type="text" className='form-control' id='Name' defaultValue={accountProfile?.ContractorName} placeholder='Name' required />

                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-6 mb-3">
                                    <label htmlFor="companyName" className='text-secondary'>Company Name*</label>
                                    <input className='form-control' type="text" name="companyName" id='companyName' placeholder="Company Name*" defaultValue={accountProfile?.ContractorCompany} required />

                                </div>
                                <div className="col-lg-6 mb-3">
                                    <label htmlFor="companyEmail" className='text-secondary'>Email*</label>
                                    <input className='form-control' type="email" id="Email" placeholder="Email" defaultValue={accountProfile?.ContractorEmail} required />

                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-6 mb-3">
                                    <label htmlFor="companyName" className='text-secondary'>Contact No*</label>
                                    <input className='form-control' type="text" name="contactNo" id='contactNo' placeholder="Contact No*" defaultValue={accountProfile?.ContractorMobile} required />

                                </div>
                                <div className="col-lg-6 mb-3">
                                    <label htmlFor="companyEmail" className='text-secondary'>Country*</label>
                                    <input className='form-control' type="text" id="Country" placeholder="Country" defaultValue={accountProfile?.ContractorCountry} required />

                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-6 mb-3">
                                    <label htmlFor="3DDesign" className='text-secondary'>Uploading 3D Design*</label>
                                    <input className='form-control' type="file" name="3DDesign" onChange={fileUpload} accept=".png,.jpg,.jpeg,.pdf" />
                                    {
                                        File3DDesign ? (
                                            <a href={File3DDesign} className="text-primary" style={{fontSize:"14px"}} target={"_blank"}>Click here to view Design</a>
                                        ) : ""
                                    }
                                </div>
                               
                                <div className="col-lg-6 mb-3">
                                    <label htmlFor="TechnicalDrawing" className='text-secondary'>Uploading of Technical Drawing*</label>
                                    <input className='form-control' type="file" name="TechnicalDrawing" onChange={fileUpload} accept=".png,.jpg,.jpeg,.pdf" />
                                    {
                                        FileTechnicalDrawing ? (
                                            <a href={FileTechnicalDrawing} className="text-primary" style={{fontSize:"14px"}} target={"_blank"}>Click here to view Drawing</a>
                                        ) : ""
                                    }
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-6 mb-3">
                                    <label htmlFor="standHeight" className='text-secondary'>Stand Height*</label>
                                    <input className='form-control' type="text" id="standHeight" placeholder="Stand Height" defaultValue={accountProfile?.Height} required />

                                </div>
                                <div className="col-lg-6 mb-3">
                                    <label htmlFor="standWidth" className='text-secondary'>Stand Width*</label>
                                    <input className='form-control' type="text" id="standWidth" placeholder="Stand Width" defaultValue={accountProfile?.width} required />

                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-6 mb-3">
                                    <label htmlFor="StandLength" className='text-secondary'>Stand Length*</label>
                                    <input className='form-control' type="text" id="StandLength" placeholder="Stand Length" defaultValue={accountProfile?.Length} required />

                                </div>
                            </div>

                            <div className="row">
                                <div className="col-6">
                                    <p id='success-message' style={{ fontSize: "14px" }} className='text-success mb-2 d-none'>Information updated successfully.</p>
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
