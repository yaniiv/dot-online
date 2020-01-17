import React from "react"
import { css } from "@emotion/core"

import * as COLORS from "../colors"
import Icon from "./Icon"

const getButtonStyles = extraStyles => css`
  color: ${COLORS.GREY_DARK};
  background: ${COLORS.YELLOW};
  border: 2px solid ${COLORS.PURPLE};
  margin-top: 24px;
  display: flex;
  justify-content: center;
  border-radius: 4px;
  height: 50px;
  width: 150px;
  margin-left: 24px;
  box-shadow: 24px 24px 2px 2px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  ${extraStyles}
`

const Button = ({ text, onClick = () => {}, extraStyles }) => {
  return (
    <button
      onClick={onClick}
      css={getButtonStyles(extraStyles)}
      value="Send Email"
    >
      <div
        css={css`
          line-height: 28px;
        `}
      >
        {text}
      </div>
      <div>
        <Icon
          fill="none"
          css={css`
            stroke-width: 3;
            stroke-linecap: round;
            stroke-linejoin: round;
            margin-left: 8px;
            display: block;
          `}
          stroke="black"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          name="info"
        />
      </div>
    </button>
  )
}

export default Button
