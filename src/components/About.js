// import PropTypes from "prop-types"
import React from "react"
import Icon from "./Icon"
import { css } from "@emotion/core"

const infoIconStyle = css`
  width: 40px;
  height: 40px;
  z-index: 30;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 50px;
    height: 50px;
  }
`

const fullPageOverlayStyles = css`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  bottom: 0;
  background-color: lightgoldenrodyellow;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const aboutTextStyles = css`
  width: 400px;
  height: 400px;
  margin: 0 auto;
  font-family: Lucida Grande;

  > div {
    margin: 12px 0;
  }
`

const AboutContent = () => {
  return (
    <div css={fullPageOverlayStyles} >
        <div css={aboutTextStyles}>
          <div>Hello, i'm Yaniv.</div>
          <div>I'm a software engineer in Los Angeles, California.</div>
          <div>I'm particularly interested in using data and javascript to tell compelling stories.</div>
          <div>This site is a collection of some of my projects.</div>
          <div className="proffesional">For more professional stuff, you can check out my <a target="_blank" href="https://www.linkedin.com/in/ygoldobin">linkedin</a>.</div>
        </div>
    </div>
  )
}

class About extends React.Component {
  constructor(props) {
    super(props)

    this.state = { isOverlayOpen: false }
  }

  toggleIsOverlayOpen = () => {
    this.setState(prevState => ({ isOverlayOpen: !prevState.isOverlayOpen }))
  }

  render() {
    return (
      <div
        style={{
          background: `transparent`,
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: '20',
        }}
      >
        {this.state.isOverlayOpen && <AboutContent />}

        <div
          style={{
            margin: `0 auto`,
            display: "flex",
            flexDirection: "column",
            padding: `1.45rem 2rem`,
          }}
        >
          <div css={infoIconStyle} onClick={this.toggleIsOverlayOpen}>
            {
              this.state.isOverlayOpen 
                ? <Icon css={css`stroke-width: 1;`}  name="close" viewBox="0 0 12 12" />
                : <Icon name="hamburger" viewBox="0 0 32 32" />
            }

          {/* : <Icon css={css`stroke-width: 4;`} name="info" viewBox="0 0 330 330" /> */}

            {/* <Icon name="info" viewBox="0 0 330 330" /> */}
          </div>
        </div>
      </div>
    )
  }
}

About.propTypes = {}

About.defaultProps = {}

export default About
