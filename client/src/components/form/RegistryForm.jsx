/* eslint-disable no-useless-escape */
import { useState } from "react";
import { Field } from "../elements/field/Field";
import { Button } from "../elements/button/Button";
import { registration } from "../../actions/user";

import styles from "./css/Form.module.scss";

import { ReactComponent as UserSVG } from "./media/user.svg";
import { ReactComponent as LockSVG } from "./media/lock.svg";
import { ReactComponent as EmailSVG } from "./media/email.svg";

export const RegistryForm = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordDouble, setPasswordDouble] = useState();

  const patternPassword =
    "^(?=(?:[^A-Z]*[A-Z]){2,}[^A-Z]*$)(?=(?:D*d){4,}D*$)(?=.*[!@#$%^&*]).+$";
  const patternEmail = "[-.w]+@([w-]+.)+[w-]+";

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
        value={email}
        placeholder="Email"
        setValue={setEmail}
        svg={() => <EmailSVG />}
        minlength="1"
        maxlength="24"
        pattern={patternEmail}
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
      <Field
        value={passwordDouble}
        placeholder="Password"
        setValue={setPasswordDouble}
        svg={() => <LockSVG />}
        minlength="8"
        maxlength="24"
        pattern={patternPassword}
      />

      <div className={styles.loginSettingsContainer}>
        <div className={styles.rememberContainer}>
          <input type="checkbox" id="rememberCheckbox" />
          <label htmlFor="rememberCheckbox">Remember me</label>
        </div>
      </div>
      <Button text="Registry" onClick={() => registration(username, email, password)}/>
    </form>
  );
};
