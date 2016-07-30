import React from 'react';
import { render } from 'react-dom';

import { ColorPicker } from 'reaui';

function handleChange(color) {
  var node = document.getElementById('color');
  node.style.backgroundColor = color;
  node.innerHTML = color;
}
var defaultColor = 'rgb(51, 153, 255)';
render(
  <div>
    <ColorPicker color={defaultColor} onChange={handleChange} format='rgb'/>
    <p>Current picked color: <span id='color' style={{backgroundColor: defaultColor}}>{defaultColor}</span></p>
  </div>,
  document.getElementById('example')
);
