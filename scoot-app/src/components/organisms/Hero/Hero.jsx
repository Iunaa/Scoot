import ButtonLink from "../../atoms/ButtonLink/ButtonLink";
import SectionText from "../../atoms/SectionText/SectionText";
import SectionTitle from "../../atoms/SectionTitle/SectionTitle";
import styles from "./hero.module.scss";
import arrow from "../../../assets/img/Home/arrow.png";
import arrowTablet from "../../../assets/img/Home/arrowTablet.png";
import arrowDesk from "../../../assets/img/Home/arrowDesk.png";
import balls from "../../../assets/img/Home/balls.png";
import line from "../../../assets/img/Home/line.png";

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.container__alltext}>
        <SectionTitle
          className={`${styles.container__title}`}
          typography={"h3"}
          title={"Scooter sharing made simple"}
        />
        <div className={styles.container__textBnt}>
          <SectionText
            className={`${styles.container__paragraph}`}
            typography={"body"}
            text={
              "Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in each of our cities. Use our app to locate the nearest bike, unlock it with a tap, and you’re away!"
            }
          />
          <ButtonLink
            className={`${styles.container__btnLink}`}
            typography={"button"}
            label={"Get Scootin"}
          />
        </div>
      </div>

      <picture className={styles.container__picture}>
        <img className={styles.container__arrow} src={arrow} />
        <img className={styles.container__arrowTablet} src={arrowTablet} />
        <img className={styles.container__arrowDesk} src={arrowDesk} />
        <img className={styles.container__balls} src={balls} />
        <img className={styles.container__line} src={line} />
      </picture>
    </div>
  );
}
