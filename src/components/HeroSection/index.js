import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Video from "../../videos/video.mp4";
import "./style.css";

import {
  HeroContainer,
  HeroBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id="home">
      <HeroBg>
        <video className="videoTag" autoPlay loop muted>
          <source src={Video} type="video/mp4" />
        </video>
        {/* <VideoBg  autoPlay loop muted src={Video} type='video/mp4' /> */}
      </HeroBg>
      <HeroContent>
        <HeroH1>Virtual Study Made Easy</HeroH1>
        <HeroP>Sign Up today access all notes and assignment for free</HeroP>
        <HeroBtnWrapper>
          <NavLink
            to="/notes/notes"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            className="btn"
          >
            Get Started
          </NavLink>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
