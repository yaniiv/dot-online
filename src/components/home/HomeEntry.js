import React from "react"
// import React, { useState } from "react"
// import { Waypoint } from "react-waypoint"
import { css } from "@emotion/core"
import SEO from "../Seo"
import * as COLORS from "../../colors"
import MagicBorder from "./MagicBorder"

import Duality from "../threejs/Duality"
// import Contact from "../contact/Contact"
// import Projects from "../projects/Projects"
const layoutStyles = backgroundColor => css`
  margin: auto;
  height: 100vh;
  width: 100%;
  background: ${COLORS.PURPLE};
  margin: 0 auto;

  a {
    color: ${COLORS.YELLOW} !important;
  }
  a:visited {
    color: ${COLORS.ROSETTE} !important;
  }
`
// import SideNav from "../SideNav"
// import Intro from "../about/Intro"
// import TopNav from "../TopNav"

// import About from "../about/About"

// import Project from "../projects/Project"
// import Projects from "../projects/Projects"
const HomeEntry = () => {
  // const [pauseDuality, setPauseDuality] = useState(false)
  // const [isTransparent, setHeaderTransparent] = useState(false)

  return (
    <div css={layoutStyles()}>
      <SEO title="Home" lang="en" keywords={[`yaniv`, `goldobin`]} />
      <main>
        {/* <Duality /> */}

        <div
          css={css`
            position: absolute;

            /* left: 12vw; */
            top: 32vh;
            @media (min-width: 768px) {
              top: 32vh;
              left: 0;
            }
          `}
        >
          <MagicBorder />
        </div>
        {/* <SideNav isTransparent={isTransparent} /> */}
        {/* <Intro isTransparent={isTransparent} /> */}
        {/* <TopNav isTransparent={isTransparent} /> */}
        <div
          css={css`
            display: absolute;
            background: ${COLORS.PUR};
            color: ${COLORS.YELLOW};

            position: absolute;
            /* width: 300px; */

            left: 12vw;
            top: 86vh;
            @media (min-width: 768px) {
              top: 22vh;
              left: 32vw;
            }
          `}
        >
          <span
            css={css`
              display: flex;
              font-weight: bolder;
            `}
          >
            contact
          </span>{" "}
          <a href="mailto:hello@yaniv.online">hello@yaniv.online</a>
        </div>
        <div
          css={css`
            display: absolute;
            background: ${COLORS.TRANSPARENT};
            color: ${COLORS.YELLOW};
            /* right: 8vw; */
            top: 6vh;
            z-index: 20;

            left: 18vw;
            position: absolute;

            @media (min-width: 768px) {
              left: 70vw;
              top: 26vh;
            }
          `}
        >
          <div>
            <div
              css={css`
                font-weight: 800;
              `}
            >
              projects
            </div>
            <div>
              <a
                target="_blank"
                rel="noreferrer"
                href="http://www.thiswebsiteisnotaboutyou.com/"
              >
                thiswebsiteisnotaboutyou.com
              </a>
            </div>
            <div>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.aftertheussr.com/"
              >
                aftertheussr.com
              </a>
            </div>
            <div>
              <a rel="noreferrer" target="_blank" href="https://sperry.work/">
                sperry.work
              </a>
            </div>
            <div>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.yaniv.online/"
              >
                yaniv.online
              </a>
            </div>
            <div>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/dispersionjs/dispersion"
              >
                dispersion.js
              </a>
            </div>
          </div>
        </div>
        <div
          css={css`
            display: absolute;
            background: ${COLORS.TRANSPARENT};
            color: ${COLORS.YELLOW};

            position: absolute;

            left: 68vw;
            top: 56vh;
            @media (min-width: 768px) {
              left: 38vw;
              top: 56vh;
            }
          `}
        >
          <div>
            <div
              css={css`
                font-weight: 800;
              `}
            >
              etc.
            </div>
            <div>
              <a href="https://twitter.com/yantonsoup">twitter</a>
            </div>
            <div>
              <a href="https://github.com/yantonsoup">github</a>{" "}
            </div>
            <div>
              <a href="https://linkedin.com/in/ygoldobin">linkedin</a>
            </div>
            <div>
              <a href="https://medium.com/@yaniv_g">medium</a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default HomeEntry
