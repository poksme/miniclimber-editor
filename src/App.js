import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import InputRange from 'react-input-range';
import GithubPicker from 'react-color/lib/components/github/Github';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'react-input-range/lib/css/index.css';
import Climby from './shapes/Climby';
import { COLOR_LIST } from './constants';
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
      <Grid className="App">
        <Row>
          <Col xs={12} sm={4} className="Display">
            <Climby
              size={this.state.size}
              chubbiness={this.state.chubbiness}
              rotation={this.state.rotation}
              primaryColor={this.state.primaryColor}
              secondaryColor={this.state.secondaryColor}
            />
          </Col>
          <Col xs={12} sm={8} className="Controls">
            <Row>
              <Col xs={12} lg={6}>
                <div className="ColorPicker">
                  <h2>Primary</h2>
                  <GithubPicker
                    colors={COLOR_LIST}
                    width={262}
                    triangle="hide"
                    color={this.state.primaryColor}
                    onChange={({ hex }) => this.setState({ primaryColor: hex })}
                  />
                </div>
              </Col>
              <Col xs={12} lg={6}>
                <div className="ColorPicker">
                  <h2>Secondary</h2>
                  <GithubPicker
                    colors={COLOR_LIST}
                    width={262}
                    triangle="hide"
                    color={this.state.secondaryColor}
                    onChange={({ hex }) => this.setState({ secondaryColor: hex })}
                  />
                </div>
              </Col>
              <Col xs={12} lg={6}>
                <div className="Range">
                  <h2>Size</h2>
                  <InputRange
                    minValue={10}
                    maxValue={250}
                    value={this.state.size}
                    onChange={size => this.setState({ size })}
                  />
                </div>
              </Col>
              <Col xs={12} lg={6}>
                <div className="Range">
                  <h2>Chubbiness</h2>
                  <InputRange
                    minValue={5}
                    maxValue={15}
                    value={this.state.chubbiness}
                    onChange={chubbiness => this.setState({ chubbiness })}
                  />
                </div>
              </Col>
              <Col xs={12}>
                <div className="Range">
                  <h2>Rotation</h2>
                  <InputRange
                    minValue={0}
                    maxValue={360}
                    value={this.state.rotation}
                    onChange={rotation => this.setState({ rotation })}
                  />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
