import React from "react";
import 'animate.css';
import Icon1 from '../../images/network.jpg'
import Icon2 from '../../images/inspire.jpg'
import Icon3 from '../../images/earn.jpeg'
import "../Services/"
import { ServicesContainer,ServicesH1,ServicesWrapper,ServicesCard,ServicesIcon,ServicesH2,ServicesP } from "./ServicesElements";
import "./style.css";


const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
      <div className="animate__animated animate__flipInY">
        <ServicesCard>
          
          <ServicesIcon src={Icon1} />
          <ServicesH2>Share</ServicesH2>
          <ServicesH2>"You press the share, we do the rest"</ServicesH2>

          <ServicesP>
            We provide a platform for all the users out there to share their valuable contributions towards nature.
          </ServicesP>
        </ServicesCard>
        </div>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Inspiring People</ServicesH2>

          <ServicesH2>"wouldn't you like to inspire<span>&#191;</span>"</ServicesH2>
          <ServicesP>
            As the posts are shared, and the positivity spreads, more people get motivated towards serving nature.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Earn</ServicesH2>
          <ServicesP>
            Get exciting rewards for your valuable contributions towards the Mother Nature in the form of green points. 
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
