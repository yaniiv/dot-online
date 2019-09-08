// import PropTypes from "prop-types"
import React from "react"
import Icon from "./Icon"
import { css } from "@emotion/core"
import Socials from "./Socials"
import AboutContent from './AboutContent'

const infoIconStyle = css`
  width: 40px;
  height: 40px;
  z-index: 30;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 50px;
    height: 50px;
  }
`

class About extends React.Component {
  constructor(props) {
    super(props)

    this.state = { isOverlayOpen: false }
  }

  toggleIsOverlayOpen = () => {
    this.setState(prevState => ({ isOverlayOpen: !prevState.isOverlayOpen }))
  }

  render() {
    return (
      <div
        style={{
          background: `transparent`,
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: "20",
        }}
      >
        {
          this.state.isOverlayOpen && <>
            <AboutContent />
            <Socials siteSocials={this.props.siteSocials} />
          </>
        }

        <div
          style={{
            margin: `0 auto`,
            display: "flex",
            flexDirection: "column",
            padding: `1.45rem 2rem`,
          }}
        >
          <div css={infoIconStyle} onClick={this.toggleIsOverlayOpen}>
            {this.state.isOverlayOpen ? (
              <Icon
                css={css`
                  stroke-width: 1;
                `}
                name="close"
                viewBox="0 0 12 12"
              />
            ) : (
              <Icon name="hamburger" viewBox="0 0 32 32" />
            )}

            {/* : <Icon css={css`stroke-width: 4;`} name="info" viewBox="0 0 330 330" /> */}

            {/* <Icon name="info" viewBox="0 0 330 330" /> */}
          </div>
        </div>
      </div>
    )
  }
}

About.propTypes = {}

About.defaultProps = {}

export default About
