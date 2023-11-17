import { ButtonLink } from "../../atoms/ButtonLink/ButtonLink";
import Styles from "./menulist.module.scss";

export default function MenuList() {
  return (
    <nav className={Styles.container}>
      <ul className={Styles.container__list}>
        <li className={`${Styles.container__element} typography--button`}>
          About
        </li>
        <li className={`${Styles.container__element} typography--button`}>
          Location
        </li>
        <li className={`${Styles.container__element} typography--button`}>
          Careers
        </li>
      </ul>
      <div className={Styles.container__button}>
        <ButtonLink />
      </div>
    </nav>
  );
}
