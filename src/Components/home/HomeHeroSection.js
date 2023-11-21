import { Link } from "react-router-dom";
import StreamlineBannerBg from '../../assets/img/linkbase/LinkBaseBG/BluebG.png';
import HomeSectionVideo from '../Video/HomeSectionVideo';

const HomeHeroSection = () => {
    return (
        <section className="content-block-wrapper section-padding bg-circle fix bg11" style={{backgroundImage: `url(${StreamlineBannerBg})`}}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6 col-12 mt-5 mt-lg-0 order-2 order-lg-1">
                        <div className="section-title-3">
                            <h1 className="text-white">Digitize and Monetize your Guest Journey.</h1>
                            <p className="text-white">A platform that helps you streamline and configure every aspect of Your Guest Journey with Custom Automations, AI-driven Upsells, and your self branded Intuitive Guest Web App.</p>
                        </div>
                        <Link to='http://admin.linkbase.ca' target="_blank" className="theme-btn style-3 homebtn1 mt-30">Start Free</Link>
                        <Link to='https://youtu.be/dUngkUQrQgk?si=Ud08WeY1dVP69X4m' target="_blank" className="theme-btn style-3 homebtn2 mt-30 ms-2">Watch how it works</Link>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-12 order-1 order-lg-2">
                        <div className="content-block-img">
                            <HomeSectionVideo/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeHeroSection;