import React from "react";
import { Link } from "react-router-dom";

const PricingTableSection = () => {
  return (
    <section className="pricing-wrapper section-padding pricing-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="single-pricing-plan">
              <div className="package-head">
                <div className="package-title">
                  <h6 id="pack1">Trial Version</h6>
                </div>
              </div>
              <div className="package-features">
                <div className="checked-features-list style-2">
                  <ul>
                    <li>Automated Lock Codes</li>
                    <li>Automated Noise Management</li>
                    <li>Digital Guest Verification</li>
                    <li>Admin Panel</li>
                    <li>Self Branded Guest Web App</li>
                    <li>Unlimited Digital Guidebooks</li>
                    <li>Step By Step Picture Instructions</li>
                    <li>Direct and Affiliate Upsells</li>
                    <li>Integration with PMS (Property Management Software) of your Choice</li>
                  </ul>
                </div>
              </div>
              <div className="package-btn">
                <Link to="https://calendly.com/shiven-7/30min" target="_blank">Choose Plan</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="single-pricing-plan">
              <div className="package-head">
                <div className="package-title">
                  <h6 id="pack1">$15/property/month</h6>
                </div>
              </div>
              <div className="package-features">
                <div className="checked-features-list style-2">
                <ul>
                    <li id="notAvailable">Automated Lock Codes</li>
                    <li id="notAvailable">Automated Noise Management</li>
                    <li id="notAvailable">Digital Guest Verification</li>
                    <li>Admin Panel</li>
                    <li>Self Branded Guest Web App</li>
                    <li>Unlimited Digital Guidebooks</li>
                    <li>Step By Step Picture Instructions</li>
                    <li>Direct and Affiliate Upsells</li>
                    <li>Integration with PMS (Property Management Software) of your Choice</li>
                  </ul>
                </div>
              </div>
              <div className="package-btn">
                <Link to="https://calendly.com/shiven-7/30min" target="_blank">Choose Plan</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="single-pricing-plan">
              <div className="package-head">
                <div className="package-title">
                  <h6 id="pack1">$25/property/month</h6>
                </div>
              </div>
              <div className="package-features">
                <div className="checked-features-list style-2">
                  <ul>
                    <li>Automated Lock Codes</li>
                    <li>Automated Noise Management</li>
                    <li>Digital Guest Verification</li>
                    <li>Admin Panel</li>
                    <li>Self Branded Guest Web App</li>
                    <li>Unlimited Digital Guidebooks</li>
                    <li>Step By Step Picture Instructions</li>
                    <li>Direct and Affiliate Upsells</li>
                    <li>Integration with PMS (Property Management Software) of your Choice</li>
                  </ul>
                </div>
              </div>
              <div className="package-btn">
                <Link to="https://calendly.com/shiven-7/30min" target="_blank">Choose Plan</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTableSection;
