import LinkBaseImg26 from "../../assets/img/linkbase/PageImgs/26.png";

const StreamlineSection2 = () => {
  return (
    <section className="content-block-wrapper section-padding bg-circle fix">
      <div className="container">
        <div className="row align-items-center pb-0">
          <div className="col-xl-6 col-lg-6 col-12 mt-5 mt-lg-0 order-2 order-lg-1">
            <div className="section-title-3">
              <p>
                <span className="text-color">With Linkbase,</span> you can{" "}
                <span className="text-color2">
                  fully customise each guest journey
                </span>{" "}
                per property. Include verification for some and skip it for
                others. Add strata documents when needed and omit them when not
                and so on and so forth for every step of the way of the guest
                journey.
              </p>
              <br />

              <p>
                Provide all key information like{" "}
                <span className="text-color2">
                  wifi and other property information
                </span>{" "}
                in one{" "}
                <span className="text-color2">
                  simple centralised location.
                </span>{" "}
                Instead of sending long messages- make it easier and more
                convenient for your guests.
              </p>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 ps-xl-5 col-12 order-1 order-lg-2">
            <div className="content-block-img">
              <img src={LinkBaseImg26} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StreamlineSection2;
