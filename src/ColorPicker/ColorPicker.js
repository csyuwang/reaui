import React from 'react';

require('./ColorPicker.scss');

import Panel from './Panel';
import { colorFormat } from '../utils';

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.color,
      show: false
    }
  }

  togglePanel() {
    this.setState({show: !this.state.show});
  }

  handleColorChanged(color) {
    this.setState({
      color: color,
      show: !this.state.show
    });
    try {
      color = colorFormat(color, this.props.format);
    } catch (e) {
      console.warn('ColorPicker: ' + e.message);
      color = colorFormat(color, ColorPicker.defaultProps.format);
    }
    this.props.onChange.call(this, color);
  }

  render() {

    return (
        <div className='color-picker'>
          <input type='text' className='color-input' style={{ 'backgroundColor':this.state.color }} onClick={this.togglePanel.bind(this)}/>
          <Panel show={ this.state.show } colorChanged={this.handleColorChanged.bind(this)}/>
        </div>
      );
  }

}

ColorPicker.defaultProps = {
  color: '#000000',
  format: 'hex'
};

export default ColorPicker;
