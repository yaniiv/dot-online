import React from "react"
import useForm from "react-hook-form"

export default function EmailForm() {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => console.log(data)
  console.log(errors)

  return (
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
      <textarea
        name="Email Body"
        ref={register({ required: true, max: 1000 })}
      />

      <input type="submit" />
    </form>
  )
}
