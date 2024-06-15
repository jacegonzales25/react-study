import { useState } from "react";
import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  function handleChange(identifier, value) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: false,
    }));
  }

  const emailIsInvalid =
    didEdit.email &&
    !isNotEmpty(enteredValues.email) &&
    !isEmail(enteredValues.email);

  const passwordIsInvalid =
    didEdit.password && hasMinLength(enteredValues.password, 6);

  function handleSubmission(event) {
    event.preventDefault();
    console.log(enteredValues);
  }

  function handleInputBlur(identifier) {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
    }));
  }

  return (
    <form onSubmit={handleSubmission}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onChange={(event) => handleChange("email", event.target.value)}
          onBlur={() => handleInputBlur("email")}
          error={emailIsInvalid && "Please enter a valid email!"}
          value={enteredValues.email}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onChange={(event) => handleChange("password", event.target.value)}
          onBlur={() => handleInputBlur("password")}
          value={enteredValues.password}
          error={passwordIsInvalid && "Please enter a valid password!"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
