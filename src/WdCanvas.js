import React, { Component } from 'react';
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class WdCanvas extends Component {
  render () {
    return (
      <div>
        <h1>Welcome to the Canvas!</h1>
        <button onClick={() => this.props.goToSurvey()}>Go to Survey</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  goToSurvey: () => push('/waldo-canvas/canvas')
}, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(WdCanvas)