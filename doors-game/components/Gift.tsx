import styles from "../styles/Gift.module.css"

export default function Gift() {
    return (
        <div className={styles.gift}>
            <div className={styles.top}></div>
            <div className={styles.body}></div>
            <div className={styles.bowHorizontal}></div>
            <div className={styles.bowVertical}></div>
        </div>
    )
}