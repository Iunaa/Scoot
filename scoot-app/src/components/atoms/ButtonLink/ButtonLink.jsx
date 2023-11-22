import Styles from "./buttonlink.module.scss";

export default function ButtonLink(props) {
  const ButtonClass = `${Styles.link__anchor} ${props.className} ${
    Styles[`button__Link--${props.typography}`]
  } `;
  return (
    <a className={ButtonClass} href="/button">
      {props.label}
    </a>
  );
}
