import React from 'react';

export default class Box extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let style = {
      backgroundColor: this.props.color,
      height: '200px',
      width: '200px'
    };
    return (
      <div className="box" style={style}></div>
    );
  }
}