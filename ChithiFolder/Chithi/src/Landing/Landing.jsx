import React from "react";
import Feed from "../Feed/Feed";
import Notification from "../Notification/Notification";
import styled from "styled-components";
import LeftBar from "../leftBar/leftBar";

const Landing = () => {
  return (
    <Wrapper>
      <span className="grandParent">
        <LeftBar />
        <div className="parent">
          <Feed />
          <Notification />
        </div>
      </span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .grandParent {
    display: flex;
    width: 97vw;
    height: 100vh;
    background-color: #fffef9;
  }
  .parent {
    display: grid;
    width: 100%;
    grid-template-columns: 4fr 3fr;
    gap: 8px;
    justify-content: space-between;
    margin-left: 5rem;
    margin-top: 8px;

    /* border-radius: 8px;
    overflow: hidden; */
  }
`;

export default Landing;
