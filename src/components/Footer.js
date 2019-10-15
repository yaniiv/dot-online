/* eslint-disable */
import { StaticQuery, graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { css } from "@emotion/core"

import * as COLORS from "../constants/colors"
import * as SIZES from "../constants/sizes"

import Socials from "../components/Socials"

const FooterContainerStyles = css`
  background: ${COLORS.FOOTER_BACKGROUND};
  display: flex;
  justify-content: space-between;
  @import url("https://fonts.googleapis.com/css?family=Manjari&display=swap");
  font-family: "Manjari", sans-serif;
  /* height: ${SIZES.HEADER_HEIGHT}; */
  right: 0;
  bottom: 0;
  height: 100px;
  width: 100vw;
`

const Footer = ({ siteFooter }) => {
  return (
    <StaticQuery
      query={graphql`
        query Footer {
          site {
            siteMetadata {
              title
              siteSocials {
                name
                linkTo
              }
            }
          }
        }
      `}
      render={data => (
        <footer css={FooterContainerStyles}>
          <div
            css={css`
              display: flex;
              flex-direction: column;
              justify-content: center;
              padding: 24px;
              color: ${COLORS.GREY_LIGHT};
            `}
          >
            <div>Copyright 2019 © Yaniv Goldobin</div>
          </div>
          <div>
            <Socials siteSocials={data.site.siteMetadata.siteSocials} />
          </div>
        </footer>
      )}
    />
  )
}

Footer.propTypes = {
  siteFooter: PropTypes.string,
}

Footer.defaultProps = {
  siteFooter: ``,
}

export default Footer
