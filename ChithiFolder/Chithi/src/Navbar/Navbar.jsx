import React from "react";
import styled from "styled-components";
import {
  Home,
  Profile,
  Friends,
  Chats,
  Notification,
  Settings,
} from "../Components/SvgIcons";

const Navbar = () => {
  let iconSize = 24;

  return (
    <Wrapper>
      <div className="container">
        <div className="leftIcons">
          <div className="navIconContainer active">
            <Home className="navIcon home " />
          </div>
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Search"
          ></input>

          <div className="navIconContainer ">
            <Friends className="navIcon friends" />
          </div>
        </div>

        <div className="rightIcons">
          <div className="navIconContainer ">
            <Profile className="navIcon profile" />
          </div>
          <div className="vLine"></div>
          <div className="navIconContainer ">
            <Chats className="navIcon chats" />
          </div>
          <div className="navIconContainer ">
            <Notification className="navIcon" />
          </div>
          <div className="navIconContainer ">
            <Settings className="navIcon" />
          </div>
        </div>
        <div></div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 3.5rem;
  .container {
    display: flex;
    padding: 8px 16px 8px 5vw;
    position: relative;
    margin-bottom: 16px;
    margin-left: 4.5rem;
  }

  .container::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0rem;
    z-index: 5;
    width: 90vw;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.25);
  }

  #search {
    width: 18vw;
    border-radius: 8px;
    border-width: 1px;
    border-color: rgba(0, 0, 0, 0.15);
    padding-left: 8px;
    font-size: 18px;
    font-weight: 200;
  }
  .leftIcons {
    position: relative;
    display: flex;
    gap: 2rem;
    margin-right: 14vw;
  }
  .rightIcons {
    display: flex;
    gap: 1.5rem;
  }

  .vLine {
    height: 2.5rem;
    width: 2.5px;
    background-color: grey;
  }

  .navIconContainer {
    padding: 4px;
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 16px;
    align-items: center;
    justify-content: center;
    /* background-color: pink; */
    .navIcon {
      height: 95%;
      width: 95%;
      /* fill: white; */
    }
    .navIcon path {
      stroke: black;
      /* stroke-width: 3px; */
      /* fill: black; */
    }
  }
  .navIconContainer:hover {
    background-color: #183e77;
    transition: all 0.1s ease-in;
    .navIcon {
      /* fill: #183e77; */
      fill: white;
    }
    .navIcon path {
      /* stroke: white; */
      stroke-width: 2px;
      fill: white;
    }
  }
  .active {
    background-color: #183e77;
    border-radius: 999px;
    .navIcon path {
      stroke: white;
      fill: white;
    }
  }
`;

export default Navbar;
