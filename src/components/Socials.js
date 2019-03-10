import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"

import Icon from "./Icon"

const socialIconStyle = css`
  width: 40px;
  height: 40px;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    width: 50px;
    height: 50px;
  }
`

const Socials = ({ siteSocials }) => (
  <div
    style={{
      background: `transparent`,
      position: "fixed",
      left: 0,
      bottom: 0,
      zIndex: '30',
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
      {siteSocials.map(({ name, linkTo }) => (
        <a
          href={linkTo}
          rel="noopener noreferrer"
          key={linkTo}
          target="_blank"
          css={socialIconStyle}
        >
          <Icon name={name} />
        </a>
      ))}
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
