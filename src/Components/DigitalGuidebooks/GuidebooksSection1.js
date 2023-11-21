import LinkBaseImg12 from "../../assets/img/linkbase/PageImgs/12.png";
import LinkBaseImg13 from "../../assets/img/linkbase/PageImgs/13.png";

const GuidebooksSection1 = () => {
  return (
    <section className="content-block-wrapper section-padding bg-circle fix">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 ps-xl-5 col-lg-6 col-12 mt-5 mt-lg-0">
            <div className="content-block-img">
              <img src={LinkBaseImg12} alt="" />
            </div>
            <div>
              <div className="section-title-3 digital1">
                <h5>Why use digital Guidebooks?</h5>
                <p>
                  Did you know that 70% of consumers prefer self-service
                  solutions?
                </p>
                <br />
                <p>
                  Your guests crave independence. By offering digital
                  guidebooks, you can reduce questions and empower them to
                  explore like locals."
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-6 ps-xl-5 col-lg-6 col-12 mt-5 mt-lg-0">
            <div className="content-block-img">
              <img src={LinkBaseImg13} alt="" />
            </div>
            <div>
              <div className="section-title-3">
                <h5>Why do Linkbase Guidebooks stand-out?</h5>
              </div>
              <div className="checked-features-list style-2">
                <ul>
                  <li>
                    <spam className="text-color2">
                      Everything as part of one single guest Journey in one
                      single place!
                    </spam>{" "}
                    Instead of bombarding your guests with long messages or many
                    messages, simply let them immerse themselves in the guest
                    journey on the web app y and let them enjoy everything in
                    one single place!
                  </li>
                  <li>
                    <spam className="text-color2">
                      Engage with Rich, Interactive Designs
                    </spam>
                  </li>
                  <li>
                    Incorporate images, logos, URLs,text, and more to create a
                    visually engaging experience. Linkbase UI makes everything
                    look pristine and in it’s place that guests love and
                    cherish!
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuidebooksSection1;
