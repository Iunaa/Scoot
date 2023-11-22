import styles from "./sectiontext.module.scss";

export default function SectionText(props) {
  const TextClass = `${styles.sectionText}  ${props.className} ${
    styles[`sectionText--${props.typography}`]
  } `;

  return <span className={TextClass}>{props.text}</span>;
}
