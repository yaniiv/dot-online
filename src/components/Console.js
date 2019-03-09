import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"

const baseConsoleStyles = css`
  position: absolute;
  right: 0;
  width: 0px;
  height: calc(100% - 60px);
  background-color: lightgoldenrodyellow;
  bottom: 0;
  transition: width 0.2s linear;
`

const openConsoleStyles = css`
  transition: width 0.2s linear;
  width: 260px;
`

const getConsoleStyles = isConsoleOpen => css`
  ${baseConsoleStyles};
  ${isConsoleOpen && openConsoleStyles};
`

const Console = ({ isConsoleOpen }) => {
  return (
    <div css={getConsoleStyles(isConsoleOpen)}>
      <div />
    </div>
  )
}

Console.propTypes = {
  isConsoleOpen: PropTypes.bool.isRequired,
}

export default Console
