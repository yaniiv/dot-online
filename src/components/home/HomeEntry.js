import React from "react"
import { css } from "@emotion/core"
import * as COLORS from "../../colors"
import MagicBorder from "./MagicBorder"
import Layout from "../Layout"

const isClient = () => typeof window !== "undefined"

const HomeEntry = () => {
  return (
    isClient() && (
      <Layout>
        <main>
          <div
            css={css`
              div,
              span,
              a {
                font-size: 20px;
                padding: 2px 0;
              }

              h3 {
                margin: 0;
              }
            `}
          >
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
                position: absolute;
                background: ${COLORS.TRANSPARENT};
                color: ${COLORS.YELLOW};
                position: absolute;
                /* width: 300px; */
                div,
                span,
                a {
                  font-size: 20px;
                }

                left: 12vw;
                top: 74vh;
                @media (min-width: 768px) {
                  top: 22vh;
                  left: 32vw;
                }

                span {
                  padding-left: 12px;
                }
              `}
            >
              <h3>volunteering</h3>
              <div>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www1.nyc.gov/assets/cto/#/press-release/new-york-city-celebrates-first-cohort-of-nyc-x-innovation-fellows"
                >
                  NYC[x] Innovation Fellowship
                </a>
                <span>
                  - the innaugural cohort of the NYC[x] innovation fellowship
                  program - 2020
                </span>
              </div>
              <div>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.usdigitalresponse.org/"
                >
                  U.S. Digital Response
                </a>
                <span>- using tech for public service - ongoing </span>
              </div>
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
                  left: 60vw;
                  top: 36vh;
                }
                span {
                  padding-left: 12px;
                }
              `}
            >
              <div>
                <h3>side-projects</h3>
                <div>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.aftertheussr.com/"
                  >
                    aftertheussr.com
                  </a>
                  <span>
                    - visualizing post-Soviet migration patterns - 2019
                  </span>
                </div>
                <div>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="http://www.thiswebsiteisnotaboutyou.com/"
                  >
                    thiswebsiteisnotaboutyou.com
                  </a>
                  <span>
                    - what does a website feel like when you can't see yourself
                    in it? - 2019
                  </span>
                </div>
                <div>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://sperry.work/"
                  >
                    sperry.work
                  </a>
                  <span>- directors need websites too - 2018</span>
                </div>
                <div>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.yaniv.online/"
                  >
                    yaniv.online
                  </a>
                  <span>- my portfolio, à la terminal - 2017</span>
                </div>
                <div>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/dispersionjs/dispersion"
                  >
                    dispersion.js
                  </a>
                  <span>
                    - a library for hosting websites for free on IPFS - 2016
                  </span>
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
                <h3>other</h3>
                <div>
                  <a href="https://github.com/yaniiv">github</a>{" "}
                </div>
                <div>
                  <a href="https://linkedin.com/in/ygoldobin">linkedin</a>
                </div>
                <div>
                  <a href="https://medium.com/@yaniv_g">medium</a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    )
  )
}

export default HomeEntry
