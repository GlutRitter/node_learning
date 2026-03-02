import styles from "./MyInput.module.css";

export default function MyInput(props) {
  return <input className={styles.myInput} {...props} />;
}
