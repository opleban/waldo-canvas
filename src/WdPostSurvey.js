import React, { Component } from 'react';
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class WdPostSurvey extends Component {
  render () {
    return (
      <div>
        <div className="container wd-container">
          <div className="wd-canvas-survey">
            <img alt="post survey placeholder" src={`${process.env.PUBLIC_URL}/providedSurvey.png`}></img>
            <img alt="post survey placeholder" src={`${process.env.PUBLIC_URL}/providedSurvey2.png`}></img>
            <img alt="post survey placeholder" src={`${process.env.PUBLIC_URL}/providedSurvey3.png`}></img>
          </div>
          <button onClick={() => this.props.goToCanvas()}>Go back to your myCanvas</button>
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
)(WdPostSurvey)