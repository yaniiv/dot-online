import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"

import Icon from "./Icon"

import data from "../../../data.js"

import * as COLORS from "../colors"

const iconsContainer = css`
  display: flex;
  align-items: center;
  max-height: 100px;
  max-width: 230px;
  margin-left: auto;
`

const socialIcon = css`
  display: flex;
  align-items: center;
  margin-left: 18px;

  @media (min-width: 768px) {
    margin-right: 20px;
  }
`

const Socials = () => {
  const {
    siteMetadata: { siteSocials },
  } = data.site

  return (
    <div css={iconsContainer}>
      {siteSocials.map(({ name, linkTo }) => (
        <div key={linkTo}>
          <a
            href={linkTo}
            rel="noopener noreferrer"
            target="_blank"
            css={socialIcon}
            aria-label={linkTo}
          >
            <Icon height="24px" fill={COLORS.YANIV} width="24px" name={name} />
          </a>
        </div>
      ))}
    </div>
  )
}

export default Socials
