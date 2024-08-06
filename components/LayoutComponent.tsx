import React from 'react'

import FooterComponent from './FooterComponent'
import MenuComponent from './MenuComponent'
import { useRouter } from 'next/router';

export default function LayoutComponent({ children }: any) {
    const router = useRouter();
    const noMenuPaths = ['/register', '/login'];
    return (
        <React.Fragment>
            {!noMenuPaths.includes(router.pathname) && <MenuComponent />}
            {children}

        </React.Fragment>
    )
}
