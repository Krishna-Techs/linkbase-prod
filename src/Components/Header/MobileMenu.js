import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const MobileMenu = ({mobileMenu, handleMobileMenu}) => {
const [toggle, setToggle] = useState(false) 

return (
    <div className={mobileMenu ? 'mobile-nav' : 'mobile-nav show'}>
        <button onClick={handleMobileMenu} type="button" className="close-nav">
            <i className="fal fa-times-circle"></i>
        </button>
        <nav className="sidebar-nav">
            <ul className="metismenu" id="mobile-menu">
                <li><Link to="/" onClick={handleMobileMenu}>HOME</Link></li>
                <li><Link to="#" onClick={() => setToggle(!toggle)} >FEATURES</Link>
                {toggle && (
                    <ul className="sub-menu">
                        <li><Link to="/Check-in" onClick={handleMobileMenu}>Contactless Check In</Link></li>
                        <li><Link to="/check-outs" onClick={handleMobileMenu}>Contactless Check Out</Link></li>
                        <li><Link to="/digital-guidebooks" onClick={handleMobileMenu}>Digital Guidebooks</Link></li>
                        <li><Link to="/smart-locks" onClick={handleMobileMenu}>Smart Locks</Link></li>
                        <li><Link to="/direct-upsells" onClick={handleMobileMenu}>Direct Upsells</Link></li>
                        <li><Link to="/affiliate-upsells" onClick={handleMobileMenu}>Affiliate Upsells</Link></li>
                        <li><Link to="/digital-guidebooks" onClick={handleMobileMenu}>Digital Guidebooks</Link></li>
                        <li><Link to="/smart-locks" onClick={handleMobileMenu}>Smart Locks</Link></li>
                        <li><Link to="/combatFrauds" onClick={handleMobileMenu}>Guest Screening and Verification</Link></li>
                        <li><Link to="/combatFrauds" onClick={handleMobileMenu}>Strata documents or rental agreements</Link></li>
                        <li><Link to="/combatFrauds" onClick={handleMobileMenu}>Security Deposits and Waivers</Link></li>
                        <li><Link to="/streamline" onClick={handleMobileMenu}>Tailored automations and workflows</Link></li>
                        <li><Link to="/streamline" onClick={handleMobileMenu}>Fully customizable guest journey</Link></li>
                        <li><Link to="/streamline" onClick={handleMobileMenu}>Wifi and property information</Link></li>
                        <li><Link to="/increaseRepeatGuests" onClick={handleMobileMenu}>Guest Data collection</Link></li>
                        <li><Link to="/increaseRepeatGuests" onClick={handleMobileMenu}>Increased 5 star reviews</Link></li>
                        <li><Link to="/integrations" onClick={handleMobileMenu}>CRM integration</Link></li>
                        <li><Link to="/increaseRepeatGuests" onClick={handleMobileMenu}>AI messaging</Link></li>
                    </ul>
                )}
                </li>
                {/* <li><Link to="/hospitality" onClick={handleMobileMenu}>SOLUTIONS</Link></li> */}
                <li><Link to="/integrations" onClick={handleMobileMenu}>INTEGRATIONS</Link></li>
                <li><Link to="/pricing" onClick={handleMobileMenu}>PRICING</Link></li>
                <li><Link to="/company" onClick={handleMobileMenu}>COMPANY</Link></li>
            </ul>
        </nav>
        <hr />
        <div className="action-bar">
            <Link to="https://calendly.com/shiven-7/30min" target="_blank" className="theme-btn style-3" onClick={handleMobileMenu}>BOOK A DEMO</Link>
            <Link to="https://admin.linkbase.ca/" target='_blank' className="theme-btn style-3" onClick={handleMobileMenu}>SIGN IN</Link>
        </div>
    </div>    
)
}

export default MobileMenu