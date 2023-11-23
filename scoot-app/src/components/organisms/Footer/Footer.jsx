import MenuList from "../../molecules/MenuList/MenuList"
import styles from "./footer.module.scss"

export default function Footer(){
    return(
        <footer className={styles.container}>
            <MenuList/>
        </footer>
    )
}