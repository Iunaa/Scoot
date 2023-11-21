import Styles from "./buttonlink.module.scss";

export default function ButtonLink(props) {
  const ButtonClass = `${Styles.link__anchor} ${props.className} ${
    Styles[`button__Link--${props.typography}`]
  } ${Styles[`button__Link--${props.position}`]}`;
  return (
    <a className={ButtonClass} href="/button">
      {props.label}
    </a>
  );
}
