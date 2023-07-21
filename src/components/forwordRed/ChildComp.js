import React from "react";

const ChildComp = React.forwardRef((props, ref) => {
  return <div ref={ref}>ChildComp</div>;
});

export default ChildComp;
