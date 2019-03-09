import { css } from "@emotion/core"

export const console = css`
  position: absolute;
  right: 0;
  // top: 60px;
  // width: 14rem;
  height: calc(100% - 60px);
  background-color: lightgoldenrodyellow;
  left: 4rem;
  bottom: 0;
  width: calc(100% - 4rem);
`

  // border-top: 8px solid black;


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