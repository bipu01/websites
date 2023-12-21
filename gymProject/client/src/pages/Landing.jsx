import React from "react";
import FirstSlide from "../components/firstPage/firstSlide";
import styled from "styled-components";
import SecondSlide from "../components/secondPage/secondSlide";
import ThirdSlide from "../components/thirdPage/ThirdSlide";
import FourthSlide from "../components/fourthPage/FourthSlide";

const Landing = () => {
  return (
    <Wrapper>
      <FirstSlide />
      <SecondSlide />
      <ThirdSlide />
      <FourthSlide />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #0b0d23;
  /* overflow: hidden; */
`;

export default Landing;
