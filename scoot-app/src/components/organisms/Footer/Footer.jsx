import MenuList from "../../molecules/MenuList/MenuList";
import scoot from "../../../assets/img/Home/whiteScoot.png";
import SocialMedia from "../../molecules/SocialMedia/SocialMedia";
import styles from "./footer.module.scss";
import TextList from "../../molecules/TextList/TextList";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__logolist}>
        <img className={styles.footer__logo} src={scoot} />
        <TextList/>
      </div>
      <SocialMedia />
    </footer>
  );
}
