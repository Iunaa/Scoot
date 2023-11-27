import React from "react";
import styles from "./header.module.scss";
import scoot from "../../../assets/img/Home/scoot.svg";
import hamburger from "../../../assets/img/Home/hamburger.svg";
import MenuList from "../../molecules/MenuList/MenuList";
import ButtonLink from "../../atoms/ButtonLink/ButtonLink";
import TextList from "../../molecules/TextList/TextList";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__list}>
        <img className={styles.header__hamburger} src={hamburger} />
        <div className={styles.header__allcomponents}>
          <img className={styles.header__logo} src={scoot} />
          <div className={styles[`header__containerMenu--header`]}>
            <TextList />
            <div className={styles.container__button}>
              <ButtonLink
                className={styles.container__btnLink}
                typography={"button"}
                label={"Get Scootin"}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
