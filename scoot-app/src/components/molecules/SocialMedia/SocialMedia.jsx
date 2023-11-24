import styles from "./socialmedia.module.scss";

export default function SocialMedia() {
  return (
    <div className={styles.container}>
      <svg
        className={styles.cards__svg}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill=""
      >
        <use href="#facebook" xlinkHref="#facebook" />
      </svg>

      <svg
        className={styles.cards__svg}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill=""
      >
        <use href="#twiter" xlinkHref="#twiter" />
      </svg>

      <svg
        className={styles.cards__svg}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill=""
      >
        <use href="#instagram" xlinkHref="#instagram" />
      </svg>
    </div>
  );
}
