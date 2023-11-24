import styles from "./textlist.module.scss";
import ItemList from "../../atoms/ItemList/ItemList";

export default function TextList() {
  return (
    <nav className={styles.container}>
      <div className={styles.container__logolist}>
        <svg
          className={styles.cards__logo}
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="#"
        >
          <use href="#logo" xlinkHref="#logo" />
        </svg>

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
            className={styles.container__element}
            typography={"button"}
            label={"Careers"}
          />
        </ul>
      </div>
    </nav>
  );
}
