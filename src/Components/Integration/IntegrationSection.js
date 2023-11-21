import integration1 from "../../assets/img/linkbase/PageImgs/integrations_img1.png";
import integration2 from "../../assets/img/linkbase/PageImgs/integrations_img2.png";
import integration3 from "../../assets/img/linkbase/PageImgs/integrations_img3.png";

const IntegrationSection = () => {
  return (
    <section className="content-block-wrapper section-padding bg-circle fix">
      <div className="col-xl-12 col-lg-12 pe-xl-4 col-12">
        <img src={integration1} alt="" />
      </div>
      <div className="col-xl-12 col-lg-12 pe-xl-4 col-12">
        <img src={integration2} alt="" />
      </div>
      <div className="col-xl-12 col-lg-12 pe-xl-4 col-12">
        <img src={integration3} alt="" />
      </div>
    </section>
  );
};

export default IntegrationSection;