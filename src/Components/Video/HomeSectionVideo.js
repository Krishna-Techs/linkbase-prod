import thumbnail from '../../assets/img/thumbnail.png';
import 'react-modal-video/scss/modal-video.scss';
import ModalVideo from 'react-modal-video';
import { useState } from 'react';


const HomeSectionVideo = () => {
    const [isOpen, setOpen] = useState(false);
    
    return (
        <>
            <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isOpen}
                videoId="dUngkUQrQgk"
                onClose={() => setOpen(false)}
            />
            <div className="video-popup-wrapper d-flex justify-content-center align-items-center bg-cover bg-center" style={{backgroundImage: `url(${thumbnail})`}}>
                <div className="video-play-btn">
                    <span onClick={() => setOpen(true)} className="popup-video play-video" style={{cursor: 'pointer'}}><i className="fas fa-play"></i></span>                     
                </div>
            </div>
        </>
    )
}

export default HomeSectionVideo;