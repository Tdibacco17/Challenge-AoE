import styles from "./LoadingListComponent.module.scss"
export default function LoadingListComponent() {
    return (
        <div className={styles["container-skeleton-list"]}>
            {Array(15).fill(null).map((_, index: number) => {
                return <div
                    key={index}
                    className={`${styles["item-list"]} ${index === 0 && styles["first"]} ${index % 2 === 0 && styles["color"]}`}
                />
            })}
        </div>
    )
}