import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errMsg, setErrMsg] = useState("");

  function handleChange(e) {
    // validate email
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      isValid ? setErrMsg("") : setErrMsg("Your email address is invalid.");
    } else {
      e.target.value.length
        ? setErrMsg("")
        : setErrMsg(`${e.target.name} is required.`);
    }

    if (!errMsg) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <section>
      <h1 data-testid="h1tag">Contact Me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            defaultValue={formState.name}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            name="email"
            defaultValue={formState.email}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            defaultValue={formState.message}
            onBlur={handleChange}
          />
        </div>
        {errMsg && (
            <div>
                <p className="error-text">{errMsg}</p>
            </div>
        )}
        <button type="submit" data-testid="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
