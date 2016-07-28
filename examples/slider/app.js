import React from 'react';
import { render } from 'react-dom';

import { Slider } from 'reaui';

const IMAGE_DATA = [
  {
    src: require('./images/demo1.jpg'),
    alt: 'images-1',
  },
  {
    src: require('./images/demo2.jpg'),
    alt: 'images-2',
  },
  {
    src: require('./images/demo3.jpg'),
    alt: 'images-3',
  },
];

render(
  <Slider
    items={IMAGE_DATA}
    speed={1.5}
    delay={2.1}
    pause={true}
    autoplay={true}
    dots={true}
    arrows={true}
  />,
  document.getElementById('example')
);
