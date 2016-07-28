import React from 'react';

require('./Slider.scss');

import Item from './Item';
import Dots from './Dots';
import Arrows from './Arrows';


class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 0
    }
    this.go = this.go.bind(this);
    this.pause = this.pause.bind(this);
    this.autoplay = this.autoplay.bind(this);
  }

  go(n) {
    var next = this.state.position + n;
    var len = this.props.items.length;
    if(next < 0) {
      next = next + len;
    } else if(next >= len) {
      next = next - len;
    }
    this.setState( {position: next} );
  }

  autoplay() {
    if(this.props.autoplay) {
      this.autoplayInterval = setInterval( () => {
        this.go(1);
      }, this.props.delay * 1000);
    }
  }

  pause() {
    clearInterval(this.autoplayInterval);
  }

  componentDidMount() {
    this.autoplay();
  }

  render() {
    let count = this.props.items.length;

    let itemNodes = this.props.items.map((item, idx) => {
      return <Item item={item} count={count} key={'item' + idx} />;
    });

    let arrowsNode = <Arrows go={this.go}/>;

    let dotsNode = <Dots go={this.go} count={count} position={this.state.position} />;

    return (
        <div className='slider' onMouseOver={this.props.pause ? this.pause : null} onMouseOut={this.props.pause ? this.autoplay : null}>
          <ul style={{
                left: -100 * this.state.position + '%',
                transitionDuration: this.props.speed + 's',
                width: count * 100 + '%'
              }}>
              {itemNodes}
          </ul>
          {this.props.arrows ? arrowsNode : null}
          {this.props.dots ? dotsNode : null}
        </div>
      );
  }

}

Slider.defaultProps = {
  speed: 1,
  delay: 2,
  pause: true,
  autoplay: true,
  dots: true,
  arrows: true,
  items: [],
};

export default Slider;
