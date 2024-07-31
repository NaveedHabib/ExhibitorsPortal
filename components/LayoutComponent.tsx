import React from 'react'

import FooterComponent from './FooterComponent'
import MenuComponent from './MenuComponent'

export default function LayoutComponent({ children }: any) {
    return (
        <React.Fragment>
            <MenuComponent />
            {children}

        </React.Fragment>
    )
}
