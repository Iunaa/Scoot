import ButtonLink from "../../atoms/ButtonLink/ButtonLink";
import TextList from "../TextList/TextList";
import styles from "./menulist.module.scss";

export default function MenuList() {
  return (
    <nav className={styles.container}>
      
        <TextList />
        <div className={styles.container__button}>
          <ButtonLink
            className={styles.container__btnLink}
            typography={"button"}
            label={"Get Scootin"}
          />
        </div>
      
    </nav>
  );
}
