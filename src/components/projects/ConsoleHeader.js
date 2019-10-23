import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"

import * as COLORS from "../../constants/colors"

const consoleHeaderStyles = css`
  background-color: white;
  height: 40px;
  display: flex;
  flex-direction: row;
  text-align: center;
`

const getConsoleHeaderTabStyles = isActive => css`
  height: 100%;
  line-height: 34px;
  font-size: 14px;
  flex-grow: 1;
  cursor: pointer;
  text-transform: capitalize;
  background-color: ${COLORS.PURPLE_LIGHT};

  :hover {
    background-color: ${COLORS.PURPLE};
  }

  ${isActive &&
    css`
      border-bottom: 0;
      bbackground-color: ${COLORS.GREY_LIGHT};

      :hover {
        background-color: white;
      }
    `}
`

const ConsoleHeaderTab = ({ activeTab, name, handleClick, isConsoleOpen }) => {
  const isActive = name === activeTab

  return (
    <div
      css={getConsoleHeaderTabStyles(isActive)}
      onClick={() => handleClick(name)}
      // onMouseEnter={() => handleClick(name)}
    >
      {name}
    </div>
  )
}

const ConsoleHeader = ({ activeTab, selectConsoleTab }) => {
  return (
    <div css={consoleHeaderStyles}>
      <ConsoleHeaderTab
        name="about"
        handleClick={selectConsoleTab}
        activeTab={activeTab}
      />
      {/* <div css={css`border-right: 1px solid black;`}/> */}
      <ConsoleHeaderTab
        name="tools"
        handleClick={selectConsoleTab}
        activeTab={activeTab}
      />
    </div>
  )
}

ConsoleHeader.propTypes = {
  isConsoleOpen: PropTypes.bool,
}

export default ConsoleHeader
