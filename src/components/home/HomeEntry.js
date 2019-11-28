import React, { useState } from "react"
import { Waypoint } from "react-waypoint"

import Layout from "../Layout"
import Duality from "../threejs/Duality"
import MagicBorder from "./MagicBorder"
import Contact from "../contact/Contact"
import Projects from "../projects/Projects"
import About from "../about/About"
import SideNav from "../SideNav"

import * as COLORS from "../../colors"

const HomeEntry = () => {
  const [pauseDuality, setPauseDuality] = useState(false)

  return (
    <Layout>
      <SideNav />
      <Duality pauseRender={pauseDuality} />
      <MagicBorder />
      <Waypoint
        onEnter={() => {
          setPauseDuality(false)
        }}
      />
      <About />
      <Waypoint
        onEnter={() => {
          setPauseDuality(true)
        }}
      />
      <MagicBorder backgroundColor={COLORS.GREY} />
      <Projects />
      <MagicBorder />
      <Contact />
    </Layout>
  )
}

export default HomeEntry
