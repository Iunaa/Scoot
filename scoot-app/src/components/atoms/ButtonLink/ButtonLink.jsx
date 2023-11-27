import styles from "./buttonlink.module.scss";

 export default function ButtonLink (props) {
  const ButtonClass = `${styles.buttonLink} ${props.className} ${
    styles[`buttonLink--${props.typography}`]
  } `;
  return (
    <a className={ButtonClass} href="#">
      {props.label}
    </a>
  );
}


