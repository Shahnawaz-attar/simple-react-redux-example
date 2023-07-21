import React from "react";

class ClassBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        {this.state.count} {this.props.name}{" "}
      </div>
    );
  }
}

export default ClassBase;
