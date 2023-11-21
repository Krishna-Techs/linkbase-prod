import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import brandCarouselOneData from "./BrandCarouselOneData";


const BrandCarouselFour = () => {
    return (
            <section className="our-brand-showcase section-padding">
                <div className="container text-center">
                    <div className="row align-items-center">
                        <div className="col-lg-12 text-center col-12">
                        <div className="cta-heading">
                            <h5 className="mb-0">
                                Our Guest{" "}
                            <span className="diff-color">Journey!</span>
                            </h5>
                        </div>
                        </div>
                    </div>
                    <div className="brand-carousel-2 mt-5">
                    <Swiper
                            slidesPerView={5} 
                            spaceBetween={20} 
                            loop
                            breakpoints={{
                                "@0.00": {
                                    slidesPerView: 2,
                                    spaceBetween: 40,
                                    
                                },
                                "@0.75": {
                                    slidesPerView: 3,
                                    spaceBetween: 40,
                                    
                                },
                                "@1.00": {
                                    slidesPerView: 4,
                                    spaceBetween: 40,
                                    
                                },
                                "@1.50": {
                                    slidesPerView: 9,
                                    spaceBetween: 40,
                                },
                                }}
                        >
                            {
                                brandCarouselOneData.map((data) =>(
                                    <SwiperSlide className="single-brand-logo" key={data.id}>
                                    <div className='ourGuest'>
                                        <img className='brand-icons' src={data.brand} alt={data.name}/>
                                        <p>{data.name}</p>
                                    </div>
                                </SwiperSlide>
                                ))
                            }
                                    
                        </Swiper>
                    </div>
                </div>
            </section>
    )
}

export default BrandCarouselFour