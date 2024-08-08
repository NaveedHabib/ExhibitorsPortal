import React from 'react'

import FooterComponent from './FooterComponent'
import MenuComponent from './MenuComponent'
import { useRouter } from 'next/router';
import { Authentication } from "../public/assets/js/authentication";

export default function LayoutComponent({ children }: any) {
    const router = useRouter();

    if (!(router.pathname.includes('/register/') || router.pathname.includes('/login/') || router.pathname.includes('/contractor/signup/') || router.pathname.includes('/access-denied'))) {
        Authentication()
    }

    return (
        <React.Fragment>
            {
                (router.pathname.includes('/register/') || router.pathname.includes('/login/') || router.pathname.includes('/contractor/signup/') || router.pathname.includes('/access-denied')) ? "" :
                    <MenuComponent />
            }
            {children}

        </React.Fragment>
    )
}
