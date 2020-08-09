import React from "react"
import { css } from "@emotion/core"
import * as COLORS from "../../colors"
import MagicBorder from "./MagicBorder"
import Layout from "../Layout"

const HomeEntry = () => {
  return (
    window && (
      <Layout>
        <main>
          <div
            css={css`
              position: absolute;
              top: 32vh;
              @media (min-width: 768px) {
                top: 32vh;
                left: 0;
              }
            `}
          >
            <MagicBorder />
          </div>
          <div
            css={css`
              display: absolute;
              background: ${COLORS.PURPLE};
              color: ${COLORS.YELLOW};
              a {
                color: ${COLORS.YELLOW} !important;
              }
              a:visited {
                color: ${COLORS.ROSETTE} !important;
              }
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
              a {
                color: ${COLORS.YELLOW} !important;
              }
              a:visited {
                color: ${COLORS.ROSETTE} !important;
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
        </main>
      </Layout>
    )
  )
}

export default HomeEntry
