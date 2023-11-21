import Styles from "./sectiontitle.module.scss";

export default function SectionTitle(props) {
  const TitleClass = `${Styles.sectionTitle} ${props.className} ${Styles[`sectionTitle--${props.typography}`]} `;
  return <span className={TitleClass}>{props.title}</span>;
}
