import React from "react";
import styled from "styled-components";

const PrimaryBtn = ({ name, nameClass }) => {
  return (
    <>
      <button className={nameClass}>{name}</button>
    </>
  );
};

export default PrimaryBtn;
