import styles from "./instruction.module.scss"
import SectionText from "../../atoms/SectionText/SectionText";
import SectionTitle from "../../atoms/SectionTitle/SectionTitle";

export default function Instruction() {
    return (
      <section className={styles.cards}>
        <div className={styles.cards__container}>
          <SectionTitle 
          className={styles.cards__title}
          title={"Locate with app"} />
          <SectionText
            text={
              "Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away. "
            }
          />
        </div>

        <div>
          <SectionTitle 
          title={"Pick your scooter"} />
          <SectionText
            text={
              "We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost."
            }
          />
        </div>
        <div>
          <SectionTitle 
          title={"Enjoy the ride"} />
          <SectionText
            text={
              "Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps."
            }
          />
        </div>
      </section>
    );
}