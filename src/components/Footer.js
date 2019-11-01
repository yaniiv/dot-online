/* eslint-disable */
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"

import * as COLORS from "../colors"
import * as SIZES from "../sizes"

const FooterContainerStyles = css`
  background: ${COLORS.FOOTER_BACKGROUND};
  display: flex;
  justify-content: space-between;
  @import url("https://fonts.googleapis.com/css?family=Manjari&display=swap");
  font-family: "Manjari", sans-serif;
  right: 0;
  bottom: 0;
  height: 100px;
  width: 100vw;
`

const Footer = () => {
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
              padding: 18px;
              color: ${COLORS.GREY_LIGHT};
            `}
          >
            <div>Copyright 2019 © Yaniv Goldobin</div>
          </div>
        </footer>
      )}
    />
  )
}

export default Footer
