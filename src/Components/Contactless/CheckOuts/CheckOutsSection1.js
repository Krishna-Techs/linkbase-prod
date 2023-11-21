import LinkBaseImg6 from "../../../assets/img/linkbase/PageImgs/6.png";

const CheckOutsSection1 = () => {
  return (
    <section className="content-block-wrapper section-padding bg-circle fix">
      <div className="container">
        <div className="row align-items-center pb-0">
          <div className="col-xl-6 col-lg-6 col-12 mt-5 mt-lg-0 order-2 order-lg-1">
            <div className="section-title-3">
              <h5>Step-by-Step Checkout Instructions</h5>
              <p>
                Help your guests smoothly navigate the checkout process with
                detailed step-by-step instructions. Incorporate text and photos
                to provide clear guidance on how to leave the property.
              </p>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 ps-xl-5 col-12 order-1 order-lg-2">
            <div className="content-block-img">
              <img src={LinkBaseImg6} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckOutsSection1;
