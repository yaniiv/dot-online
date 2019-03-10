// import PropTypes from "prop-types"
import React from "react"
import Icon from "./Icon"
import { css } from "@emotion/core"

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

const fullPageOverlayStyles = css`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  bottom: 0;
  background-color: lightgoldenrodyellow;
  z-index: 10;
`

class Hamburger extends React.Component {
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
          zIndex: '20',
        }}
      >
        <div css={this.state.isOverlayOpen && fullPageOverlayStyles} />
        <div
          style={{
            margin: `0 auto`,
            display: "flex",
            flexDirection: "column",
            padding: `1.45rem 2rem`,
          }}
        >
          <div css={infoIconStyle} onClick={this.toggleIsOverlayOpen}>
            {
              this.state.isOverlayOpen 
                ? <Icon name="close" viewBox="0 0 12 12" />
                : <Icon name="hamburger" viewBox="0 0 32 32" />
            }
            {/* <Icon name="info" viewBox="0 0 330 330" /> */}
          </div>
        </div>
      </div>
    )
  }
}

Hamburger.propTypes = {}

Hamburger.defaultProps = {}

export default Hamburger
