import { css } from "@emotion/core"

export const projectContainer = css`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const project = css`

  margin: auto;
  padding: 24px;
  font-size: 16px;
  max-width: 500px;
  max-height: 468px;

  @media (min-width: 768px) {
    max-width: 648px;
    max-height: 468px;
  }
`

export const browserFrame = css`
  border: 8px solid black;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
`

export const browserHeader = css`
  border-bottom: 8px solid black;
  height: 60px;
  width: 100%;
  display: flex;
`

export const browserButtons = css`
  flex: 1;
  flex-direction: row;
  display: flex;
  padding: 0 16px;
`

export const browserUrlBarContainer = css`
  flex: 4;
  padding: 8px 8px;
`

export const browserUrlBar = css`
  background: transparent;
  border: 3px solid black;
  border-radius: 6px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const browserUrlLink = css`
  margin: auto 16px;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen;
  text-decoration: none;
  font-size: 18px;
  color: blue;
  font-weight: 400;
  letter-spacing: 0.3px;
`