import Styles from "./itemlist.module.scss";

export default function ItemList(props) {
  const ItemClass = `${Styles.itemList}  ${props.className} ${
    Styles[`itemList--${props.typography}`]
  } `;

  return <li className={ItemClass}>{props.label}</li>;
}
