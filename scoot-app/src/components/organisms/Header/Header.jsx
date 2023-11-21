import React from "react";
import Styles from "./header.module.scss";
import hamburger from "../../../assets/img/Home/hamburger.svg";
import MenuList from "../../molecules/MenuList/MenuList";


export default function Header() {
  return (
    <div className={Styles.container}>
      <img className={Styles.container__hamburger} src={hamburger} />
      <MenuList/>
    </div>

    
  );
}
