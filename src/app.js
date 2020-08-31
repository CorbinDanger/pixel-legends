import React from 'react';
import './app.css';
import Pixel from './pixel';
import ColorPicker from './color-picker';
import SizeChanger from './size-changer';

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

  handlePixelMouseEnter(pixelIndex, e) {
    if (e.buttons !== 1) {
      return;
    }

    this.handlePixelClick(pixelIndex);
  }

  handleColorPickerClick(colorKey) {
    this.setState({
      selectedColor: colorKey,
    })
  }

  handleRowsChange(value) {
    this.setState({
      rows: value,
    }, this.resizeGrid);
  }

  handleColsChange(value) {
    this.setState({
      cols: value,
    }, this.resizeGrid);
  }

  resizeGrid() {
    console.log('cols: ' + this.state.cols);
    var pixelColors = this.state.pixelColors.slice(0, this.state.pixelColors.length);

    pixelColors.length = this.state.rows * this.state.cols;

    for (let i = 0; i < pixelColors.length; i++) {
      if (pixelColors[i] == null) {
        pixelColors[i] = 'a';
      }
    }

    this.setState({
      pixelColors: pixelColors,
    });
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
          onMouseEnter={(x, e) => this.handlePixelMouseEnter(x, e)}
        />
      );
    }

    return pixels;
  }

  render() {
    var pixels = this.renderPixels();

    const gridStyle = {
      width: (this.state.cols * 20) + 'px',
    }


    return (
      <div className="app">
        <ColorPicker
          allColors={this.allColors}
          selectedColor={this.state.selectedColor}
          onClick={(x) => this.handleColorPickerClick(x)}
        />
        <SizeChanger
          rows={this.state.rows}
          cols={this.state.cols}
          onRowsChange={(x) => this.handleRowsChange(x)}
          onColsChange={(x) => this.handleColsChange(x)}
        />
        <div className="grid"
          style={gridStyle}
        >
          {pixels}
        </div>

      </div>
    );

  }
}

export default App;
