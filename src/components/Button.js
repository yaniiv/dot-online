import React from "react"
import { css } from "@emotion/core"

import * as COLORS from "../colors"
import Icon from "./Icon"

const activeColor = css`
  background-color: ${COLORS.ROSETTE_LIGHT};
`

const getButtonStyles = (extraStyles, isActive) => css`
  color: ${COLORS.BLACK};
  background: ${COLORS.YELLOW};
  border: 2px solid ${COLORS.PURPLE};
  margin-top: 24px;
  display: flex;
  justify-content: flex-end;
  padding-right: 14px;
  border-radius: 4px;
  height: 50px;
  width: 150px;
  padding: 0px 20px;

  box-shadow: 24px 24px 2px 2px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  margin-left: auto;

  @media (min-width: 758px) {
  }

  ${extraStyles}
  ${isActive && activeColor}
`

const Button = ({ text, onClick, isActive, extraStyles, iconName }) => {
  return (
    <button
      onClick={onClick}
      css={getButtonStyles(extraStyles, isActive)}
      value="Send Email"
    >
      <div
        css={css`
          line-height: 28px;
          /* margin: 0 auto; */
          width: 100%;
          display: flex;
          flex-direction: row;
        `}
      >
        <div
          css={css`
            margin: 0 auto;
          `}
        >
          {text}
        </div>
        <div
          css={css`
            line-height: 28px;
          `}
        >
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
            name={iconName}
          />
        </div>
      </div>
    </button>
  )
}

export default Button
