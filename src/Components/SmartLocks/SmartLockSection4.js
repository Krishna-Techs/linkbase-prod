import LinkBaseImg16 from "../../assets/img/linkbase/PageImgs/16.png";
import downloadPdf from "../../assets/documents/Linkbase_supportedproducts.pdf";

const SmartLockSection4 = () => {
  return (
    <section className="content-block-wrapper section-padding bg-circle fix bg10">
      <div className="container">
        <div className="row align-items-center section-padding pb-0">
          <div className="col-xl-6 col-lg-6 col-12 mt-5 mt-lg-0 order-2 order-lg-1">
            <div className="section-title-3">
              <h5>Supported Devices:</h5>
              <p>
                We integrate with some of the major brands across the globe so
                you can simply pick a brand and lock of your choice and automate
                your keyless check-ins through Linkbase!
              </p>
              <br />
              <p>
                Here are the list of brands and supported Devices: Picture of
                the brands. List of supported devices
              </p>
            </div>
            <a
              href={downloadPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="theme-btn style-3 white mt-30"
            >
              DOWNLOAD
            </a>
          </div>
          <div className="col-xl-6 col-lg-6 ps-xl-5 col-12 order-1 order-lg-2">
            <div className="content-block-img">
              <img src={LinkBaseImg16} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartLockSection4;
