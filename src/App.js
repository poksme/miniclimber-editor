import React, { Component } from 'react';
import Climby from './shapes/Climby.js';
import InputRange from 'react-input-range';
import { SketchPicker } from 'react-color';
import 'react-input-range/lib/css/index.css';
import './ReactInputRangeOverrides.css';
import './App.css';

class App extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      size: 240,
      chubbiness: 10,
      rotation: 315,
      primaryColor: '#87CDDE',
      secondaryColor: '#AFDDE9',
    };
  }
  render() {
    return (
      <div className="App">
        <div className="ColorPicker">
          <h2>Primary</h2>
          <SketchPicker
            color={ this.state.primaryColor }
            onChange={({ hex }) => this.setState({ primaryColor: hex }) }
          />
        </div>
        <form className="Controls">
          <div className="Range">
            <h2>Size</h2>
            <InputRange
              minValue={10}
              maxValue={500}
              value={this.state.size}
              onChange={size => this.setState({ size })}
            />
          </div>
          <div className="Range">
            <h2>Chubbiness</h2>
            <InputRange
              minValue={5}
              maxValue={15}
              value={this.state.chubbiness}
              onChange={chubbiness => this.setState({ chubbiness })}
            />
          </div>
          <div className="Range">
            <h2>Rotation</h2>
            <InputRange
              minValue={0}
              maxValue={360}
              value={this.state.rotation}
              onChange={rotation => this.setState({ rotation })}
            />
          </div>
        </form>
        <div className="ColorPicker">
          <h2>Secondary</h2>
          <SketchPicker
            color={ this.state.secondaryColor }
            onChange={({ hex }) => this.setState({ secondaryColor: hex }) }
          />
        </div>
        <div className="Display">
          <Climby
            size={this.state.size}
            chubbiness={this.state.chubbiness}
            rotation={this.state.rotation}
            primaryColor={this.state.primaryColor}
            secondaryColor={this.state.secondaryColor}
          />
        </div>
      </div>
    );
  }
}

export default App;
