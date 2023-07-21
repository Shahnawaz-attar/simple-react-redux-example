import React from "react";

const Child = React.memo(({ count }) => {
  return <div>Count : {count}</div>;
});

export default Child;
