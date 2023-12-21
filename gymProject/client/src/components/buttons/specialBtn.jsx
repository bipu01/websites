import React from "react";
import styled from "styled-components";

const SpecialBtn = ({ name, nameClass }) => {
  return (
    <Wrapper>
      <div className="blinks">
        <img id="blink1" src="/icons/blink1.svg" alt="blink" />
        <button className={nameClass}>{name}</button>
        <img id="blink2" src="/icons/blink2.svg" alt="blink" />
        <img id="blink3" src="/icons/blink3.svg" alt="blink" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .blinks {
    position: absolute;
    top: 85%;
    left: 5%;

    display: flex;
    gap: 100%;
    #blink1,
    #blink2,
    #blink3 {
      /* position: relative; */

      height: 1rem;
      z-index: 5;
      margin-bottom: 8px;
      transform: translateX(-10px);
    }
  }
`;

export default SpecialBtn;
