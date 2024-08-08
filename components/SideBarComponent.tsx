import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { FaShippingFast, FaUser } from "react-icons/fa";

import { BsBoxFill } from "react-icons/bs";

export default function SideBarComponent() {

    const router = useRouter();
    const currentPath = router.pathname;

    const getNavItemClass = (href: string) => {
        return currentPath === href ? "menu-item active" : "menu-item";
    };

    const isContractorRoute = currentPath.startsWith('/contractor');

    return (
        <div className='side-bar-wrapper'>
            <ul className=''>
                {isContractorRoute ? (
                    <div className='menu-items'>

                        <Link href="/contractor">
                            <li className={getNavItemClass("/contractor")}>
                                <FaUser />
                                <span>Contractors</span>
                            </li>
                        </Link>

                        <Link href="/contractor/information">
                            <li className={getNavItemClass("/contractor/information")}>
                                <FaShippingFast />
                                <span>Information</span>
                            </li>
                        </Link>
                    </div>
                ) : (

                    <div className='menu-items'>
                        <Link href="/my-account">
                            <li className={getNavItemClass("/my-account")}>
                                <FaUserCircle />
                                <span>Profile</span>
                            </li>
                        </Link>

                        <Link href="/my-account/my-orders">
                            <li className={getNavItemClass("/my-account/my-orders")}>
                                <FaShippingFast />
                                <span>My Orders</span>
                            </li>
                        </Link>
                    </div>
                )}


            </ul>
        </div>
    )
}
