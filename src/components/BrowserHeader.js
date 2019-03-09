import React from "react"

import * as styles from "./Project.style"
import BrowserButton from "./BrowserButton"

const BrowserHeader = ({ link }) => {
  return (
    <div css={styles.browserHeader}>
      <div css={styles.browserButtons}>
        <BrowserButton />
        <BrowserButton />
        <BrowserButton />
      </div>
      <div css={styles.browserUrlBarContainer}>
        <div css={styles.browserUrlBar}>
          <a
            css={styles.browserUrlLink}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link}
          </a>
        </div>
      </div>
    </div>
  )
}

export default BrowserHeader
