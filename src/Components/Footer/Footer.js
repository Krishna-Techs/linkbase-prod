import React from 'react'
import { Link } from 'react-router-dom'
import FooterCopyrights from './FooterCopyrights'
import mainLogo from '../../assets/img/linkbase/linkbase_logo.png';

const Footer = () => {
    return (
        <footer className="footer-2 footer-wrap">
            <div className="footer-widgets-wrapper text-white">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3 col-xl-3 col-12 pe-xl-0">
                            <div className="single-footer-wid site_info_widget">
                                <div className="wid-title">
                                <div className="logo mb-3">
                                    <Link to='/'>
                                        <img src={mainLogo} alt="logo"/>
                                    </Link>
                                </div>
                                    <h6>About Linkbase</h6>
                                    <p>We help Vacation Rental Property management companies scale their portfolio using our software. We integrate with global hardware manufacturers and connect seamlessly with all major PMS (Property Management softwares) to automate your operations. </p>
                                </div>
                            </div>
                            <div className="single-footer-wid">
                                <div className="wid-title">
                                    <h6>Get In Touch</h6>
                                </div>
                                <Link to='https://calendly.com/shiven-7/30min' id='fbtn' className="theme-btn style-3" target="_blank">Book A Demo</Link>
                            </div>
                        </div>

                        <div className="col-sm-3 col-xl-3 col-12 pe-xl-0">
                            <div className="single-footer-wid">
                                <div className="wid-title">
                                    <h6>Enhance Guest Convenience</h6>
                                </div>
                                <ul>
                                    <li><Link to="/Check-in">Contactless Check In</Link></li>
                                    <li><Link to="/check-outs">Contactless Check Out</Link></li>
                                    <li><Link to="/digital-guidebooks">Digital Guidebooks</Link></li>
                                    <li><Link to="/smart-locks">Smart Locks</Link></li>
                                </ul>
                            </div>
                            <div className="single-footer-wid">
                                <div className="wid-title">
                                    <h6>Streamline Operations Through Automation:</h6>
                                </div>
                                <ul>
                                    <li><Link to="/streamline">Tailored automations and workflows</Link></li>
                                    <li><Link to="/streamline">Fully customizable guest journey</Link></li>
                                    <li><Link to="/streamline">Wifi and property information</Link></li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="col-sm-3 col-xl-3 col-12 pe-xl-0">
                            <div className="single-footer-wid">
                                <div className="single-footer-wid">
                                    <div className="wid-title">
                                        <h6>Boost Your Earnings: Upsells</h6>
                                    </div>
                                    <ul>
                                        <li><Link to="/direct-upsells">Direct Upsells</Link></li>
                                        <li><Link to="/affiliate-upsells">Affiliate Upsells</Link></li>
                                        <li><Link to="/digital-guidebooks">Digital Guidebooks</Link></li>
                                        <li><Link to="/smart-locks">Smart Locks</Link></li>
                                    </ul>
                                </div>
                                <div className="single-footer-wid">
                                    <div className="wid-title">
                                        <h6>Increase Repeat Guests and Direct Bookings:</h6>
                                    </div>
                                    <ul>
                                        <li><Link to="/increaseRepeatGuests">Guest Data collection</Link></li>
                                        <li><Link to="/increaseRepeatGuests">Increased 5 star reviews</Link></li>
                                        <li><Link to="/integrations">CRM integration</Link></li>
                                        <li><Link to="/increaseRepeatGuests">AI messaging</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-3 col-xl-3 col-12 pe-xl-0">
                            <div className="single-footer-wid">
                                <div className="wid-title">
                                    <h6>Combat Frauds: Digital and Instant Guest Screening:</h6>
                                </div>
                                <ul>
                                    <li><Link to="/combatFrauds">Guest Screening and Verification</Link></li>
                                    <li><Link to="/combatFrauds">Strata documents or rental agreements</Link></li>
                                    <li><Link to="/combatFrauds">Security Deposits and Waivers</Link></li>
                                </ul>
                            </div>
                            <div className="single-footer-wid">
                                <div className="wid-title">
                                    <h6>Company</h6>
                                </div>
                                <ul>
                                    <li><Link to="/company">About Us</Link></li>
                                    <li><Link to="/hospitality">Hospitality Solution</Link></li>
                                    <li><Link to="/hospitality-saas">Hospitality SaaS</Link></li>
                                    <li><Link to="/pricing">Pricing</Link></li>
                                </ul>
                            </div>
                            <div className="single-footer-wid">
                                <div className="wid-title">
                                    <h6>Legal</h6>
                                </div>
                                <ul>
                                    <li><Link to="/terms-of-service">Terms of Service</Link></li>
                                    <li><Link to="/privacy-and-policy">Privacy Policy</Link></li>
                                </ul>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
            <FooterCopyrights/>
        </footer> 
    )
}

export default Footer