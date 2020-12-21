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
                font-size: 16px;
                padding: 2px 0;
              }
              h3 {
                font-size: 20px;
                margin: 0;
              }

              @media (min-width: 768px) {
                div,
                span,
                a {
                  font-size: 20px;
                  padding: 2px 0;
                }
                h3 {
                  font-size: 22px;
                }
              }
            `}
          >
            <div
              css={css`
                position: absolute;
                display: none;
                @media (min-width: 768px) {
                  display: block;
                  top: 34vh;
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
                left: 12vw;
                top: 78vh;
                @media (min-width: 768px) {
                  top: 16vh;
                  left: 22vw;
                }

                span {
                  padding-left: 6px;
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
                  left: 50vw;
                  top: 36vh;
                }
                span {
                  padding-left: 6px;
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
                left: 8vw;
                top: 46vh;
                @media (min-width: 768px) {
                  left: 22vw;
                  top: 66vh;
                }

                span {
                  padding-left: 6px;
                }
              `}
            >
              <div>
                <h3>blog posts</h3>
                <div>
                  <a href="https://medium.com/@yaniv_g/hosting-websites-on-ipfs-with-ipns-b94659c42b52">
                    Hosting websites on IPFS with IPNS
                  </a>
                  <span>- 2016</span>
                </div>
                <div>
                  <a href="https://medium.com/@yaniv_g/dont-use-bodyparser-json-with-jquery-post-d034c44ac7ad">
                    Jquery.post doesn’t play nice with bodyparser.json
                  </a>
                  <span>- 2016</span>
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
                left: 62vw;
                top: 58vh;
                @media (min-width: 768px) {
                  left: 68vw;
                  top: 66vh;
                }
              `}
            >
              <div>
                <h3>code</h3>
                <div>
                  <a href="https://github.com/yaniiv">github</a>{" "}
                </div>
                <h3
                  css={css`
                    padding-top: 20px;
                  `}
                >
                  professional work
                </h3>
                <div>
                  <a href="https://linkedin.com/in/ygoldobin">linkedin</a>
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
