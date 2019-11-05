import React from 'react';

const style = {
  "border": "16px solid #f3f3f3",
  "borderRadius": "50%",
  "borderTop": "16px solid #3498db",
  "width": "50px",
  "height": "50px",
  "WebkitAnimation": "spin 2s linear infinite",
  "animation": "spin 2s linear infinite"
};

export default class Loading extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>{"Loading component " + this.props.name + "..."}</div>
        <div className="loader" style={style}></div>
      </div>
    );
  }
}