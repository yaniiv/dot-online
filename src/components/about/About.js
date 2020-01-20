import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"

import Button from "../Button"

import * as COLORS from "../../colors"

const container = css`
  background: ${COLORS.PURPLE};
  font-weight: 600px;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  margin: 0 auto;
  padding: 12px 30px;
  font-size: 18px;

  @media (min-width: 758px) {
    font-size: 20px;
    padding: 0;
  }
  color: ${COLORS.WHITE};

  @media (min-width: 768px) {
    max-width: 648px;
  }

  @media (min-width: 1024px) {
    max-width: 748px;
  }

  @media (min-width: 1200px) {
    max-width: 848px;
  }
`

const text = css`
  /* max-width: 680px; */
  min-height: 280px;
  width: 100%;

  margin: 0 auto;
  padding: 24px;
  background: ${COLORS.GREY};
  border: 2px solid black;
  border-radius: 2px;
  box-shadow: 24px 24px 2px 2px rgba(0, 0, 0, 0.2);

  @media (min-width: 758px) {
    border: 3px solid black;
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
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media (min-width: 758px) {
    flex-direction: row;
  }
`

const renderActiveContent = (activeSection, prismicData) => {
  switch (activeSection) {
    case "about":
      return <AboutText data={prismicData} />
    case "skills":
      return <SkillsText data={prismicData} />
    case "education":
      return <EducationText data={prismicData} />
    default:
      return
  }
}

const AboutText = ({ data }) => (
  <div>
    <img alt="yaniv" css={image} src={data.image_of_me.url} />
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
        <div css={text}>{renderActiveContent(activeSection, prismicData)}</div>
        <div css={buttonContainer}>
          <Button
            isActive={activeSection === "about"}
            text="About"
            iconName="about"
            onClick={() => setActiveSection("about")}
            extraStyles={css`
              margin-left: auto;

              @media (min-width: 758px) {
                margin-left: 24px;
              }
            `}
          />
          <Button
            isActive={activeSection === "skills"}
            text="Skills"
            iconName="skills"
            onClick={() => setActiveSection("skills")}
            extraStyles={css`
              margin-left: auto;

              @media (min-width: 758px) {
                margin-left: 24px;
              }
            `}
          />
          <Button
            isActive={activeSection === "education"}
            text="Education"
            iconName="education"
            onClick={() => setActiveSection("education")}
            extraStyles={css`
              margin-left: auto;

              @media (min-width: 758px) {
                margin-left: 24px;
              }
            `}
          />
        </div>
      </div>
    </div>
  )
}

export default About
