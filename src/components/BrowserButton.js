import React from "react"

const BrowserButton = ({
  width = "30px",
  height = "30px",
  background = "transparent",
  border = "3px solid black",
  borderRadius = "50%",
  padding = 0,
}) => (
  <div
    style={{
      flex: "1",
      display: "flex",
      flexDirection: "column",
      padding,
      justifyContent: "center",
    }}
  >
    <div
      style={{
        width,
        height,
        background,
        border,
        padding,
        borderRadius,
        margin: "auto",
      }}
    />
  </div>
)

export default BrowserButton
