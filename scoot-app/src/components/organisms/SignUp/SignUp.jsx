import styles from "./signup.module.scss"
import SectionTitle from "../../atoms/SectionTitle/SectionTitle";
import appStore from "../../../assets/img/Home/appStore.png";
import googlePlay from "../../../assets/img/Home/googlePlay.png";

export default function SignUp() {
    return (
      <div className={styles.container}>
        <SectionTitle
          className={styles.container__title}
          title={"Sign up and Scoot off today"}
          typography={"title"}
        />
        <picture className={styles.container__picture}>
          <img className={styles.container__appStore} src={appStore} />
          <img className={styles.container__googlePlay} src={googlePlay} />
        </picture>
      </div>
    );
}