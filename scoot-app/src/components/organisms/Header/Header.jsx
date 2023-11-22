import React from "react";
import styles from "./header.module.scss";
import hamburger from "../../../assets/img/Home/hamburger.svg";
import MenuList from "../../molecules/MenuList/MenuList";


export default function Header() {
  return (
    <div className={styles.container}>
      <img className={styles.container__hamburger} src={hamburger} />
      <MenuList/>
    </div>

    
  );
}
