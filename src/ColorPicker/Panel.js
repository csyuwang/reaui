import React from 'react';

class Panel extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(event) {
    var colorNode = event.target;
    this.props.colorChanged.call(null, colorNode.style.backgroundColor);
  }

  render() {
    var _colorHex = ['00','33','66','99','cc','ff'];
    var _spcolorHex = ['ff0000','00ff00','0000ff','ffff00','00ffff','ff00ff'];

    var blackNode = <td style={{ 'backgroundColor': '#000'}}></td>;

    var colorNodes = [];

    for(var i = 0; i < 2; i++) {
      for(var j = 0; j < 6; j++) {
        colorNodes.push(
          <tr key={6*i+j} >
            <td key={6*i+j + '.' + 0} style={{ 'backgroundColor': '#000'}}></td>
            {
              i == 0 ? <td key={6*i+j + '.' + 1} style={{ 'backgroundColor': '#' + _colorHex[j] + _colorHex[j] + _colorHex[j] }}></td>
                     : <td key={6*i+j + '.' + 1} style={{ 'backgroundColor': '#' + _spcolorHex[j] }}></td>
            }
            <td key={6*i+j + '.' + 2} style={{ 'backgroundColor': '#000'}}></td>
            {
              (function(i,j) {
                var nodes = [];
                for (var k = 0; k < 3; k++) {
                  for(var l = 0; l < 6; l++) {
                    nodes.push(<td key={6*i+j + '.' + 3+6*k+l} style={{ 'backgroundColor':  '#' + _colorHex[k + i * 3] + _colorHex[l] + _colorHex[j] }}></td>);
                  }
                }
                return nodes;
              })(i,j)
            }
          </tr>
        );
      }
    }


    return (
        <div className='color-panel' style={{visibility: this.props.show ? 'visible' : 'hidden'}} >
          <table onClick={this.handleClick.bind(this)}>
            <tbody>
              {colorNodes}
            </tbody>
          </table>
        </div>
      );
  }

}

export default Panel;
