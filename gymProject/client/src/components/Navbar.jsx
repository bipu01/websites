import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Wrapper>
      <div className="navButtons">
        <button className="secondaryBtn"> Location</button>
        <button className="secondaryBtn"> About us</button>
        <button className="secondaryBtn"> Contact us</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #0b0d23;
  color: white;
  height: 5vh;

  position: sticky;
  top: 0%;
  z-index: 2;
  width: 100ivw;
  height: 3rem;

  .navButtons {
    opacity: 0.5;
    text-align: right;
  }
  .secondaryBtn {
    all: unset;
    margin-top: 1rem;
    margin-right: 4.5vw;
    font-size: clamp(1.2rem, 1.2vw, 2rem);
  }
`;

export default Navbar;
