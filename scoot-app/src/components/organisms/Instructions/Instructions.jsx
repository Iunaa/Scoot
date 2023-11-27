import styles from "./instructions.module.scss";
import SectionText from "../../atoms/SectionText/SectionText";
import SectionTitle from "../../atoms/SectionTitle/SectionTitle";

export default function Instruction() {
  const sections = [
    {
      SectionTitle: "Locate with app",
      SectionText:
        "Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away.",
      Svg: (
        <svg
          className={styles.cards__svg}
          // width="56"
          // height="56"
          viewBox="0 0 56 56"
          fill=""
        >
          <use href="#map" xlinkHref="#map" />
        </svg>
      ),
    },
    {
      SectionTitle: "Pick your scooter",
      SectionText:
        "We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost.",
      Svg: (
        <svg
          className={styles.cards__svg}
          // width=""
          // height=""
          viewBox="0 0 56 56"
          fill=""
        >
          <use href="#scooter" xlinkHref="#scooter" />
        </svg>
      ),
    },
    {
      SectionTitle: "Enjoy the ride",
      SectionText:
        "Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps.",
      Svg: (
        <svg
          className={styles.cards__svg}
          // width="56"
          // height="56"
          viewBox="0 0 56 56"
          fill=""
        >
          <use href="#ride" xlinkHref="#ride" />
        </svg>
      ),
    },
  ];

  return (
    <section className={styles.cards}>
      {sections.map(
        (
          section,
          index //section é o item do array
        ) => (
          <div className={styles.cards__container} key={index}>
            {/* key é para a DOM reconhecer qual elemento está sendo renderizado no
            momento */}
            <div className={styles.cards__alltext}>
              {section.Svg}
              <SectionTitle
                className={styles.cards__title}
                title={section.SectionTitle}
                typography={"h4"}
              />
              <SectionText
                className={styles.cards__paragraph}
                text={section.SectionText}
                typography={"body"}
              />
            </div>
          </div>
        )
      )}
    </section>
  );
}
