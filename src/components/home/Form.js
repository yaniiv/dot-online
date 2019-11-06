import React from "react"
import useForm from "react-hook-form"
import { css } from "@emotion/core"

import Icon from "../Icon"

import * as COLORS from "../../colors"

const formContainer = css`
  width: 100%;
  min-width: 300px;
  flex: 1;
  border-radius: 4px;

  @media (min-width: 768px) {
    background: ${COLORS.PURPLE_DARK};
    padding: 18px;
    border-radius: 6px;
  }

  form {
    background: ${COLORS.PURPLE_DARK};
    font-size: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${COLORS.TRANSPARENT};

    input {
      margin: 0 0 24px 0;
      padding: 8px 18px;
    }
  }
`

const inputText = css`
  background: ${COLORS.GREY_DARK};
  color: ${COLORS.YELLOW};
  border: 2px solid ${COLORS.PURPLE};
  border-radius: 4px;
`

const submitButton = css`
  color: ${COLORS.GREY_DARK};
  background: ${COLORS.YELLOW};
  border: 2px solid ${COLORS.PURPLE};
  display: flex;
  border-radius: 4px;
  height: 50px;
  width: 150px;
  margin-left: auto;

  svg {
    display: block;
    margin-left: 8px;
    width: 24px;
    height: 24px;
  }
`

export default function Form() {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => console.log(data)
  console.log(errors)

  return (
    <div css={formContainer}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="name"
          name="name"
          css={inputText}
          ref={register({ required: true, maxLength: 100 })}
        />
        <input
          type="text"
          placeholder="email"
          name="email"
          ref={register({ required: true, pattern: /^\S+@\S+$/i })}
          css={inputText}
        />
        <input
          type="text"
          placeholder="email body"
          name="email body"
          ref={register({ required: true })}
          css={css`
            ${inputText}
            height: 100px;
          `}
        />

        <button type="submit" css={submitButton} value="Send Email">
          <div
            css={css`
              display: flex;
              margin: 0 auto;
            `}
          >
            Send Mail
            <div css={css``}>
              <Icon fill="black" viewBox="0 0 58 58" name="airplane" />
            </div>
          </div>
        </button>
      </form>
    </div>
  )
}
