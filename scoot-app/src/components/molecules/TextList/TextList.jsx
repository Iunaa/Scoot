import styles from "./textlist.module.scss";
import ItemList from "../../atoms/ItemList/ItemList";

export default function TextList(props) {
  const ListClass = `${styles.container__list}  ${props.className} ${
    props.header ? styles["container__list--header"] : ""
  }`;
  return (
    <nav className={ListClass}>
      <div className={styles.container}>
        
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
