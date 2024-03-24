import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../Home/Home';
import Nav from '../Nav/Nav';

const Root = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet>
                <Home></Home>
            </Outlet>
        </div>
    );
};

export default Root;