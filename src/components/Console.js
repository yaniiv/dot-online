import React from "react"
import * as styles from "./Console.style"
import { css } from "@emotion/core"

export const console = css`
  position: absolute;
  right: 0;
  width: 200px;
  height: calc(100% - 60px);
  background-color: lightgoldenrodyellow;
  bottom: 0;
`

const Console = () => (
  <div className="console" css={console}>
    <div />
  </div>
)

export default Console
