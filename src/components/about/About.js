import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"

import Button from "../Button"

import * as COLORS from "../../colors"

const container = css`
  background: ${COLORS.TRANSPARENT};
  font-weight: 600px;
  min-height: 90vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 10;
  width: 100%;
  margin: 0 auto;
  padding: 12px 30px;
  font-size: 18px;

  @media (min-width: 758px) {
    font-size: 20px;
    height: 90vh;
    padding: 0;
  }
  color: ${COLORS.WHITE};

  @media (min-width: 768px) {
    max-width: 648px;
  }

  @media (min-width: 1024px) {
    max-width: 780px;
  }

  @media (min-width: 1200px) {
    max-width: 848px;
  }
`

const text = css`
  /* max-width: 680px; */
  width: 100%;

  margin: 0 auto;
  padding: 24px;
  background: ${COLORS.PURPLE_DARK};
  /* border: 2px solid black; */
  border-radius: 2px;
  box-shadow: 24px 24px 2px 2px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ul {
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    li {
      background: ${COLORS.TANG};
      border-radius: 8px;
      border: 2px solid black;
      padding: 4px 12px;
      margin: 8px;
    }
  }

  p {
    padding: 8px 0;
  }

  @media (min-width: 758px) {
    /* border: 3px solid black; */
    border-radius: 6px;
  }

  a {
    /* color: ${COLORS.YANIV}; */
    color: ${COLORS.LIGHT_END_DUALITY};
  }

  a:visited {
    color: ${COLORS.DARK_END_DUALITY};
  }

  a:hover {
    text-decoration: underline;
  }
`

const image = css`
  float: left;
  height: 80px;
  width: 80px;
  border-radius: 80px;
  margin: 0 10px;

  @media (min-width: 758px) {
    height: 100px;
    width: 100px;
    border-radius: 100px;
    margin: 10px 30px;
  }
`

const buttonContainer = css`
  padding: 20px 0 0;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;

  @media (min-width: 758px) {
    justify-content: flex-end;
  }
`

const buttonStyles = css`
  margin: 10px 20px;
  box-shadow: none;
  color: #363433;
  background: #ffd926;
  border: 2px solid #412c94;

  @media (min-width: 758px) {
  }
`

const renderActiveContent = (activeSection, prismicData) => {
  switch (activeSection) {
    case "about":
      return <AboutText data={prismicData} />
    case "skills":
      return <AboutText data={prismicData} />
    case "education":
      return <AboutText data={prismicData} />
    default:
      return
  }
}

const AboutText = ({ data }) => (
  <div>
    <div />
    {/* <img alt="yaniv" css={image} src={data.image_of_me.url} /> */}
    <div dangerouslySetInnerHTML={{ __html: data.text_rich_field.html }} />
  </div>
)

const SkillsText = ({ data }) => (
  <div>
    <div dangerouslySetInnerHTML={{ __html: data.skills_rich_field.html }} />
  </div>
)

const EducationText = ({ data }) => (
  <div>
    <div dangerouslySetInnerHTML={{ __html: data.education_rich_field.html }} />
  </div>
)

const PRISMIC_ABOUT_QUERY = graphql`
  query About {
    prismicAbout {
      data {
        image_of_me {
          url
        }
        text_rich_field {
          html
        }
        skills_rich_field {
          html
        }
        education_rich_field {
          html
        }
      }
    }
  }
`

const About = () => {
  const [activeSection, setActiveSection] = useState("about")
  const { prismicAbout } = useStaticQuery(PRISMIC_ABOUT_QUERY)

  const prismicData = prismicAbout.data

  return (
    <div>
      <div id="about" css={container}>
        <div css={text}>
          {renderActiveContent(activeSection, prismicData)}
          {/* <div css={buttonContainer}>
            <Button
              isActive={activeSection === "about"}
              text="About"
              iconName="about"
              onClick={() => setActiveSection("about")}
              extraStyles={buttonStyles}
            />
            <Button
              isActive={activeSection === "skills"}
              text="Skills"
              iconName="skills"
              onClick={() => setActiveSection("skills")}
              extraStyles={buttonStyles}
            />
            <Button
              isActive={activeSection === "education"}
              text="Studies"
              iconName="education"
              onClick={() => setActiveSection("education")}
              extraStyles={buttonStyles}
            />
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default About
