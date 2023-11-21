import { Link } from "react-router-dom";
import LinkBaseBannerBg from '../../assets/img/linkbase/LinkBaseBG/Multi.png';

const HomeSection1 = () => {
    return (
        <section className="cta-promo-wrapper bg-cover" style={{backgroundImage: `url(${LinkBaseBannerBg})`}}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12 text-center col-12">
                        <div className="cta-heading">
                            <h5 className="mb-0">Check out the Power of YOUR Guest Web app</h5>
                            <p className="mt-3">Take It for a Spin and Discover How It Can Transform Your Business, Delivering a <br/>Remarkable Digital Guest Experience.</p>
                        </div>
                        <Link to='https://www.figma.com/proto/toIhSrsCfgSkQ4vFspSRVL/Linkbase-Web-Platform?type=design&node-id=109-157&t=aB2IlKqbdjvbvT3w-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=109%3A157&mode=design' className="theme-btn style-3 white mt-3" target="_blank">Check Out The Example Web App</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeSection1;