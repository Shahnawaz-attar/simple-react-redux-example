import React from "react";

function withExtraProp(WrappedComponent) {
  return function WithExtraProp(props) {
    return <WrappedComponent extraProp="Hello World" {...props} />;
  };
}

const MyComponent = props => <div>{props.extraProp}</div>;

const MyComponentWithExtraProp = withExtraProp(MyComponent);
export default MyComponentWithExtraProp;
