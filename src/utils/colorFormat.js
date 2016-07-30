export default function(color, format) {
  if(format === 'hex') {
    var rgb = color.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    if(!rgb) {
      return color;
    }
    function hex(x) {
        return ('0' + parseInt(x).toString(16)).slice(-2);
    }
    return '#' + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
  } else if(format === 'rgb') {
    var hex = color.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/);
    if(!hex) {
      return color;
    }
    return 'rgb(' + parseInt(hex[1], 16) + ',' + parseInt(hex[2], 16) + ',' + parseInt(hex[3], 16) + ')';
  } else {
    throw new Error('The color format of ' + format + ' is not supported');
  }
}
