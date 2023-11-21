import LinkBaseImg23 from "../../assets/img/linkbase/PageImgs/23.png";
import LinkBaseImg24 from "../../assets/img/linkbase/PageImgs/24.png";

const CombatFraudsSection3 = () => {
  return (
    <section className="content-block-wrapper section-padding bg-circle fix">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 ps-xl-5 col-lg-6 col-12 mt-5 mt-lg-0">
            <div className="content-block-img">
              <img src={LinkBaseImg24} alt="" />
            </div>
            <div className="section-title-3">
              <h5>Safety Deposits</h5>
              <p>
                Linkbase initiates a card hold 2 days before check-in. You have
                a 2-day window post-checkout to collect the deposit; it's
                automatically canceled afterward.{" "}
              </p>
              <p>
                The deposit is held from 2 days before check-in through the
                guest's stay and released 2 days post-checkout
              </p>
            </div>
          </div>
          <div className="col-xl-6 ps-xl-5 col-lg-6 col-12 mt-5 mt-lg-0">
            <div className="content-block-img">
              <img src={LinkBaseImg23} alt="" />
            </div>
            <div className="section-title-3">
              <h5>Damage Waiver</h5>
              <p>
                Consider it a form of self-insurance, with a 7% fee paid by the
                guest. <br />
                The damage waiver fee is directly deposited into your Stripe
                account, just like an upsell.
                <br />
                It's a smart way to set aside funds for unforeseen
                circumstances!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CombatFraudsSection3;
