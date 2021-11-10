import React from "react"

const Form = () => {
  return (
    <form name="Contact Form" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="Contact Form" />
      <div>
        <label>Your Email:</label>
        <input type="email" name="email" />
      </div>
      <div>
        <label>Message:</label>
        <textarea name="message" />
      </div>
      <button type="submit">Send</button>
      <p>The form has a data-netlify="true" attribute, which tells Netlify to
      register the form while building your site. The form has a name attribute
      describing it. This is the name Netlify will give the form when you deploy
      this code. The form’s name attribute is repeated in a hidden form-name
      field. This is absolutely necessary. If you omit this field or mistype the
      name, your entries will either throw an error or get lost somewhere in the
      internet abyss. Every field has a name attribute. A field must have a name
      for that data to be persisted within Netlify.
      </p>
    </form>
  )
}

export default Form
