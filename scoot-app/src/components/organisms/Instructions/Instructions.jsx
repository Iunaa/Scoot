import styles from "./instructions.module.scss";
import SectionText from "../../atoms/SectionText/SectionText";
import SectionTitle from "../../atoms/SectionTitle/SectionTitle";

export default function Instruction() {
  return (
    <section className={styles.cards}>
      <div className={styles.cards__container}>
        <svg
          className={styles.cards__svg}
          // width="56"
          // height="56"
          viewBox="0 0 56 56"
          fill=""
        >
          <use href="#map" xlinkHref="#map" />
        </svg>
        <div className={styles.cards__alltext}>
          <SectionTitle
            className={styles.cards__title}
            title={"Locate with app"}
            typography={"h4"}
          />
          <SectionText
            className={styles.cards__paragraph}
            text={
              "Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away. "
            }
            typography={"body"}
          />
        </div>
      </div>

      <div className={styles.cards__container}>
        <svg
          className={styles.cards__svg}
          // width=""
          // height=""
          viewBox="0 0 56 56"
          fill=""
        >
          <use href="#scooter" xlinkHref="#scooter" />
        </svg>
        <div className={styles.cards__alltext}>
          <SectionTitle
            className={styles.cards__title}
            typography={"h4"}
            title={"Pick your scooter"}
          />
          <SectionText
            text={
              "We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost."
            }
            typography={"body"}
            className={styles.cards__paragraph}
          />
        </div>
      </div>
      <div className={styles.cards__container}>
        <svg
          className={styles.cards__svg}
          // width="56"
          // height="56"
          viewBox="0 0 56 56"
          fill=""
        >
          <use href="#ride" xlinkHref="#ride" />
        </svg>

        <div className={styles.cards__alltext}>
          <SectionTitle
            className={styles.cards__title}
            typography={"h4"}
            title={"Enjoy the ride"}
          />
          <SectionText
            text={
              "Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps."
            }
            typography={"body"}
            className={styles.cards__paragraph}
          />
        </div>
      </div>
    </section>
  );
}
