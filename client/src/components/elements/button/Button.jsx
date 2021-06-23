import styles from "./Button.module.scss";

export const Button = (props) => {
  return <button className={styles.button}>{props.text}</button>;
};
