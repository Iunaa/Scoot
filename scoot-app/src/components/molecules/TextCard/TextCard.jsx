import styles from "./workcard.module.scss";
import SectionText from "../../atoms/SectionText/SectionText";
import SectionTitle from "../../atoms/SectionTitle/SectionTitle";
import { ButtonLink } from "../../atoms/ButtonLink/ButtonLink";

export default function TextCard(title, text, label) {
  return (
    <section className={styles.container}>
      <SectionTitle
        className={`${styles.container__title}`}
        title={title}
      />

      <SectionText
        className={`${styles.container__paragraph} typograph--body`}
        text={text}
      />

      <ButtonLink
        className={`${styles.container__btnLink} typography--button`}
        label={label}
      />
    </section>
  );
}
