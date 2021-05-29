import React from 'react';

import HeaderContainer from './../header/HeaderContainer';
import OrderContainer from '../order/OrderContainer';
import FooterContainer from './../footer/FooterContainer';
import './Layout.scss';

function Layout() {
    return (
        <div className="layout">
            <HeaderContainer />
            <OrderContainer />
            <FooterContainer />
        </div>
    )
}

export default Layout;