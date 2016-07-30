# API Reference

- [Components](#components)
  - [`<Slider>`](#slider)
  - [`<ColorPicker>`](#colorpicker)

## Components

### `<Slider>`

#### Props
##### `items`
The array of image object contains `src` and `alt` properties.

##### `speed`
The playing speed of slider component, it is measured by the time(second) of image changing.

##### `delay`
The playing delay from last image to the next image.

##### `pause`
A boolean value indicates whether it can be paused.

##### `autoplay`
A boolean value indicates whether it can be played automatically.

##### `dots`
A boolean value indicates whether the `dots` are displayed.

##### `arrows`
A boolean value indicates whether the `arrows` are displayed.

#### Examples

Given images contains `src` and `alt` like:
```js
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
```

Then you can render this component into a certain DOM container
```js
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
```

Please see the [`examples/slider`](/examples/slider) directory of the repository for more details of using `<Slider>`.

### `<ColorPicker>`

#### Props
##### `color`
Default color

##### `format`
A specificed output format( `rgb` or `hex` ) of the color value.

##### `onChange`
The callback of color changed event, a new color value will be transfered into this function.

#### Examples

Render this component into a certain DOM container
```js
function handleChange(newColor) {
  // deal with the color you pick
}

render(
  <div>
    <ColorPicker color='#ff0000' onChange={handleChange} format='rgb'/>
  </div>,
  document.getElementById('example')
);
```

Please see the [`examples/colorPicker`](/examples/colorPicker) directory of the repository for more details of using `<ColorPicker>`.
