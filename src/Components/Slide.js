import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

import city from "../assets/city.jpeg";
// import required modules
import { Pagination } from "swiper";

const Slide = () => {
  return (
    <>
      <Swip
        slidesPerView={4}
        spaceBetween={15}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="slide"
      >
        <SwiperSlide className="swipers">
          <div className="slide-container">
            <div className="image-container">
              <img src={city} alt="" />
            </div>
            <div className="info-container">
              <div className="destination-title">
                Enjoy The Beauty Of The Rialto Bridge
              </div>
              <div className="city">Venezia, Italy</div>
              <div className="reviews">
                <div className="star-reviews-container">
                  <div className="star-reviews">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="fontawesome-icon"
                    />
                    <span className="puan">4.8</span>
                  </div>
                  <div className="reviews">
                    <span>(2.9k Review)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swipers">
          <div className="slide-container">
            <div className="image-container">
              <img src={city} alt="" />
            </div>
            <div className="info-container">
              <div className="destination-title">
                Enjoy The Beauty Of The Rialto Bridge
              </div>
              <div className="city">Venezia, Italy</div>
              <div className="reviews">
                <div className="star-reviews-container">
                  <div className="star-reviews">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="fontawesome-icon"
                    />
                    <span className="puan">4.8</span>
                  </div>
                  <div className="reviews">
                    <span>(2.9k Review)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swipers">
          <div className="slide-container">
            <div className="image-container">
              <img src={city} alt="" />
            </div>
            <div className="info-container">
              <div className="destination-title">
                Enjoy The Beauty Of The Rialto Bridge
              </div>
              <div className="city">Venezia, Italy</div>
              <div className="reviews">
                <div className="star-reviews-container">
                  <div className="star-reviews">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="fontawesome-icon"
                    />
                    <span className="puan">4.8</span>
                  </div>
                  <div className="reviews">
                    <span>(2.9k Review)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swipers">
          <div className="slide-container">
            <div className="image-container">
              <img src={city} alt="" />
            </div>
            <div className="info-container">
              <div className="destination-title">
                Enjoy The Beauty Of The Rialto Bridge
              </div>
              <div className="city">Venezia, Italy</div>
              <div className="reviews">
                <div className="star-reviews-container">
                  <div className="star-reviews">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="fontawesome-icon"
                    />
                    <span className="puan">4.8</span>
                  </div>
                  <div className="reviews">
                    <span>(2.9k Review)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swipers">
          <div className="slide-container">
            <div className="image-container">
              <img src={city} alt="" />
            </div>
            <div className="info-container">
              <div className="destination-title">
                Enjoy The Beauty Of The Rialto Bridge
              </div>
              <div className="city">Venezia, Italy</div>
              <div className="reviews">
                <div className="star-reviews-container">
                  <div className="star-reviews">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="fontawesome-icon"
                    />
                    <span className="puan">4.8</span>
                  </div>
                  <div className="reviews">
                    <span>(2.9k Review)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swipers">
          <div className="slide-container">
            <div className="image-container">
              <img src={city} alt="" />
            </div>
            <div className="info-container">
              <div className="destination-title">
                Enjoy The Beauty Of The Rialto Bridge
              </div>
              <div className="city">Venezia, Italy</div>
              <div className="reviews">
                <div className="star-reviews-container">
                  <div className="star-reviews">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="fontawesome-icon"
                    />
                    <span className="puan">4.8</span>
                  </div>
                  <div className="reviews">
                    <span>(2.9k Review)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swipers">
          <div className="slide-container">
            <div className="image-container">
              <img src={city} alt="" />
            </div>
            <div className="info-container">
              <div className="destination-title">
                Enjoy The Beauty Of The Rialto Bridge
              </div>
              <div className="city">Venezia, Italy</div>
              <div className="reviews">
                <div className="star-reviews-container">
                  <div className="star-reviews">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="fontawesome-icon"
                    />
                    <span className="puan">4.8</span>
                  </div>
                  <div className="reviews">
                    <span>(2.9k Review)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swipers">
          <div className="slide-container">
            <div className="image-container">
              <img src={city} alt="" />
            </div>
            <div className="info-container">
              <div className="destination-title">
                Enjoy The Beauty Of The Rialto Bridge
              </div>
              <div className="city">Venezia, Italy</div>
              <div className="reviews">
                <div className="star-reviews-container">
                  <div className="star-reviews">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="fontawesome-icon"
                    />
                    <span className="puan">4.8</span>
                  </div>
                  <div className="reviews">
                    <span>(2.9k Review)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swipers">
          <div className="slide-container">
            <div className="image-container">
              <img src={city} alt="" />
            </div>
            <div className="info-container">
              <div className="destination-title">
                Enjoy The Beauty Of The Rialto Bridge
              </div>
              <div className="city">Venezia, Italy</div>
              <div className="reviews">
                <div className="star-reviews-container">
                  <div className="star-reviews">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="fontawesome-icon"
                    />
                    <span className="puan">4.8</span>
                  </div>
                  <div className="reviews">
                    <span>(2.9k Review)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      
      </Swip>
    </>
  );
};

export default Slide;


const Swip = styled(Swiper)`
  margin: 20px 130px;
  padding:20px 5px 0 5px ;
  height: 500px;
  .swiper{
  }
  .swipers{
  width: 30px;
  .image-container {
    height: 280px;
    width: 280px;

    img {
      border-radius: 30px;
      height: 100%;
      width: 100%;
      object-fit: cover;
      filter: blur(0.4px);
    }
  }
  
  .info-container {
    margin-top: 20px;
    width: 300px;
    .destination-title {
      font-size: 25px;
      font-weight: 400;
      letter-spacing: 1px;
      line-height: 30px;
    }
    .city {
      color: #9c9b9bad;
      margin: 10px 0;
    }
    .star-reviews-container{
      display: flex;
      align-items: center;
      .star-reviews {
      display: flex;
      justify-content: center;
      width: 80px;
      padding: 9px 12px;
      border-radius: 40px;
      background: #ede32263;
      margin-right:15px ;
      .fontawesome-icon {
        color: #ede503;
        margin-right: 5px;
      }
    }
    .reviews{
      color:Gray
    }
    }
  }
}

 .swiper-pagination{
  position: absolute;
  height: 20px;
  top:0px;
} 

.swiper-pagination-bullet{
  float: right;
}
`