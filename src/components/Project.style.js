import { css } from "@emotion/core"

export const projectContainer = css`
  height: ${window.innerHeight}px;
  width: ${window.innerWidth}px;
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
  position: relative;
`

export const browserHeader = css`
  height: 60px;
  width: 100%;
  display: flex;
  border-bottom: 8px solid black;
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

  :hover {
    text-decoration: underline;
  }
`

// .transform {
//   position: relative;

//   aside {
//     position: absolute;
//     top: 0;
//     left: 0;
//     bottom: 0;
//     width: 14rem;
//   }

//   article {
//     position: absolute;
//     top: 0;
//     left: 4rem;
//     bottom: 0;
//     width: calc(100% - 4rem);
//     transform: translate3d(0, 0, 0);
//     transition: transform .25s ease-in-out;
//   }

//   &.expanded article {
//     transform: translate3d(10rem, 0, 0);
//   }
// }
