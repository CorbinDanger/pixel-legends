import React from 'react';
import './app.css';
import Pixel from './pixel';

class App extends React.Component {

  rows = 5;
  cols = 5;

  handlePixelClick() {
    alert('a pixel was clicked!');
  }

  renderPixels() {
    var pixels = [];

    for (let i = 0; i < this.rows * this.cols; i++) {
      pixels.push(
        <Pixel
          onClick={() => this.handlePixelClick()}
        />
      );
    }
    
    console.log(pixels);
    return pixels;
  }

  render() {
    var pixels = this.renderPixels();

    return (
      <div className="app">
        CORBIN IS COOL TRAVIS IS NOT
        <div className="grid">
        {pixels}
        </div>
        
      </div>
    );

  }
}

export default App;
