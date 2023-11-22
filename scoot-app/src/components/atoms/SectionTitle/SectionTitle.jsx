import styles from "./sectiontitle.module.scss";

export default function SectionTitle(props) {
  const TitleClass = `${styles.sectionTitle} ${props.className} ${styles[`sectionTitle--${props.typography}`]} `;
  return <span className={TitleClass}>{props.title}</span>;
}
