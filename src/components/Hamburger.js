// import PropTypes from "prop-types"
import React from "react"
import Icon from "./Icon"
import { css } from "@emotion/core"

const infoIconStyle = css`
  width: 40px;
  height: 40px;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    width: 50px;
    height: 50px;
  }
`

const Hamburger = () => (
  <div
    style={{
      background: `transparent`,
      position: "fixed",
      top: 0,
      left: 0,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        display: "flex",
        flexDirection: "column",
        padding: `1.45rem 2rem`,
        width: 50,
        height: 50,
      }}
    >
      <div
        css={infoIconStyle}
      >
        <Icon name="hamburger" viewBox="0 0 32 32" />

        {/* <Icon name="info" viewBox="0 0 330 330" /> */}
      </div>
    </div>
  </div>
)

Hamburger.propTypes = {}

Hamburger.defaultProps = {}

export default Hamburger
