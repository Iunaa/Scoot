import Styles from "./buttonlink.module.scss";

export const ButtonLink = () => {
  return (
    <div className={Styles.container}>
      <a className={`${Styles.container__buttonLink} typography--button`}>
        Get Scootin
      </a>
    </div>
  );
};
