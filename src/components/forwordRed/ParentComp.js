import React, { useRef } from "react";
import ChildComp from "./ChildComp";

const ParentComp = () => {
  const childRef = useRef();

  const handleRed = () => {
    console.log(childRef.current.innerHTML);
  };
  return (
    <div>
      <ChildComp ref={childRef} />
      <button onClick={handleRed}>Click</button>
    </div>
  );
};

export default ParentComp;
