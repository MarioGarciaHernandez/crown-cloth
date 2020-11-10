import React from "react";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

import "./sign-form.styles.scss";

const SignForm = () => (
  <div className="sign-form">
    <SignIn />
    <SignUp />
  </div>
);

export default SignForm;
