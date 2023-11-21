import Styles from "./sectiontext.module.scss";

export default function SectionText(props) {
  const TextClass = `${Styles.sectionText}  ${props.className} ${
    Styles[`sectionText--${props.typography}`]
  } `;

  return <span className={TextClass}>{props.text}</span>;
}
