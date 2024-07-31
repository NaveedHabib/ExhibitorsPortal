import SideBarComponent from '@/components/SideBarComponent'
import Link from 'next/link'
import React, { useState } from 'react'

export default function CompanyProfile() {

    const [companyDetails, setCompanyDetails] = useState({
        companyName: 'ABC Corp',
        companyWebsite: 'https://www.abccorp.com',
        companyEmail: 'contact@abccorp.com',
        companyLogo: 'https://via.placeholder.com/100',
    });

    const [logoPreview, setLogoPreview] = useState<string>("/assets/imgs/placeholder-image.jpg");
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleLogoClick = () => {
        const logoInput = document.getElementById('companylogo') as HTMLInputElement;
        if (logoInput) {
            logoInput.click();
        }
    };

    const handleLogoChange = (event: any) => {


        const file = event.target.files?.[0];


        if (file) {
            const validTypes = ['image/png', 'image/jpeg', 'image/webp'];
            const maxSize = 2 * 1024 * 1024; // 2MB

            if (!validTypes.includes(file.type)) {
                setErrorMessage('Invalid file type. Only PNG, JPG, and WEBP formats are allowed.');
                return;
            }

            if (file.size > maxSize) {
                setErrorMessage('File size exceeds 2MB.');
                return;
            }


            const reader = new FileReader();
            reader.onload = () => {
                if (reader.result) {
                    setLogoPreview(reader.result as string);
                }
            };
            reader.readAsDataURL(file);
        }
    };






    return (
        <div className='my-account-wrapper'>
            <div className="container">

                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item" aria-current="page">
                            <Link href="/" className='text-dark'>
                                Home
                            </Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">My Account</li>
                    </ol>
                </nav>
                <div className="section-container">
                    <SideBarComponent />
                    <div className="contents-section ">

                        <form className='my-form  mt-lg-0 mt-3'>
                            <div className="row ">
                                <div className="col-12">
                                    <p className=''>Company Information</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 mb-3 ">
                                    <label htmlFor="companylogo" className='mb-1'>Company Logo*</label>
                                    <input type="file" id="companylogo" className='form-control' style={{ display: 'none' }} onChange={handleLogoChange} accept=".png,.jpg,.jpeg,.webp" />
                                    <div className="logo-preview" style={{ cursor: 'pointer' }} onClick={handleLogoClick}>
                                        <img src={logoPreview} alt="Company Logo" style={{ width: '100px', height: '100px', objectFit: 'contain' }} />
                                    </div>
                                    {errorMessage && <p style={{ color: 'red', fontSize: '16px'}}>{errorMessage}</p>}
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-lg-6 mb-3">
                                    <label htmlFor="companyname" className='mb-1'>Company Name*</label>
                                    <input type="text" className='form-control' placeholder='Company Name' />

                                </div>
                                <div className="col-lg-6 mb-3">
                                    <label htmlFor="companywebsite" className='mb-1'>Company Website</label>
                                    <input type="text" className='form-control' placeholder='Company Website' />

                                </div>
                            </div>

                            <div className="row ">
                                <div className="col-lg-6 mb-3">
                                    <label htmlFor="companyemail" className='mb-1'>Company Email*</label>
                                    <input type="email" className='form-control' placeholder='Company Email' />

                                </div>

                            </div>

                            <div className="row">
                                <div className="col-6 ">
                                    <button className='update-btn'>Update</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}