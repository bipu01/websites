import React from "react";

const SecondaryBtn = ({ name, nameClass }) => {
  return (
    <>
      <button className={nameClass}>{name}</button>
    </>
  );
};

export default SecondaryBtn;
