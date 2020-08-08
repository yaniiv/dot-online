import React, { useState } from "react"
import { Waypoint } from "react-waypoint"
import { css } from "@emotion/core"

import Layout from "../Layout"
import Duality from "../threejs/Duality"
// import Contact from "../contact/Contact"
// import Projects from "../projects/Projects"

import SideNav from "../SideNav"
// import Intro from "../about/Intro"
// import TopNav from "../TopNav"

// import About from "../about/About"
import MagicBorder from "./MagicBorder"

import * as COLORS from "../../colors"
import Project from "../projects/Project"
import Projects from "../projects/Projects"

const HomeEntry = () => {
  const [pauseDuality, setPauseDuality] = useState(false)
  const [isTransparent, setHeaderTransparent] = useState(false)

  return (
    <Layout>
      {/* <SideNav isTransparent={isTransparent} /> */}
      {/* <Intro isTransparent={isTransparent} /> */}
      <div
        css={css`
          z-index: 20;
        `}
      >
        {/* <TopNav isTransparent={isTransparent} /> */}
        <div
          css={css`
            display: absolute;
            background: ${COLORS.PURPLE};
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
            /* width: 300px; */
            a:visited {
              color: ${COLORS.YELLOW};
            }

            @media (min-width: 768px) {
              left: 68vw;
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
                href="http://www.thiswebsiteisnotaboutyou.com/"
              >
                thiswebsiteisnotaboutyou.com
              </a>
            </div>
            <div>
              <a href="https://www.aftertheussr.com/">aftertheussr.com</a>
            </div>
            <div>
              <a href="https://sperry.work/">sperry.work</a>
            </div>
            <div>
              <a href="https://www.yaniv.online/">yaniv.online</a>
            </div>
            <div>
              <a href="https://github.com/dispersionjs/dispersion">
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
            width: 300px;
            a:visited {
              color: ${COLORS.YELLOW};
            }

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
        <Duality pauseRender={pauseDuality} />
      </div>

      {/* <Projects /> */}

      {/*         
        <Waypoint
          onEnter={() => {
            setPauseDuality(false)
            setHeaderTransparent(false)
          }}
          onLeave={() => {
            setPauseDuality(true)
            setHeaderTransparent(true)
          }}
        /> */}

      {/* <Waypoint
          onEnter={() => {
            setPauseDuality(false)
          }}
          onLeave={() => {}}
        />


        <div>
      <About />
            <MagicBorder />

      </div>
      <Waypoint
        onEnter={() => {
          setPauseDuality(true)
        }}
        onLeave={() => {}}
      />


      <Contact /> */}
      {/* <div
        css={css`
          position: absolute;
          top: 30vh;
          left: 30vh;
        `}
      >
        <MagicBorder />
      </div> */}
    </Layout>
  )
}

export default HomeEntry
