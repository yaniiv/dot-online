import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"

/* 
#8b8b8b
#747474
#b9b9b9
#747474
#5d5d5d
#464646
#2e2e2e
#171717

const purp = `rgb(125, 76, 219)`
const aqua = `#6cffb4`
const blue = "rgb(0, 169, 242)"
*/

const softGrey = "rgb(243, 243, 243)"
// const white = "rgb(255, 255, 255)"
export const hoverGrey = "rgb(234, 234, 234)"
const borderGrey = "rgb(204, 204, 204)"

const consoleHeaderStyles = css`
  background-color: white;
  height: 40px;
  display: flex;
  flex-direction: row;
  text-align: center;
`

const getConsoleHeaderTabStyles = (isActive) => css`
  height: 100%;
  line-height: 34px;
  font-size: 14px;
  flex-grow: 1;
  cursor: pointer;
  text-transform: capitalize;
  border-bottom: 1px solid ${borderGrey};
  background-color: ${softGrey};

  :hover {
    background-color: ${hoverGrey};
  }

  ${isActive &&
    css`
      border-bottom: 0;
      background-color: white;

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

const ConsoleHeader = ({activeTab, selectConsoleTab}) => {
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
  isConsoleOpen: PropTypes.bool.isRequired,
}

export default ConsoleHeader
