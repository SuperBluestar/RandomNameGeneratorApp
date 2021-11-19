import React from 'react';
import { Outlet } from 'react-router-dom';
import SidebarLayout from './SidebarLayout';

const HomeLayout = () => {
    return (
        <SidebarLayout>
            <Outlet />
        </SidebarLayout>
    )
}

export default HomeLayout;