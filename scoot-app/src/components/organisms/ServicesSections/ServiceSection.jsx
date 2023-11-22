import ServiceCard from "../../molecules/ServiceCard/ServiceCard";
import styles from "./servicesection.scss";
import woman from "../../../assets/img/Home/woman.png";
import city from "../../../assets/img/Home/city.png";
import wallet from "../../../assets/img/Home/wallet.png";

export default function ServiceSection() {
  
  return (
    <section >
      <div className={styles.cards}>
        <ServiceCard
          className={styles.cards__cardWoman}
          src={woman}
          title={"Easy to use riding telemetry"}
          text={
            "The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app."
          }
          label={"Learn More"}
        />
        
          <ServiceCard
            // className={styles.cards__cardCity}
            src={city}
            title={"Coming to a city near you"}
            text={
              "Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year."
            }
            label={"Learn More"}
            direction={"row"}
          />
        
        <ServiceCard
          className={styles.cards__cardWallet}
          src={wallet}
          title={"Zero hassle payments"}
          text={
            "Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month."
          }
          label={"Learn More"}
        />
      </div>
    </section>
  );
}
