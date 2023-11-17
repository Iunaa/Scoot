import React from "react";
import Styles from "./header.module.scss";
import hamburger from "../../../assets/img/Home/hamburger.svg";
import scoot from "../../../assets/img/Home/scoot.svg";
import MenuList from "../../molecules/MenuList/MenuList";
// import { ButtonLink } from "../../atoms/ButtonLink/ButtonLink";

export default function Header() {
  return (
    <div className={Styles.container}>
      <img className={Styles.container__hamburger} src={hamburger} />
      <img className={Styles.container__logo} src={scoot} />
      <MenuList/>
    </div>

    
  );
}
