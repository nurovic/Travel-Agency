import React from 'react'
import styled from "styled-components";
import img from '../assets/location-image.jpg'
import travel from '../assets/travel.jpeg'

const Location = () => {
  return (
    <Section>
        <div className="background">
            <img className='img' src={img} alt="" />
        </div>
        <div className="stage-container">
            <div className="left-panel">
                <span className="title">Explore the world</span>
                <p className="title-bold">
                    It's a Big World Out 
                    <span> There, Go Explore</span>
                </p>
                <span className="lorem">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, error. Earum pariatur officiis labore quam dolores corrupti eum deleniti aliquam.</span>
            {/* <div className="label-container">
                <div className="location inla">
                    <label htmlFor="">Lo"</label>
                    <input type="text" />
                </div>
                <div className="date inla">
                    <label htmlFor=""></label>
                    <input type="text" />
                </div>
                <div className="search"></div>
            </div> */}
            </div>
            <div className="right-panel">
                <img src={travel} alt="" />
            </div>
        </div>
    </Section>
  )
}

export default Location

const Section = styled.section`
    margin: 0 130px;
    position: relative;

    .background{
        height: 100%;
        img{
        width: 100%;
        object-fit: contain;
        }
    }
    .stage-container{
        display: flex;
        align-items: center;
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        .left-panel{
            width: 50%;

            .title{
                color: red;
            }
            .title-bold{
                display: flex;
                flex-direction: column;
                font-size:50px;
                font-weight: 700;
                letter-spacing: 4px;
                margin: 20px 0;
            }
            .lorem{
                color: gray;
                font-size: 12px;
                letter-spacing: 2px;

            }
            .inla{
                display: flex;
                flex-direction: column;
            }
            .label-container{
                display: flex;
                flex-direction: row;
                border: 2px #fff solid;
                height: 50px;
                width: 80%;
                border-radius: 50px;
                background: #ffffff;
                -webkit-box-shadow: 11px 2px 28px -4px rgba(191,191,191,1);
                -moz-box-shadow: 11px 2px 28px -4px rgba(191,191,191,1);
                box-shadow: 11px 2px 28px -4px rgba(191,191,191,1);
            }
        }
        .right-panel{
            height: 80%;
            margin-left: 20%;
            img{
            align-items: center;
            height: 90%;
            border-radius: 50%;
           }
        }
    }
`