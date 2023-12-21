import React from "react";
import styled, { css } from "styled-components";
import PrimaryBtn from "../buttons/primaryBtn";

const SecondSlide = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="bgContainer">
          <img src="/images/rect.svg" alt="bg image" className="bg rect" />
          <img src="/images/bg2.png" alt="bg image" className="bg" />
        </div>
        <div className="text-col">
          <div className="heroText">DEVELOP INNER CONFIDENCE</div>
          <p className="paragraph">
            Allow us to find the best in you. Give yourself a treat you deserve.
            Healthy body looks and feels different. When you treat yourself
            right, you see your complete self
          </p>
        </div>

        <PrimaryBtn name={"Enroll now"} nameClass={"primary-onRight"} />
      </div>
    </Wrapper>
  );
};
const query = css`
  @media (max-width: 1060px) {
    .container {
      .bgContainer {
      }
      .text-col {
      }
      .heroText {
        font-size: 2rem;
      }
    }
  }
`;

const Wrapper = styled.div`
  /* overflow: hidden; */
  margin-top: 5vh;

  .container {
    position: relative;
    height: 95vh;
    overflow: hidden;

    .bgContainer {
      width: clamp(30rem, 50vw, 90rem);
      .bg {
        height: 100vh;
        min-height: 30rem;
        width: 50%;

        object-fit: contain;
        position: absolute;
        left: 3%;
      }
      .rect {
        height: clamp(20rem, 90%, 90rem);
        width: clamp(0rem, 46%, 90rem);
        position: absolute;
        top: 10%;
        left: clamp(1rem, 1%, 20rem);
      }
    }

    .text-col {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 18%;
      left: 50%;
      width: clamp(15rem, 50%, 80rem);
      gap: 2rem;
      /* margin-left: 2rem; */
    }
    .heroText {
      letter-spacing: 0.8rem;
      /* font-size: */
    }
  }
`;

export default SecondSlide;
