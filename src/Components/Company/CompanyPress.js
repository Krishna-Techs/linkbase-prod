import CompanyPressData from "./CompanyPressData";
import { Link } from 'react-router-dom';
const CompanyPress = () => {
    return (
    <section className="content-block-wrapper section-padding">
        <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12 text-center col-12">
                  <div className="cta-heading">
                      <h1>Press</h1>
                      <p>Headlines about our comapny and its products</p>
                  </div>
              </div>
            </div>

            <div className="row">
            {
                CompanyPressData.map((press) => (
                    <div className="col-xl-4 col-md-6 col-12" key={press.id}>
                        <div className="single-news-card">
                            <Link to={press.btnLink} target="_blank">
                                <div className="post-thumb bg-cover" style={{backgroundImage: `url(${press.thumb})`}} />
                            </Link>
                            <div className="content">
                                <div className="post-meta d-flex mb-10 align-items-center">
                                    <div className="post-date me-4">
                                        <i className="icon-calendar" /> {press.date}
                                    </div>
                                    <div className="post-comment">
                                        <p>{press.name}</p>
                                    </div>
                                </div>
                                <p><Link to={press.btnLink} target="_blank">{press.title}</Link></p>
                                <div className="post-btn-link">
                                <Link to={press.btnLink} target="_blank" className="read-btn btn-color">{press.btnText} <i className="fal fa-long-arrow-right" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    </section>
    )
}

export default CompanyPress;