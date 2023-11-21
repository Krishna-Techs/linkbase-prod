import React from "react";
import { Link } from "react-router-dom";

const PricingSection1 = () => {
  return (
    <section className="content-block-wrapper section-padding bg-circle fix">
      <div className="container">
        <div className="row single-services-box">
          <div className="col-xl-12 col-lg-12 col-12 mt-5 mt-lg-0 order-2 order-lg-1">
            <div className="section-title-3 pricingTrial">
              <h5>Our Guarantee</h5>
              <p>With Linkbase, it's a no-brainer decision- Harness the power of automation to streamline operations from Automated locks to Noise management, all without breaking the bank! </p><br></br>
              <p>Here's the deal:  Our industry-leading AI-powered Upsells boast an average cash ROI of over 9x- we're so confident in our software that we guarantee if the Upsells don't cover your plan's cost, it's on us. It's a risk-free opportunity you can't afford to miss!</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row single-services-box">
          <div className="col-xl-8 col-lg-8 col-12 mt-5 mt-lg-0 order-2 order-lg-1">
            <div className="section-title-3 pricingTrial">
              <h5>Trial Version</h5>
              <p>Trial for 3 months</p>
            </div>
            <br></br>
            <div className="section-title-3">
              <h5>Free</h5>
              <p>
                Includes Automated Lock Codes, Automated Noise Management, Digital Guest Verification, Admin Panel , Self Branded Guest Web App, Unlimited Digital Guidebooks, Step By Step Picture Instructions, Direct and Affiliate Upsells and Integration with PMS (Property Management Software) of your Choice
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 ps-xl-5 col-12 order-1 order-lg-2 ptrial">
            <div className="section-title-3 pricingTrial1">
              <h5>$0</h5>
              <Link to="http://admin.linkbase.ca" target="_blank" className="theme-btn style-3 white mt-3">
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-md-6">
            <div className="single-services-box">
              <div className="section-title-3 monthly-pricing">
                <h5>Monthly Pricing</h5>
                <p>After 3 month trial</p>
              </div>
              <br></br>
              <div className="section-title-3">
                <p>
                  <span className="monthly-amount1">$15</span>{" "}
                  <strong>/Per Month/ Per Property</strong>
                </p>
                <br></br>
                <p>
                  Includes Admin Panel , Self Branded Guest Web App, Unlimited Digital Guidebooks, Step By Step Picture Instructions, Direct and Affiliate Upsells and Integration with PMS (Property Management Software) of your Choice
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-md-6">
            <div className="single-services-box">
              <div className="section-title-3 monthly-pricing">
                <h5>Monthly Pricing</h5>
                <p>After 3 month trial</p>
              </div>
              <br></br>
              <div className="section-title-3">
                <p>
                  <span className="monthly-amount1">$25</span>{" "}
                  <strong>/Per Month/ Per Property</strong>
                </p>
                <br></br>
                <p>
                  Includes Automated Lock Codes, Automated Noise Management, Digital Guest Verification, Admin Panel , Self Branded Guest Web App, Unlimited Digital Guidebooks, Step By Step Picture Instructions, Direct and Affiliate Upsells and Integration with PMS (Property Management Software) of your Choice
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection1;
