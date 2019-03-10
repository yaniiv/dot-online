// import PropTypes from "prop-types"
import React from "react"
import Icon from "./Icon"

const AboutMenu = () => (
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
        style={{
          width: 50,
          height: 50,
        }}
      >
        <Icon name="hamburger" viewBox="0 0 32 32" />
      </div>
    </div>
  </div>
)

AboutMenu.propTypes = {}

AboutMenu.defaultProps = {}

export default AboutMenu
