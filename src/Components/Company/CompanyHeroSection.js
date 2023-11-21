import team1 from "../../assets/img/linkbase/teams/team1.jpeg";
import team2 from "../../assets/img/linkbase/teams/team2.jpeg";
import team3 from "../../assets/img/linkbase/teams/team3.jpg";
import team4 from "../../assets/img/linkbase/teams/team4.jpg";
import team5 from "../../assets/img/linkbase/teams/team5.jpeg";

import StreamlineBannerBg from "../../assets/img/linkbase/LinkBaseBG/BluebG.png";

const CompanyHeroSection = () => {
  return (
    <section className="content-block-wrapper section-padding bg-circle fix bg10"
      style={{ backgroundImage: `url(${StreamlineBannerBg})` }}>
      <div className="container">
          <div className="row align-items-center">
              <div className="col-lg-12 text-center col-12">
                  <div className="cta-heading">
                      <h1>Our Company</h1>
                  </div>
              </div>
          </div>
      </div>
      <div className="container">
        <div className="row align-items-center section-padding pb-0">
          <div className="col-xl-8 col-lg-8 col-12 order-2 order-lg-1">
            <div className="content-block-img">
              <img className="teams-1rh7ede" src={team1} alt="" />
            </div>
          </div>          
          <div className="col-xl-4 col-lg-4 col-12 pr-3 order-1 order-lg-2">
            <div className="content-block-img">
              <img className="teams-1rh7ede" src={team3} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row align-items-center section-padding pb-0">
          <div className="col-xl-4 col-lg-4 col-12 order-2 order-lg-1">
            <div className="content-block-img">
              <img className="teams-1rh7ede" src={team4} alt="" />
            </div>
          </div>          
          <div className="col-xl-8 col-lg-8 col-12 order-1 order-lg-2">
            <div className="content-block-img">
              <img className="teams-1rh7ede" src={team2} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row align-items-center section-padding pb-0">
          <div className="col-xl-12 col-lg-12 col-12 order-2 order-lg-1">
            <div className="content-block-img">
              <img className="teams-1rh7edee" src={team5} alt="" />
            </div>
          </div>          
        </div>
      </div>
    </section>
  );
};

export default CompanyHeroSection;