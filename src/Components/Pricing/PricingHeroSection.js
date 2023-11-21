import React from "react";

const PricingHeroSection = () => {
  return (
    <section className="our-services-box-wrapper section-padding bg-gray">
      <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-lg-12 text-center col-12">
            <div className="cta-heading">
              <h1>Linkbase Pricing</h1>
              <p>
                As a startup we focus on flexible pricing and focus more on
                mutual growth
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container mt-5">
        <div className="row">
          {PricingData.map((data) => (
            <div className="col-xl-4 col-md-6" key={data.id}>
              <div className="single-services-box sb1">
                <div className="icon">
                  <img src={data.img} alt="" />
                </div>
                <div className="content">
                  <h6>{data.title}</h6>
                  <p id="textp">{data.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </section>
  );
};

export default PricingHeroSection;
