import React, { useState } from "react"
import { Waypoint } from "react-waypoint"

import Layout from "../Layout"
import Duality from "../threejs/Duality"
import Contact from "../contact/Contact"
import Projects from "../projects/Projects"

import SideNav from "../SideNav"
import TopNav from "../TopNav"

import About from "./About"
// import MagicBorder from "./MagicBorder"

// import * as COLORS from "../../colors"

const AboutEntry = () => {
  const [isTransparent, setHeaderTransparent] = useState(false)

  return (
    <Layout>
      <SideNav isTransparent={isTransparent} />
      {/* <TopNav isTransparent={isTransparent} /> */}
      <Waypoint
        onEnter={() => {
          setHeaderTransparent(false)
        }}
        onLeave={() => {
          setHeaderTransparent(true)
        }}
      />
      <About />

      {/* <MagicBorder backgroundColor={COLORS.GREY} /> */}
      {/* <MagicBorder /> */}
      <Contact />
    </Layout>
  )
}

export default AboutEntry
