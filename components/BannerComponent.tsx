import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion";
import { FaExclamation } from "react-icons/fa";

export default function BannerComponent() {

    const customHeading = "We Build Premium Events, Exhibitions, and Branded Environments.".split(" ")
    return (
        <div className="container banner-wrapper margin-top-section">
            <div className="row w-100">
                <div className="col-lg-6">
                    <div className="left-section">

                        <img src="/assets/imgs/Aimlogo.png" alt="" className='banner-logo' />
                        <p className='date'>12 – 14 May 2025 <br />Abu Dhabi, United Arab Emirates</p>
                    </div>
                </div>

                <div className="col-lg-6 d-flex align-items-center">
                    <div className='w-100'>
                        <h1 className='banner-heading'>Make Preparations for the Event</h1>
                    </div>
                </div>
            </div>

            <div className="count-down-container-wrapper">
                <div className="row">
                    <div className="col-lg-4 d-flex align-items-center justify-content-center">
                        <p className='early-bird-text mb-4 mb-lg-0'>Early Bird Ends In :</p>
                    </div>
                    <div className="col-lg-4">
                        <div className='datetime row w-100'>
                            <div className=' col-4 col-lg-0'>
                                <div className="datetime-item">
                                    <div className='count'>10</div>
                                    <div className='text'>Days</div>
                                </div>
                            </div>
                            <div className=' col-4 col-lg-0'>
                                <div className="datetime-item">
                                    <div className='count'>12</div>
                                    <div className='text'>Hours</div>
                                </div>
                            </div>
                            <div className=' col-4 col-lg-0'>
                                <div className="datetime-item">
                                    <div className='count'>28</div>
                                    <div className='text'>Minutes</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 d-flex justify-content-center align-items-center">
                        <p className='mb-0 mt-3 mt-lg-0 text-center d-flex gap-2 align-items-center fw-bold'>Hurry up <FaExclamation /></p>
                    </div>
                </div>
            </div>

        </div>
    )
}
