import React from "react"

import Email from "./Email"

import * as QUERIES from "../../queries"

const Contact = ({ prismicHome }) => {
  return (
    <div id="contact">
      <Email prismicHome={prismicHome} />
    </div>
  )
}

export default Contact
