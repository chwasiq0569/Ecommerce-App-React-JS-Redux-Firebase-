import React from "react";
import { login, signUp } from "./../utils/utils";
import Button from "../utils/Button";

const Form = ({
  setEmail,
  email,
  setPassword,
  password,
  showBtn,
  setFireErrors,
  fireErrors,
  props,
}) => {
  return (
    <div className="signIn__form">
      {fireErrors ? <p className="fireErrors">{fireErrors}</p> : null}
      <form>
        <label name="email">Email*</label>
        <input
          type="email"
          className="emailInput"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        <label name="password">Password*</label>
        <input
          type="password"
          className="passwordInput"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        />
        {showBtn ? (
          <Button
            className=""
            type="submit"
            text="SIGN UP"
            func={(e) => {
              e.preventDefault();
              signUp(props, email, password, setFireErrors);
            }}
          />
        ) : (
          <Button
            className=""
            type="submit"
            text="CONTINUE"
            func={(e) => {
              e.preventDefault();
              login(props, email, password, setFireErrors);
            }}
          />
        )}
      </form>
    </div>
  );
};

export default Form;
