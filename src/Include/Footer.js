import React from 'react';
import ScrollToTop from './ScrollToTop';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div>
            <footer id="rs-footer" class="rs-footer">

                <div class="footer-top">

                    <div class="container">

                        <div class="row">
                            <div class="col-lg-6 col-md-12 col-sm-12 footer-widget">
                                <h3 class="widget-title" >About Us</h3>
                                <div class="textwidget pb-30">
                                    <h3 style={{
                                    fontSize: "19px",
                                    lineHeight: "30px",
                                    fontWeight: "600",
                                    color: 'white',
                                   marginBottom: "30px"
                                }}>Founded with a vision to empower businesses through technology, we specialize in building fast, scalable, and responsive web applications using React.js, while also crafting dynamic and user-friendly websites on WordPress. From custom themes and plugins to headless WordPress integrations, our team ensures that every project is optimized for performance and user engagement.</h3>
                                </div>
                                <h3 class="widget-title">Follow Us</h3>
                                <ul class="footer-social md-mb-30">
                                    <li>
                                        <Link to="#" target="_blank"><span> <i class="fab fa-facebook-f"></i></span></Link>
                                    </li>
                                    <li>
                                        <Link to="# " target="_blank"><span> <i class="fab fa-twitter"></i></span></Link>
                                    </li>

                                    <li>
                                        <Link to="" target="_blank"><span><i class="fab fa-instagram"></i></span></Link>
                                    </li>

                                </ul>

                            </div>
                            <div class="col-lg-2 col-md-12 col-sm-12 pl-45 md-pl-15 md-mb-30">
                                <h3 class="widget-title">Services</h3>
                                <ul class="site-map">
                                    <li><Link to="/service/Softwere-developments">Software Development </Link>
                                    </li>
                                    <li><Link to="/service/Web-developments">Web Development </Link> </li>
                                    <li><Link to="/service/MERN-stack-developments">MERN Stack Development </Link>
                                    </li>
                                    <li><Link to="/service/.Net-developments">.Net Development </Link></li>
                                    <li><Link to="/service/Wordpress-developments">Wordpress Development </Link></li>

                                </ul>
                            </div>
                            <div class="col-lg-2 col-md-12 col-sm-12 pl-45 md-pl-15 md-mb-30">
                                <h3 class="widget-title">Company</h3>
                                <ul class="site-map">
                                <li><Link to="/">Home</Link></li>
                                    <li><Link to="/about">About Us</Link></li>
                                    <li><Link to="/blog">Blogs</Link></li>
                                    <li><Link to="/content-writing"> Content Writing</Link></li>
                                    <li><Link to="/industrial-training"> Internship / Industrial Training</Link></li>
                                   <li><Link to="/about/career">Career</Link></li>

                                </ul>
                            </div>
                           
                            <div class="col-lg-2 col-md-12 col-sm-12 pl-45 md-pl-15 md-mb-30">
                                <h3 class="widget-title"> More Info</h3>
                                <ul class="site-map">
                                    <li><Link to="/terms-and-conditions">Roknovo Terms & Conditions </Link>
                                    </li>
                                    <li><Link to="/contact">Contact Us</Link></li>
                                    <li><Link to="/faq">FAQ</Link></li>
                                 
                                </ul>
                            </div>
                           
                           


                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <div class="container">
                        <div class="row y-middle">
                            <div class="col-lg-4 text-right md-mb-10 order-last">
                            <div class="copyright">
                                    <h3 style={{
                                    fontSize: "19px",
                                    lineHeight: "30px",
                                    fontWeight: "600",
                                    color: 'white',
                                   marginBottom: "30px"
                                }}> Copyright &copy; <span id="current-year">  {new Date().getFullYear()}</span> All Rights Reserved.</h3>
                                </div>
                            </div>
                            <div class="col-lg-1">
                              
                            </div>
                            <div class="col-lg-7">
                                <div class="copyright">
                                   <h3 style={{
                                    fontSize: "19px",
                                    lineHeight: "30px",
                                    fontWeight: "600",
                                    color: 'white',
                                   marginBottom: "30px"
                                }}>At Ruknovo, we are passionate about nurturing fresh talent and building the next generation of IT professionals</h3>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </footer>
            <div class="wa__btn_popup">
                <div class="wa__btn_popup_icon"></div>
                <div class="wa__btn_popup_txt">How can I help you? </div>

            </div>
            <div class="wa__popup_chat_box">
                <div class="wa__popup_heading">
                    <div class="wa__popup_title"><strong>Questions? Doubts?</strong></div>
                    <div class="wa__popup_intro">Chat with us via <strong>WhatsApp</strong>
                        <div id="\&quot;eJOY__extension_root\&quot;"></div>
                    </div>
                </div>
                <div class="wa__popup_content wa__popup_content_left">
                    <div class="wa__popup_notice">We will respond as soon as possible.</div>
                    <div class="wa__popup_content_list">
                        <div class="wa__popup_content_item "><Link target="_blank" to="https://web.whatsapp.com/send?phone=351123456789" class="wa__stt wa__stt_online">
                            <div class="wa__popup_avatar">
                                <div class="wa__cs_img_wrap" style={{ backgroundImage: `url(https://cdn-icons-png.flaticon.com/128/15678/15678795.png)`, backgroundSize: 'cover' }}></div>
                            </div>
                            <div class="wa__popup_txt">
                                <div class="wa__member_name">Company Name</div>
                                <div class="wa__member_duty">Support Team</div>
                            </div>
                        </Link></div>
                    </div>
                </div>
            </div>
            <ScrollToTop />
        </div>
    );
}

export default Footer;


