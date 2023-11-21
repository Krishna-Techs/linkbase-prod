import saas7 from "../../assets/img/linkbase/PageImgs/saas7.png";
import saas8 from "../../assets/img/linkbase/PageImgs/saas8.png";
import saas9 from "../../assets/img/linkbase/PageImgs/saas9.png";
import saas10 from "../../assets/img/linkbase/PageImgs/saas10.png";
import saas11 from "../../assets/img/linkbase/PageImgs/saas11.png";

const HospitalitySaasSection7 = () => {
  return (
    <section className="content-block-wrapper section-padding bg-circle fix bg10">
      <div className="container">
          <div className="row align-items-center">
              <div className="col-lg-12 text-center col-12">
                  <div className="cta-heading">
                      <h5>The Guest App</h5>
                      <p>For guests, the gateway to control all aspects of the smart property</p>
                  </div>
              </div>
          </div>
      </div><br></br><br></br>

      <div className="container">
        <div className="row align-items-center pb-0">
          <div className="col-xl-4 col-lg-4 col-12 mt-5 mt-lg-0 order-2 order-lg-1">
            <div className="section-title-3">
              <h6>Simple to use</h6>
              <h5>Maintain control of the whole room in one app</h5>
              <p>When operating the guest app, you can control all the onboarded devices, everything from the thermostat to the lights and curtains</p>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8 col-12 order-1 order-lg-2">
            <div className="content-block-img">
              <img src={saas7} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row align-items-center pb-0">
          <div className="col-xl-4 col-lg-4 col-12 mt-5 mt-lg-0 order-1 order-lg-2">
            <div className="section-title-3">
              <h6>New Standard</h6>
              <h5>Contactless Door Locks</h5>
              <p>Our door locks are cloud base soltuions for access control. A guest has the ability to control the door lock for the amount of thier stay making the check-in and check-out process very easy</p>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8 col-12 order-2 order-lg-1">
            <div className="content-block-img">
              <img src={saas8} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row align-items-center pb-0">
          <div className="col-xl-4 col-lg-4 col-12 mt-5 mt-lg-0 order-2 order-lg-1">
            <div className="section-title-3">
              <h6>User Friendly</h6>
              <h5>Multiple Devices Easily Accessible</h5>
              <p>Presented to the guests are a list of all devices in the property, they can easily access all devices and control them to their liking</p>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8 col-12 order-1 order-lg-2">
            <div className="content-block-img">
              <img src={saas9} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row align-items-center pb-0">
          <div className="col-xl-4 col-lg-4 col-12 mt-5 mt-lg-0 order-1 order-lg-2">
            <div className="section-title-3">
              <h6>User Centered</h6>
              <h5>Frictionlessly extend or check-out your stay</h5>
              <p>We have made it easy for guests to control their stay right from the app, check-out and extending their stay can be done from the app</p>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8 col-12 order-2 order-lg-1">
            <div className="content-block-img">
              <img src={saas10} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row align-items-center pb-0">
          <div className="col-xl-4 col-lg-4 col-12 mt-5 mt-lg-0 order-2 order-lg-1">
            <div className="section-title-3">
              <h6>Stress Free</h6>
              <h5>Easy Onboarding Process</h5>
              <p>All guests get the access to thier stay to their phones, making the onboarding process simple and quick to get them into the property</p>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8 col-12 order-1 order-lg-2">
            <div className="content-block-img">
              <img src={saas11} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HospitalitySaasSection7;
