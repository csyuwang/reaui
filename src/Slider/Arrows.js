import React from 'react';

class Arrows extends React.Component {
  constructor(props) {
    super(props);
  }

  handleArrowClick(n) {
    this.props.go(n);
  }

  render() {
    return (
      <div className="slider-arrows-wrap">
        <span className="slider-arrow slider-arrow-left" onClick={ this.handleArrowClick.bind(this, -1) }>
          &lt;
        </span>
        <span className="slider-arrow slider-arrow-right" onClick={ this.handleArrowClick.bind(this, 1) }>
          &gt;
        </span>
      </div>
    )
  }
}

export default Arrows;
