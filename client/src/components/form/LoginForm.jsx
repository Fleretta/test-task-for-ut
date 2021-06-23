/* eslint-disable no-useless-escape */
import { Link } from "react-router-dom";
import { useState } from "react";
import { Field } from "../elements/field/Field";
import { Button } from "../elements/button/Button";
import { auth } from "../../actions/user";

import styles from "./css/Form.module.scss";

import { ReactComponent as UserSVG } from "./media/user.svg";
import { ReactComponent as LockSVG } from "./media/lock.svg";

export const LoginForm = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const patternPassword =
    "^(?=(?:[^A-Z]*[A-Z]){2,}[^A-Z]*$)(?=(?:D*d){4,}D*$)(?=.*[!@#$%^&*]).+$";

  return (
    <form>
      <UserSVG className={styles.userIcon} />
      <Field
        value={username}
        placeholder="Username"
        setValue={setUsername}
        svg={() => <UserSVG />}
        minlength="1"
        maxlength="12"
      />
      <Field
        value={password}
        placeholder="Password"
        setValue={setPassword}
        svg={() => <LockSVG />}
        minlength="8"
        maxlength="24"
        pattern={patternPassword}
      />
      <div className={styles.loginSettingsContainer}>
        <div className={styles.rememberContainer}>
          <input type="checkbox" id="rememberCheckbox"/>
          <label htmlFor="rememberCheckbox">Remember me</label>
        </div>
        <button className={styles.forgotPasswordButton}>
          Forgot password?
        </button>
      </div>
      <Button text="Login" onClick={() => auth(username, password)}/>
      <div>
        <span className={styles.notAMember}>Not a member?</span>
        <Link to="registration">
          <button className={styles.createAccountButton}>Create account</button>
        </Link>
      </div>
    </form>
  );
};
