import ButtonLink from "../../atoms/ButtonLink/ButtonLink";
import styles from "./menulist.module.scss";
import scoot from "../../../assets/img/Home/scoot.svg";
import ItemList from "../../atoms/ItemList/ItemList";

export default function MenuList() {
  return (
    <>
      <nav className={styles.container}>
        <div className={styles.container__logoList}>
          <img className={styles.container__logo} src={scoot} />
          <ul className={styles.container__list}>
            <ItemList
              className={`${styles.container__element}`}
              typography={"button"}
              label={"About"}
            />

            <ItemList
              className={`${styles.container__element}`}
              typography={"button"}
              label={"Location"}
            />

            <ItemList
              className= {styles.container__element}
              typography={"button"}
              label={"Careers"}
            />
          </ul>
        </div>
      </nav>
      <div className={styles.container__button}>
        <ButtonLink
          className={styles.container__btnLink}
          typography={"button"}
          label={"Get Scootin"}
        />
      </div>
    </>
  );
}
