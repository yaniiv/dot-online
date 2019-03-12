import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { jsx } from "@emotion/core"

const titleContainerStyles = {
  background: `transparent`,
  marginBottom: `1.45rem`,
  textDecoration: "underline",
  display: "flex",
  position: "fixed",
  right: 0,
  top: 0,
}

const titleButtonStyles = {
  margin: `0 auto`,
  padding: `1.45rem 2rem`,
}

const linkStyles = {
  color: `Black`,
  textDecoration: `none`,
}

const Title = ({ siteTitle }) => (
  <header css={titleContainerStyles}>
    <div css={titleButtonStyles}>
      <h1 css={{ margin: 0 }}>
        <Link to="/" css={linkStyles}>
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Title.propTypes = {
  siteTitle: PropTypes.string,
}

Title.defaultProps = {
  siteTitle: ``,
}

export default Title
