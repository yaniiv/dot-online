import React from "react"
import { css } from "@emotion/core"

import * as COLORS from "../../colors"
import Icon from "../Icon"

const browserHeader = css`
  height: 60px;
  display: flex;
  background-color: #9c9795;
  border-bottom: 4px solid black;
  border-radius: 4px;
`

const browserUrlBarContainer = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 8px 8px;
  background: transparent;
`

const browserUrlBar = css`
  background: ${COLORS.GREY_DARK};
  border: 2px solid black;
  border-radius: 6px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex: 1;
  cursor: pointer;
  padding: 0 16px;
  font-family: -apple-system, BlinkMacSystemFont;
  text-decoration: none;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0.3px;
  line-height: 34px;

  color: ${COLORS.YANIV};

  &:hover {
    text-decoration: underline;
  }
`

const BrowserHeader = ({ link }) => {
  return (
    <div css={browserHeader}>
      <div css={browserUrlBarContainer}>
        <a
          css={browserUrlBar}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link}
          <div>
            <Icon
              css={css`
                vertical-align: middle;
                stroke-width: 1.5;
                height: 16px;
                width: 16px;
                stroke: ${COLORS.YELLOW};
                fill: none;
                stroke-linecap: round;
                stroke-linejoin: round;

                @media (min-width: 768px) {
                  stroke-width: 2;
                  height: 20px;
                  width: 20px;
                }
              `}
              name="out-link"
            />
          </div>
        </a>
      </div>
    </div>
  )
}

export default BrowserHeader
