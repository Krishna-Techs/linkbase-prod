import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import mainLogo from '../../assets/img/linkbase/linkbase_logo.png';
import MobileMenu from "./MobileMenu";
import './StickyHeader.css'; // Import your CSS file for styling
import './Megamenu.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const [mobileMenu, setMobileMenu] = useState(true);
  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  }

  const [isSticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      // Set 'isSticky' to true if the user has scrolled down 100px, else set it to false
      setSticky(window.scrollY > 100);
    };

    // Add event listener to the 'scroll' event
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <header className={`header ${isSticky ? 'sticky' : ''} header-wrap header-1`}>
        <div className="container-fluid d-flex justify-content-between align-items-center">
            <div className="logo">
                <Link to='/'>
                    <img src={mainLogo} alt="logo"/>
                </Link>
            </div>
            <div className="header-right-area d-flex justify-content-between">
                <div id='main-menu1' className="main-menu d-none d-xl-block me-xl-5">
                    <ul>
                        <li><Link to="#" onClick={toggleMenu}>FEATURES</Link>
                        {isOpen && (
                            <ul className="sub-menu">
                              <div className="container">
                                  <div class="mega-menu">
                                    <div class="frame-parent">
                                      <div class="frame-group">
                                        <div class="group-parent">
                                          <div class="enhance-guest-convenience">
                                            <h6>Enhance Guest Convenience</h6>
                                          </div>
                                        </div>
                                        <div class="frame-wrapper">
                                          <div class="contact-less-check-in-parent">
                                            <div class="contact-less-check">
                                              <Link to="/Check-in" onClick={closeMenu}>Contactless Check In</Link>
                                            </div>
                                            <div class="contact-less-check">
                                              <Link to="/check-outs" onClick={closeMenu}>Contactless Check Out</Link>
                                            </div>
                                            <div class="contact-less-check">
                                              <Link to="/digital-guidebooks" onClick={closeMenu}>Digital Guidebooks</Link>
                                            </div>
                                            <div class="contact-less-check">
                                              <Link to="/smart-locks" onClick={closeMenu}>Smart Locks</Link>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="frame-group">
                                        <div class="group-parent">
                                          <div class="enhance-guest-convenience">
                                            <h6>Boost Your Earnings: Upsells</h6>
                                          </div>
                                        </div>
                                        <div class="frame-wrapper">
                                          <div class="contact-less-check-in-parent">
                                            <div class="contact-less-check">
                                              <Link to="/direct-upsells" onClick={closeMenu}>Direct Upsells</Link>
                                            </div>
                                            <div class="contact-less-check">
                                              <Link to="/affiliate-upsells" onClick={closeMenu}>Affiliate Upsells</Link>
                                            </div>
                                            <div class="contact-less-check">
                                              <Link to="/digital-guidebooks" onClick={closeMenu}>Digital Guidebooks</Link>
                                            </div>
                                            <div class="contact-less-check">
                                              <Link to="/smart-locks" onClick={closeMenu}>Smart Locks</Link>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="frame-group">
                                        <div class="group-parent1">
                                          <div class="combat-frauds-digital">
                                            <h6>Combat Frauds: Digital and Instant Guest Screening:</h6>
                                          </div>
                                        </div>
                                        <div class="frame-wrapper">
                                          <div class="contact-less-check-in-parent">
                                            <div class="contact-less-check">
                                              <Link to="/combatFrauds" onClick={closeMenu}>Guest Screening and Verification</Link>
                                            </div>
                                            <div class="contact-less-check" id="strataDocumentsOr">
                                              <Link to="/combatFrauds" onClick={closeMenu}>Strata documents or rental agreements</Link>
                                            </div>
                                            <div class="contact-less-check" id="securityDepositsAnd">
                                              <Link to="/combatFrauds" onClick={closeMenu}>Security Deposits and Waivers</Link>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="frame-parent">
                                      <div class="frame-group">
                                        <div class="group-parent1">
                                          <div class="combat-frauds-digital">
                                            <h6>Streamline Operations Through Automation:</h6>
                                          </div>
                                        </div>
                                        <div class="frame-wrapper">
                                          <div class="contact-less-check-in-parent">
                                            <div class="contact-less-check">
                                              <Link to="/streamline" onClick={closeMenu}>Tailored automations and workflows</Link>
                                            </div>
                                            <div class="contact-less-check">
                                              <Link to="/streamline" onClick={closeMenu}>Fully customizable guest journey</Link>
                                            </div>
                                            <div class="contact-less-check">
                                              <Link to="/streamline" onClick={closeMenu}>Wifi and property information</Link>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="frame-group">
                                        <div class="group-parent1">
                                          <div class="combat-frauds-digital">
                                            <h6>Increase Repeat Guests and Direct Bookings:</h6>
                                          </div>
                                        </div>
                                        <div class="frame-wrapper">
                                          <div class="contact-less-check-in-parent">
                                            <div class="contact-less-check">
                                              <Link to="/increaseRepeatGuests" onClick={closeMenu}>Guest Data collection</Link>
                                            </div>
                                            <div class="contact-less-check">
                                              <Link to="/increaseRepeatGuests" onClick={closeMenu}>Increased 5 star reviews</Link>
                                            </div>
                                            <div class="contact-less-check">
                                              <Link to="/integrations" onClick={closeMenu}>CRM integration</Link>
                                            </div>
                                            <div class="contact-less-check">
                                              <Link to="/increaseRepeatGuests" onClick={closeMenu}>AI messaging</Link>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="frame-parent5">
                                        <div class="group-parent">
                                          <div class="enhance-guest-convenience">
                                            Enhance Guest Convenience
                                          </div>
                                        </div>
                                        <div class="frame-wrapper4">
                                          <div class="contact-less-check-in-parent">
                                            <div class="enhance-guest-convenience">Contact less Check In</div>
                                            <div class="enhance-guest-convenience">
                                              Contact less Check Out
                                            </div>
                                            <div class="enhance-guest-convenience">Digital Guidebooks</div>
                                            <div class="enhance-guest-convenience">Smart Locks</div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                              </div>
                            </ul>
                          )}
                        </li>
                        {/* <li><Link to="/hospitality">SOLUTIONS</Link></li> */}
                        <li><Link to="/integrations">INTEGRATIONS</Link></li>
                        <li><Link to="/pricing">PRICING</Link></li>
                        <li><Link to="/company">COMPANY</Link></li>
                    </ul>
                </div>
                <div className="header-right-elements d-flex align-items-center justify-content-between">
                    <Link to="https://calendly.com/shiven-7/30min" target="_blank" className="theme-btn style-3 d-none d-sm-block">BOOK A DEMO</Link>
                    <Link to="https://admin.linkbase.ca/"  target="_blank" className="theme-btn style-3 d-none d-sm-block">SIGN IN</Link>
                    <div className="d-inline-block ms-4 d-xl-none" >
                        <div className="mobile-nav-wrap">                    
                            <div id="hamburger" onClick={handleMobileMenu}>
                                <i className="fal fa-bars"></i>
                            </div>
                            <MobileMenu mobileMenu={mobileMenu} handleMobileMenu={handleMobileMenu} />
                        </div>
                        <div className="overlay"></div>
                    </div>
                </div>
            </div>
        </div>

    </header>

    </>
  )
}

export default Navbar;