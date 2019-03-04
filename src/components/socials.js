import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Icon from "../svg/icon"

const Socials = ({ siteSocials }) => (
  <div
    style={{
      background: `transparent`,
      position: "fixed",
      left: 0,
      bottom: 0,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        // maxWidth: 960,
        display: "flex",
        flexDirection: "column",
        padding: `1.45rem 2rem`,
      }}
    >
      {
        siteSocials.map(({ name, link }) => (
            <Icon name={name} width="50px" height="50px" />
        ))
      }
    </div>
  </div>
)

Socials.propTypes = {
  siteSocials: PropTypes.string,
}

Socials.defaultProps = {
  siteSocials: ``,
}

export default Socials
