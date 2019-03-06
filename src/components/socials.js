import PropTypes from "prop-types"
import React from "react"
import Icon from "../components/icon"

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
        padding: `1.45rem 2rem 0`,
      }}
    >
      {
        siteSocials.map(({ name, linkTo }) => (
          <a href={linkTo} key={linkTo} target="_blank" style={{
            width: 50,
            height: 50,
            marginBottom: '2rem'
          }}>
            <Icon name={name} />
          </a>
        ))
      }
    </div>
  </div>
)

Socials.propTypes = {
  siteSocials: PropTypes.array,
}

Socials.defaultProps = {
  siteSocials: ``,
}

export default Socials
