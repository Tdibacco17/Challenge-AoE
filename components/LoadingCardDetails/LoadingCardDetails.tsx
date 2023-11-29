import styles from "./LoadingCardDetails.module.scss"
export default function LoadingCardDetails() {
    return <div className={styles["container-skeleton-card"]}>
        <div className={styles["title"]} />
        <div className={styles["description"]}>
            <div className={styles["wrapper"]} />
            <div className={styles["wrapper"]} />
        </div>
    </div>
}