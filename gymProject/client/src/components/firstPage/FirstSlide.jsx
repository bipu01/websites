import React from "react";
import styled from "styled-components";
import PrimaryBtn from "../buttons/primaryBtn";
import SecondaryBtn from "../buttons/secondaryBtn";

const FirstSlide = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="text-col">
          <div className="heroText">INVEST IN YOUR FITNESS</div>
        </div>
        <div className="bg1Container">
          <img src="/images/bg1.png" alt="bg image" className="bg1" />
        </div>
      </div>

      <PrimaryBtn name={"Enroll now"} nameClass={"primary-onLeft"} />
      <SecondaryBtn name={" See more "} nameClass={"secondary-onLeft"} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow: hidden;

  .container {
    position: relative;
    height: 95vh;
    /* width: 100vw; */
    .text-col {
      position: absolute;
      top: 25%;
      right: 30%;
      width: 65%;
      gap: 2rem;
      .heroText {
        z-index: 1;
      }
    }

    .bg1Container {
      .bg1 {
        height: 110vh;
        min-height: 30rem;
        width: clamp(45rem, 80vw, 90rem);

        /* height: 110vh;
        min-height: 30rem;
        width: clamp(50rem, 80vw, 90rem); */
        object-fit: contain;
        position: absolute;
        left: clamp(10rem, 25vw, 120rem);
      }
    }
  }
`;

export default FirstSlide;
