import React from "react"
import { useForm, ValidationError } from '@formspree/react';

const Form = () => {
  const [state, handleSubmit] = useForm("mayaryoo");
  if (state.succeeded) {
      return <p>OPTRA ÑUIEFHPÑIOuHVÑOERIh`ÓÑRUieFH</p>;
  }

  return (
    <form onSubmit={handleSubmit} method="post" action="https://formspree.io/f/mayaryoo">
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <input 
        id="number"
        type="number" 
        name="number"
      />
      <input 
        id="name"
        type="name" 
        name="name"
      />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  )
}

export default Form
