import React from 'react';
import classNames from 'classnames';

class Dots extends React.Component {
  constructor(props) {
    super(props);
  }

  handleDotClick(n) {
    this.props.go(n - this.props.position);
  }

  render() {
    let dotNodes = [];
    let { count, position } = this.props;
    for(let i = 0; i < count; i++) {
      dotNodes[i] = (
        <span
          key={'dot' + i}
          className={ classNames('slider-dot', {'slider-dot-selected': i === position}) }
          onClick={this.handleDotClick.bind(this, i)}>
        </span>
      );
    }
    return (
      <div className='slider-dots-wrap'>
        {dotNodes}
      </div>
    );
  }
}

export default Dots;
