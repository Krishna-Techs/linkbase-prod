import LinkBaseImg3 from "../../assets/img/linkbase/PageImgs/3.png";
import LinkBaseImg21 from "../../assets/img/linkbase/PageImgs/21.png";

const CombatFraudsSection1 = () => {
  return (
    <section className="content-block-wrapper section-padding bg-circle pb-0 pt-0 fix">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 ps-xl-5 col-lg-6 col-12 mt-5 mt-lg-0">
            <div className="content-block-img">
              <img src={LinkBaseImg3} alt="" />
            </div>
            <div className="section-title-3 combat1">
              <h5>Guest Screening and Verification:</h5>
              <p>
                Linkbase Offers an Extra Layer in the Guest Journey for Guest
                Screening and Verification. Our Seamless Integrations with
                Third-Party Verification Partners Enable You to Effortlessly Add
                and Verify Guests.
              </p>
              <br />
              <p>
                Guests Are Prompted to Enter Their Details and Digitally Upload
                Their ID via the Web App. The Information Is Instantly Processed
                by Our Third-Party Verification Partners, and You Receive Prompt
                Notifications on Verification Outcomes.
              </p>
            </div>
          </div>
          <div className="col-xl-6 ps-xl-5 col-lg-6 col-12 mt-5 mt-lg-0">
            <div className="content-block-img">
              <img src={LinkBaseImg21} alt="" />
            </div>
            <div className="section-title-3">
              <h5>Strata documents or rental agreements:</h5>
              <p>
                We've made it incredibly easy for you to handle not only your
                standard agreements but also additional documents like damage
                waivers.
              </p>
            </div>
            <div className="checked-features-list style-2">
              <ul>
                <li>Simplify the signing process for your guests. </li>
                <li>
                  Automatically tailor the document flow for each property,
                  presenting only the necessary documents for guest signatures.{" "}
                </li>
                <li>Seamlessly collect and organize signed documents.</li>
              </ul>
            </div>
            <div className="section-title-3 mt-3">
              <p>
                At Linkbase, we've redefined the signing process, ensuring a
                smooth experience for both you and your guests.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CombatFraudsSection1;
