import React from "react";
import styled from "styled-components";

const LeftBar = () => {
  return <Wrapper>leftBar</Wrapper>;
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 4.5rem;
  /* background-color: pink; */
  box-shadow: -4px 2px 16px rgba(0, 0, 0, 0.25);
  z-index: 0;
`;
export default LeftBar;
