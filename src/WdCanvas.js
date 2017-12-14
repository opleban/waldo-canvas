import React, { Component } from 'react';
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class WdCanvas extends Component {
  render () {
    return (
      <div>
        <div className="container wd-container wd-canvas-page">
          <div className="wd-canvas-container">
            <div className="wd-row">
              <div className="wd-col">
                <div className="wd-box wd-profile">
                  <img alt="me hat" src={`${process.env.PUBLIC_URL}/hat.jpg`}></img>
                  <div className="wd-profile-name">Ori Pleban</div>
                </div>
                <div className="wd-box">
                  Born on: <br/> <b>June 14, 1988</b><br/><br/>
                  I weigh 300 lbs <br/>
                  I am 6' 7" <br/><br/>
                  I took 35 minutes to create my myCanvas!
                </div>
              </div>
              <div className="wd-col">
                <div className="wd-box">
                  <div className="wd-box-image"><img alt="provided occupation" src={`${process.env.PUBLIC_URL}/cap.png`}></img></div>
                  <div className="wd-box-text">I am a student.</div>
                </div>
                <div className="wd-box">
                  <div className="wd-box-image"><img alt="provided interest" src={`${process.env.PUBLIC_URL}/harry.png`}></img></div>
                  <div className="wd-box-text">My favorite movie is Harry Potter and the Goblet of Fire</div>
                </div>
              </div>
              <div className="wd-col">
                <div className="wd-box wd-wide">
                  <div className="wd-box-text">I was last online at 79 John F. Kennedy St, Cambridge, MA 02138.</div>
                  <div className="wd-box-image">
                    <iframe
                      title="observed location"
                      width="100%"
                      height="100%"
                      frameborder="0"
                      src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA1dD-NbbQcU_n7gQ3KoCmHGFHJUVJrgtI&q=79 John F. Kennedy St"
                      allowfullscreen
                    >
                    </iframe>
                  </div>
                </div>
                <div className="wd-box wd-wide">
                  <div className="wd-box-text">I live at 30 River St., Arlington, MA 02474</div>
                  <div className="wd-box-image"><img alt="provided location" src="https://maps.googleapis.com/maps/api/streetview?size=600x300&location=42.4125933,-71.1410505&heading=297.1&pitch=-0.76&key=AIzaSyAb-H_ispehS3cFheX8A9XbcrKfUNHakto"></img></div>
                </div>
              </div>
              <div className="wd-col">
                <div className="wd-box wd-box-short">
                  <div className="wd-box-image"><img alt="provided occupation" src={`${process.env.PUBLIC_URL}/chrome.png`}></img></div>
                  <div className="wd-box-text">My web browser is Google Chrome</div>
                </div>
                <div className="wd-box wd-box-short">
                  <div className="wd-box-image"><img alt="provided interest" src={`${process.env.PUBLIC_URL}/apple.png`}></img></div>
                  <div className="wd-box-text">I use an Apple computer.</div>
                </div>
                <div className="wd-box wd-box-short">
                  <div className="wd-box-image"><img alt="provided interest" src={`${process.env.PUBLIC_URL}/arabic.png`}></img></div>
                  <div className="wd-box-text">My default system language is Arabic</div>
                </div>
              </div>
            </div>
            <div className="wd-row wd-horizontal">
              <div className="wd-box wd-empty">
              </div>
              <div className="wd-box">
                <div className="wd-box-image"><img alt="inferred political affiliation" src={`${process.env.PUBLIC_URL}/liberal.png`}></img></div>
                <div className="wd-box-text">I am a liberal</div>
              </div>
              <div className="wd-box wd-small">
                <div className="wd-box-image"><img alt="inferred personality" src={`${process.env.PUBLIC_URL}/contemplative.png`}></img></div>
                <div className="wd-box-text">I am contemplative</div>
              </div>
              <div className="wd-box wd-small">
                <div className="wd-box-image"><img alt="inferred personaltiy" src={`${process.env.PUBLIC_URL}/stressed.png`}></img></div>
                <div className="wd-box-text">I am easily stressed</div>
              </div>
              <div className="wd-box wd-small">
                <div className="wd-box-image"><img alt="false" src={`${process.env.PUBLIC_URL}/chocolate.png`}></img></div>
                <div className="wd-box-text">I like chocolate</div>
              </div>
            </div>
          </div>
        </div>
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