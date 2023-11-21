import LinkBaseImg17 from "../../assets/img/linkbase/PageImgs/17.png";

const UpsellsSection1 = () => {
  return (
    <section className="content-block-wrapper section-padding bg-circle fix">
      <div className="container">
        <div className="row align-items-center pb-0">
          <div className="col-xl-5 col-lg-5 ps-xl-5 col-12 order-2 order-lg-1">
            <div className="content-block-img">
              <img src={LinkBaseImg17} alt="" />
            </div>
          </div>
          <div className="col-xl-7 col-lg-7 col-12 mt-5 mt-lg-0 order-1 order-lg-2">
            <div className="section-title-3">
              <h5>Double your profitability per guest with Upsells</h5>
              <p>
                <span className="text-color2">Upsells in numbers: </span>
                <br />
                <br />
                Accommodation Accounts for <strong>30%</strong> of Your Guests'
                Travel Budget. The Typical Gross Margin for a Professional
                Property Manager Is <strong>20-25%.</strong> The Remaining{" "}
                <strong>70%</strong> Is Allocated to Experiences, Offering
                Significant Ancillary and Upsell Revenue Opportunities.{" "}
                <strong>100%</strong> Of Upsell Revenue flows directly to the
                Vacation Rental Manager.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpsellsSection1;
