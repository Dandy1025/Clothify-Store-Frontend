import React, { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../style/Header.css';
import HeaderBg from '../assets/Home-background-1.jpg'

import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBContainer,
    MDBIcon,
    MDBCollapse,
    MDBBtn
} from 'mdb-react-ui-kit';

export default function Header() {
    const [showBasic, setShowBasic] = useState(false);

    return (
        <header>
            <MDBNavbar expand='lg' light bgColor='white'>
                <MDBContainer>
                    <MDBNavbarToggler
                        onClick={() => setShowBasic(!showBasic)}
                        aria-controls='navbarExample01'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                    >
                        <MDBIcon fas icon='bars' />
                    </MDBNavbarToggler>
                    <MDBCollapse navbar show={showBasic}>
                        <MDBNavbarNav className='justify-content-center'> {/* Center the items */}
                            <MDBNavbarItem active>
                                <MDBNavbarLink aria-current='page' href='#'>
                                    Home
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='#'>Men</MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='#'>Women</MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='#'>Kids</MDBNavbarLink>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                    <div className="position-absolute top-0 end-0 p-3">
                        <MDBBtn outline color="warning" className="me-2" href="/login">
                            Login
                        </MDBBtn>
                        <MDBBtn color="warning" href="/signup">
                            Signup
                        </MDBBtn>
                    </div>
                </MDBContainer>
            </MDBNavbar>

            <div
                className='p-5 text-center bg-image'
                style={{
                    backgroundImage: `url(${HeaderBg})`,
                    minHeight: '100vh',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >

                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <div className='text-white text-center'> {/* Center align text */}
                            <h1 className='mb-3'>Welcome to Clothify Store</h1>
                            <h4 className='mb-3'>Your One-Stop Destination for Fashion</h4>
                            <MDBBtn rounded color='warning'>
                                Shop Now
                            </MDBBtn>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
