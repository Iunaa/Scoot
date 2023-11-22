import ButtonLink from "../../atoms/ButtonLink/ButtonLink";
import ImageCard from "../../atoms/ImageCard/ImageCard";
import SectionText from "../../atoms/SectionText/SectionText";
import SectionTitle from "../../atoms/SectionTitle/SectionTitle";
import styles from "./servicecard.module.scss";

export default function ServiceCard(props) {
    const directionClass = `${styles.card} ${props.className} ${
      styles[`card--${props.direction}`]
    }`;
  return (
    <section className={directionClass}> 
     
        <ImageCard className={styles.card__img} src={props.src} />
        <div className={styles.card__allcomponents}>
          <SectionTitle
            className={styles.card__title}
            title={props.title}
            typography={"title"}
          />

          <SectionText
            className={styles.card__paragraph}
            text={props.text}
            typography={"body"}
          />
          <ButtonLink
            className={styles.card__buttonLink}
            typography={"button"}
            label={props.label}
          />
        </div>
      
    </section>
  );
}
