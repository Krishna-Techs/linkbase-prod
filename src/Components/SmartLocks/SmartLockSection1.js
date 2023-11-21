import LinkBaseImg7 from '../../assets/img/linkbase/PageImgs/7.png';
import LinkBaseImg14 from '../../assets/img/linkbase/PageImgs/14.png';

const SmartLockSection1 = () => {
  return (
    <section className="content-block-wrapper section-padding bg-circle fix">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 ps-xl-5 col-lg-6 col-12 mt-5 mt-lg-0">
            <div className="content-block-img">
              <img src={LinkBaseImg14} alt="" />
            </div>
            <div className="section-title-3">
              <h5>For you</h5>
            </div>
            <div className="checked-features-list style-2 smart1">
              <ul>
                <li><spam className="text-color2">Hands Free:</spam> Auto generate automated unlock codes for each guest based on the booking.</li>
                <li><spam className="text-color2">Secure:</spam> Keep security as a priority by ensuring all guests receive a unique code.</li>
                <li><span className="text-color2">Efficient:</span> Keep permanent codes for your team and cleaners and automated temporary codes for your guests.</li>
              </ul>
            </div>
          </div>            
          <div className="col-xl-6 ps-xl-5 col-lg-6 col-12 mt-5 mt-lg-0">
            <div className="content-block-img">
              <img src={LinkBaseImg7} alt="" />
            </div>
            <div className="section-title-3">
              <h5>For your Guests</h5>
            </div>
            <div className="checked-features-list style-2">
              <ul>
                <li><spam className="text-color2">Easy one touch Unlock:</spam> Your guests will be able to lock and unlock right from your guest web app (Only during their booking date and times)</li>
                <li><spam className="text-color2">Convenient:</spam> Guests will be able to find the door code on the web app as well as will be sent to them automatically via SMS.</li>
                <li><span className="text-color2">Modern Experience:</span> Immerse your guests in a low touch, high tech modern hospitality experience!</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartLockSection1;
