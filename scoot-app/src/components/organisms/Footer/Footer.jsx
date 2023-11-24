import MenuList from "../../molecules/MenuList/MenuList"
import SocialMedia from "../../molecules/SocialMedia/SocialMedia"
import styles from "./footer.module.scss"

export default function Footer(){
    return(
        <footer className={styles.container}>
            <MenuList />
            <SocialMedia/>
        </footer>
    )
}