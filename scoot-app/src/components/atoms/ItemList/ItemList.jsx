import styles from "./itemlist.module.scss";

export default function ItemList(props) {
  const ItemClass = `${styles.itemList}  ${props.className} ${
    styles[`itemList--${props.typography}`]
  } `;

  return <li className={ItemClass}>{props.label}</li>;
}
