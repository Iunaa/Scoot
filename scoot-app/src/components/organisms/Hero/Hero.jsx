import ButtonLink from "../../atoms/ButtonLink/ButtonLink";
import SectionText from "../../atoms/SectionText/SectionText";
import SectionTitle from "../../atoms/SectionTitle/SectionTitle";
import Styles from "./hero.module.scss";
import arrow from "../../../assets/img/Home/arrow.png";
import arrowTablet from "../../../assets/img/Home/arrowTablet.png";
import balls from "../../../assets/img/Home/balls.png";
import line from "../../../assets/img/Home/line.png";

export default function Hero() {
  return (
    <div className={Styles.container}>
      <div className={Styles.container__allcomponts}>
        <div className={Styles.container__alltext}>
          <SectionTitle
            className={`${Styles.container__title}`}
            typography={"h3"}
            title={"Scooter sharing made simple"}
          />

          <SectionText
            className={`${Styles.container__paragraph}`}
            typography={"body"}
            text={
              "Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in each of our cities. Use our app to locate the nearest bike, unlock it with a tap, and you’re away!"
            }
          />
        </div>

        <ButtonLink
          className={`${Styles.container__btnLink}`}
          typography={"button"}
          label={"Get Scootin"}
        />
      </div>
      <picture className={Styles.container__picture}>
        <img className={Styles.container__arrow} src={arrow} />
        <img className={Styles.container__arrowTablet} src={arrowTablet} />
        <img className={Styles.container__balls} src={balls} />
        <img className={Styles.container__line} src={line} />
      </picture>
    </div>
  );
}
