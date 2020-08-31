import React from 'react';
import './app.css';
import Pixel from './pixel';
import ColorPicker from './color-picker';

class App extends React.Component {
  constructor(props) {
    super(props);

    let pixels = Array(25).fill('a');

    this.state = {
      rows: 5,
      cols: 5,
      selectedColor: 'm',
      pixelColors: pixels,
    };
  }

  allColors = {
    "a": "#ffffff", // white
    "b": "#00ffff", // cyan
    "c": "#ff00ff", // violet
    "d": "#ffff00", // yellow
    "e": "#c0c0c0", // lt grey
    "f": "#ff0000", // red 
    "g": "#00ff00", // green (lime)
    "h": "#0000ff", // blue
    "i": "#808080", // gray
    "j": "#008080", // teal
    "k": "#800080", // purple 
    "l": "#808000", // olive
    "m": "#000000", // black
    "n": "#800000", // maroon
    "o": "#008000", // green (green)
    "p": "#000080", // navy
  };

  handlePixelClick(pixelIndex) {
    var pixelColors = this.state.pixelColors.slice(0, this.state.pixelColors.length);
    pixelColors[pixelIndex] = this.state.selectedColor;

    this.setState({
      pixelColors: pixelColors,
    })
  }

  handleColorPickerClick(colorKey) {
    this.setState({
      selectedColor: colorKey,
    })
  }

  renderPixels() {
    var pixels = [];

    for (let i = 0; i < this.state.pixelColors.length; i++) {
      pixels.push(
        <Pixel
          pixelIndex={i}
          key={i}
          color={this.allColors[this.state.pixelColors[i]]}
          onClick={(x) => this.handlePixelClick(x)}
        />
      );
    }

    return pixels;
  }

  render() {
    var pixels = this.renderPixels();

    return (
      <div className="app">
        <ColorPicker
          allColors={this.allColors}
          selectedColor={this.state.selectedColor}
          onClick={(x) => this.handleColorPickerClick(x)}
        />
        CORBIN IS COOL TRAVIS IS NOT
        <div className="grid">
          {pixels}
        </div>

      </div>
    );

  }
}

export default App;
