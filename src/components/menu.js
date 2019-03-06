import PropTypes from "prop-types"
import React from "react"
import Icon from "../components/icon"

const Menu = () => (
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
      }}
    >
      <a
        target="_blank"
        style={{
          width: 50,
          height: 50,
        }}
      >
        <Icon name="hamburger" viewBox="0 0 32 32" />
      </a>
    </div>
  </div>
)

Menu.propTypes = {}

Menu.defaultProps = {}

export default Menu
