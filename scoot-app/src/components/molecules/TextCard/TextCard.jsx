import Styles from "./workcard.module.scss";
import SectionText from "../../atoms/SectionText/SectionText";
import SectionTitle from "../../atoms/SectionTitle/SectionTitle";
import { ButtonLink } from "../../atoms/ButtonLink/ButtonLink";

export default function TextCard(title, text, label) {
  return (
    <section className={Styles.container}>
      <SectionTitle
        className={`${Styles.container__title}`}
        title={title}
      />

      <SectionText
        className={`${Styles.container__paragraph} typograph--body`}
        text={text}
      />

      <ButtonLink
        className={`${Styles.container__btnLink} typography--button`}
        label={label}
      />
    </section>
  );
}
