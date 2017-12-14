import React, { Component } from 'react';
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import WdForm from './WdForm.js';

class WdSurvey extends Component {
  render () {
    return (
      <div>
        <div className="container wd-container">
          <h3>Provide us with some information to get started with your canvas!</h3>
          <div className="wd-canvas-survey">
            <WdForm />
          </div>
          <button onClick={() => this.props.goToCanvas()}>Go to your Canvas</button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  goToCanvas: () => push('/waldo-canvas/canvas-result')
}, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(WdSurvey)