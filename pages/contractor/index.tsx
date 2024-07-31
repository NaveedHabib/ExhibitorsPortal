import SideBarComponent from '@/components/SideBarComponent'
import Link from 'next/link'
import React from 'react'

export default function MyAccount() {
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

                        <li className="breadcrumb-item active" aria-current="page">Contractor</li>
                    </ol>
                </nav>

                <div className="section-container">
                    <SideBarComponent />
                    <div className="contents-section">

                        <form className='my-form'>
                            <div className="row ">
                                <div className="col-12">
                                    <p className=''>Contractor Information</p>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-lg-6">
                                    <label htmlFor="firstname" className='mb-1'>First Name</label>
                                    <input type="text" className='form-control' placeholder='First Name' />

                                </div>
                                <div className="col-lg-6">
                                    <label htmlFor="firstname" className='mb-1'>Last Name</label>
                                    <input type="text" className='form-control' placeholder='Last Name' />

                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-lg-6">
                                    <label htmlFor="firstname" className='mb-1'>Email Address</label>
                                    <input type="email" className='form-control' placeholder='Email address' />

                                </div>
                                <div className="col-lg-6">
                                    <label htmlFor="firstname" className='mb-1'>Password</label>
                                    <input type="password" className='form-control' placeholder='Password' />

                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-6">
                                    <button className='update-btn'>Submit & Create Contractor</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>


            </div>

        </div>
    )
}
