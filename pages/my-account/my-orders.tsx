import SideBarComponent from '@/components/SideBarComponent'
import Link from 'next/link'
import React from 'react'

export default function CompanyProfile() {
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
                        <li className="breadcrumb-item " aria-current="page">
                            <Link href="/my-account" className='text-dark'>
                                My Account
                            </Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">My Orders</li>
                    </ol>
                </nav>
                <div className="section-container">
                    <SideBarComponent />
                    <div className="contents-section">
                        <h3>My Orders</h3>
                    </div>
                </div>

            </div>
        </div>
    )
}