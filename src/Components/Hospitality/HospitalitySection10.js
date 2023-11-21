import hospitalityImg2 from "../../assets/img/linkbase/PageImgs/hospitalityImg2.jpg";
import { Link } from "react-router-dom";

const HospitalitySection10 = () => {
  return (
    <section className="content-block-wrapper section-padding pt-0 pb-0 bg-circle fix" >
      <div className="col-xl-12 col-lg-12 pe-xl-4 col-12">
        <Link to="https://calendly.com/shiven-7/30min" target="_blank"><img src={hospitalityImg2} alt="" /></Link>
      </div>
    </section>
  );
};

export default HospitalitySection10;
