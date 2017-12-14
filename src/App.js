import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import WdSurvey from './WdSurvey.js';
import WdCanvas from './WdCanvas.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="page-header wd-header">
            <div className="container">
              <div className="wd-logo-branding col-lg-2 col-md-2 col-sm-2">
                <div className="wd-logo col-lg-6">
                    <img alt="panda logo" src="panda.png" />
                </div>
                <div className="col-lg-6">
                  <h2>myCanvas</h2>
                </div>
              </div>
            </div>
         </header>
          <main>
            <Route exact path="/" component={WdSurvey} />
            <Route exact path="/waldo-canvas/" component={WdSurvey} />
            <Route exact path="/waldo-canvas/canvas" component={WdSurvey} />
            <Route exact path="/waldo-canvas/canvas-result" component={WdCanvas} />
          </main>
        </div>
      </MuiThemeProvider>
    );
  }
}
          // <Route exact path="/post-survey" component={WdPostSurvey} />

export default App;
