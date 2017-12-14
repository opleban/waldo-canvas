import React, { Component } from 'react';
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class WdSurvey extends Component {
  render () {
    return (
      <div>
        <div className="container wd-container">
          <div className="wd-canvas-survey">
            <img alt="survey placeholder" src={`${process.env.PUBLIC_URL}/WDSurvey.png`}></img>
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