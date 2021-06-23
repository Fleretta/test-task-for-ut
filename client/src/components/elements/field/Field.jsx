import styles from "./Field.module.scss";

export const Field = (props) => {
  return (
    <div className={styles.field}>
      {props.svg()}
      <input
        value={props.value}
        type="text"
        required="required"
        placeholder={props.placeholder}
        onChange={(e) => props.setValue(e.target.value)}
        minlength={props.minlength}
        maxlength={props.maxlength}
        pattern={props.pattern}
      />
    </div>
  );
};
