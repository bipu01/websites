import React from "react";
import styled from "styled-components";
import PrimaryBtn from "../buttons/primaryBtn";

const FourthSlide = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="text-col">
          <div className="heroText">Grow stronger every day</div>
          <p className="paragraph">
            Allow us to find the best in you. Give yourself a treat you deserve.
            Healthy body looks and feels different. When you treat yourself
            right, you see your complete self
          </p>
        </div>
        <div className="bgContainer">
          <img src="/images/pushup.png" alt="bg image" className="bg" />
        </div>

        <PrimaryBtn name={"Enroll now"} nameClass={"primary-onLeft"} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* overflow: hidden; */
  margin-top: 5vh;

  .container {
    position: relative;
    height: 95vh;
    overflow: hidden;

    .bgContainer {
      height: 100vh;
      width: 60rem;
      .bg {
        height: 95%;
        width: 50%;
        min-height: 30rem;
        object-fit: contain;
        position: absolute;
        right: -5%;
        top: 5%;
      }
    }

    .text-col {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 18%;
      right: 45%;
      width: 50vw;
      gap: 2rem;
    }
    .heroText {
      letter-spacing: 0.7rem;
      line-height: 5.5rem;
    }
  }
`;

export default FourthSlide;
