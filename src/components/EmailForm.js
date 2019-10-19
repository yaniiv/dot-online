import React from "react"
import useForm from "react-hook-form"
import { css } from "@emotion/core"

import * as COLORS from "../constants/colors"
import * as SIZES from "../constants/sizes"

const pageContainer = css`
  height: 100vh;
  width: 100vw;
  background: ${COLORS.CONTACT_FORM_BACKGROUND};

  display: flex;
  flex-direction: column;
  justify-content: center;
`

const formContainer = css`
  max-width: ${SIZES.MAX_TEXT_WIDTH};
  margin: 0 auto;
  /* display: flex; */
  /* flex-direction: column; */

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;

    input {
      border-radius: 4px;
      margin: 0 0 24px;
    }
  }
`

export default function EmailForm() {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => console.log(data)
  console.log(errors)

  return (
    <div css={pageContainer}>
      <div css={formContainer}>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Name"
              name="Name"
              ref={register({ required: true, maxLength: 100 })}
            />
            <input
              type="text"
              placeholder="Email"
              name="Email"
              ref={register({ required: true, pattern: /^\S+@\S+$/i })}
            />
            <input
              type="text"
              placeholder="Email Body"
              name="Email Body"
              ref={register({ required: true })}
            />

            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  )
}
