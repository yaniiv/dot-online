import React from "react"
import { useStaticQuery } from "gatsby"
import { css } from "@emotion/core"

import Icon from "./Icon"

import * as COLORS from "../colors"

const socialIcon = css`
  width: 40px;
  height: 40px;

  @media (min-width: 768px) {
    margin-right: 20px;
    width: 50px;
    height: 50px;
  }
`

const iconsContainer = css`
  display: flex;
  max-height: 100px;
  max-width: 230px;
  margin-left: auto;

  svg {
    fill: ${COLORS.YANIV};
  }
`

const Socials = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteSocials {
              name
              linkTo
            }
          }
        }
      }
    `
  )

  const {
    siteMetadata: { siteSocials },
  } = site

  return (
    <div css={iconsContainer}>
      {siteSocials.map(({ name, linkTo }) => (
        <div
          key={linkTo}
          css={css`
            padding: 38px 0;
          `}
        >
          <a
            href={linkTo}
            rel="noopener noreferrer"
            target="_blank"
            css={socialIcon}
          >
            <Icon name={name} />
          </a>
        </div>
      ))}
    </div>
  )
}

export default Socials
