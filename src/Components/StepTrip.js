import React from 'react'
import styled from "styled-components";
import chat from '../assets/chat.png'
import local from '../assets/local.png'
import date from '../assets/date.png'

const StepTrip = () => {
  return (
    <Section>
        <div className="title-container">
            <div className="title">3  STEPS OR THE PERFECT TRIP</div>
            <div className="bold-title">Find Travel Perfection</div>
            <div className="summary">Lorem ipsum dolor sit amet, ctetur adipiscing elit, sed do eiusmod tempor incididunt ut.</div>
        </div>
        <div className='caption'>
        <div className="sections-container">
            <div className="image">
                <img src={chat} alt="" />
            </div>
            <div className="section-title">Tell Us What You Want To Do</div>
            <div className="section-summary">Lorem ipsum dolor sit amet, ctetur adipiscing elit.</div>
        </div>
        <div className="divide"></div>
        
        <div className="sections-container">
            <div className="image">
                <img src={local} alt="" />
            </div>
            <div className="section-title">Tell Us What You Want To Do</div>
            <div className="section-summary">Lorem ipsum dolor sit amet, ctetur adipiscing elit.</div>
        </div>
        <div className="divide"></div>
        
        <div className="sections-container">
            <div className="image">
                <img src={date} alt="" />
            </div>
            <div className="section-title">Tell Us What You Want To Do</div>
            <div className="section-summary">Lorem ipsum dolor sit amet, ctetur adipiscing elit.</div>
        </div>        
        </div>
    </Section>
  )
}

export default StepTrip

const Section = styled.section`
margin: 0 130px;

    .title-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        .title{
            color: red;
            letter-spacing: 1px;
        }
        .bold-title{
            font-weight: 700;
            color: #02026d;
            font-size: 40px;
            letter-spacing: 2px;
            margin: 20px 0;
        }
        .summary{
            color: #5d5d5d8d;
        }
    }
            .caption{
                display: flex;

        justify-content: space-between;
                align-items: center;
                .sections-container{
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-top: 50px;
                height: 250px;
                width:300px;
                .image{
                    display: flex;
                    justify-content: center;
                }
                img{
                    height:80px
                }
                .section-title{
                    font-weight: 700;
                    text-align: center;
                    font-size:20px;
                    margin: 20px 0;
                    letter-spacing: .2px;
                }
                .section-summary{
                    color: #5d5d5d8d;
                    text-align: center;
                    letter-spacing: 1px;
                    line-height: 30px;
                }
            }
            .divide{
                display: flex;
                height: 120px;
                justify-content: center;
                align-items: center;
                border-left: 5px solid #acacac33;
                margin:0 30px;
            }
            }

`