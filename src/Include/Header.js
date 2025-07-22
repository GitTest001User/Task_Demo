import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [open, setOpen] = useState(false);
    const [visible, setVisible] = useState(false);

    function ShowMenu() {
        setOpen(!open);
    }


    function toggleSubMenu() {
        setVisible(!visible);
    }

    return (
        <div className="full-width-header">
            <header id="rs-header" className="rs-header style2">
                <div className="menu-area menu-sticky">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-3">
                                <div className="d-lg-block d-none d-sm-none">
                                    <Link to="/">
                                        {/* <img src="/assets/image/" alt="Logo" />  */}
                                        <b>
                                        <h4 className='text-white'>BrainyLingo</h4> </b>
                                    </Link>
                                </div>
                                <div className="d-inline-flex d-lg-none d-sm-block w-200px">
                                    <Link to="/">
                                    <b>
                                        <h4 className='text-white'>BrainyLingo</h4> </b>
                                        {/* <img src="/assets/image/" alt="Logo" className="w-200px" /> */}
                                    </Link>
                                </div>
                                <div className="mobile-menu d-initial">
                                    <div onClick={ShowMenu} className="rs-menu-toggle rs-menu-toggle-close secondary">
                                        <img src={open ? '/assets/image/widget.png' : '/assets/image/app.png'} className='d-inline-flex react-multiple-carousel__arrow--right ' style={{ width: '34px' }} />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6  text-right">
                                <div className={open ? "" : "rs-menu-area"}>
                                    <div className="main-menu main-menu w-auto">
                                        <nav className={open ? "rs-menu lg-pr-50 md-pr-0" : "rs-menu rs-menu-close lg-pr-50 md-pr-0"}>
                                            <ul className="nav-menu">
                                                <li >
                                                    <Link to="/">Home</Link>
                                                </li>
                                                <li>
                                                    <Link to="/">LeaderBoard</Link>
                                                </li>
                                                <li>
                                                    <Link to="/">Daily Quits</Link>
                                                </li>
                                                <li className="menu-item-has-children current-menu-item">
                                                    <Link to="#" >Genre</Link>
                                                    <span class="rs-menu-parent" onClick={toggleSubMenu}><i class={visible ? "fa fa-angle-down" : "fa fa-angle-up"} aria-hidden="true"></i></span>
                                                    <ul className={visible ? "sub-menu visible" : "sub-menu"}>
                                                        <li>
                                                            <Link to="/service/Softwere-developments">Demo</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/service/Web-developments">Demo</Link>
                                                        </li>
                                                        <div className="sub-menu-close">
                                                            <div onClick={toggleSubMenu} >
                                                                <i className="fa fa-times" aria-hidden="true"></i> Close
                                                            </div>
                                                        </div>
                                                    </ul>
                                                </li>

                                            </ul>
                                        </nav>
                                    </div>



                                </div>

                            </div>
                            <div className="col-lg-3 text-right">
                                <div className='rs-menu-area'>


                                    <ul className="banner-btn  md-pr-0 mb-2 md-pl-0 ml-50 ">
                                        <li>
                                            <Link className="readon  readon lets-talk demo1 learn-more d-none d-lg-block d-sm-none" to="/">Sign Out</Link>
                                        </li>

                                    </ul>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <nav className="right_menu_togle hidden-md">
                <div className="close-btn">
                    <span id="nav-close" className="text-center">
                        <i className="fa fa-close"></i>
                    </span>
                </div>
                <div className="canvas-logo">
                    <Link to="/">
                        <img src="/assets/images/logo-dark.png" alt="Canvas Logo" />
                    </Link>
                </div>
                <div className="offcanvas-text">
                    <p>
                        Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
                        ‘Content here, content here’, making it look like readable English.
                    </p>
                </div>
                <div className="canvas-contact">
                    <h5 className="canvas-contact-title">Contact Info</h5>
                    <ul className="contact">
                        <li>
                            <i className="fa fa-globe"></i> Middle Badda, Dhaka, BD
                        </li>
                        <li>
                            <i className="fa fa-phone"></i> +123445789
                        </li>
                        <li>
                            <i className="fa fa-envelope"></i>
                            <Link to="mailto:info@yourcompany.com">info@yourcompany.com</Link>
                        </li>
                        <li>
                            <i className="fa fa-clock-o"></i> 10:00 AM - 11:30 PM
                        </li>
                    </ul>
                    <ul className="social">
                        <li>
                            <Link to="#"><i className="fa fa-facebook"></i></Link>
                        </li>
                        <li>
                            <Link to="#"><i className="fa fa-twitter"></i></Link>
                        </li>
                        <li>
                            <Link to="#"><i className="fa fa-youtube"></i></Link>
                        </li>
                        <li>
                            <Link to="#"><i className="fa fa-linkedin"></i></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;


