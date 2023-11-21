import ButtonLink from "../../atoms/ButtonLink/ButtonLink";
import Styles from "./menulist.module.scss";
import scoot from "../../../assets/img/Home/scoot.svg";
import ItemList from "../../atoms/ItemList/ItemList";

export default function MenuList() {
  return (
    <>
      <nav className={Styles.container}>
        <div className={Styles.container__logoList}>
          <img className={Styles.container__logo} src={scoot} />
          <ul className={Styles.container__list}>
            <ItemList
              className={`${Styles.container__element}`}
              typography={"button"}
              label={"About"}
            />

            <ItemList
              className={`${Styles.container__element}`}
              typography={"button"}
              label={"Location"}
            />

            <ItemList
              className= {Styles.container__element}
              typography={"button"}
              label={"Careers"}
            />
          </ul>
        </div>
      </nav>
      <div className={Styles.container__button}>
        <ButtonLink
          className={Styles.container__btnLink}
          typography={"button"}
          label={"Get Scootin"}
        />
      </div>
    </>
  );
}
