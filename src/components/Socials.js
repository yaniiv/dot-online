import React from "react"
import { useStaticQuery } from "gatsby"
import { css } from "@emotion/core"

import Icon from "./Icon"

import * as COLORS from "../constants/colors"

const socialIconStyle = css`
  width: 40px;
  height: 40px;

  @media (min-width: 768px) {
    width: 50px;
    height: 50px;
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
    <div
      css={css`
        margin-top: 30px;
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: space-around;
          max-height: 100px;
          max-width: 230px;
          margin-left: auto;
          svg {
            fill: ${COLORS.YANIV};
          }
        `}
      >
        {siteSocials.map(({ name, linkTo }) => (
          <div
            key={linkTo}
            css={css`
              padding: 1.8rem 0;
            `}
          >
            <a
              href={linkTo}
              rel="noopener noreferrer"
              target="_blank"
              css={socialIconStyle}
            >
              <Icon name={name} />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Socials
