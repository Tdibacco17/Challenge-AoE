import Link from "next/link"
import styles from "./NavigationComponent.module.scss"
export default function NavigationComponent() {
    return (
        <section className={styles["container-section-navigation"]}>
            <div className={styles["wrapper"]}>
                <Link href={"/"} className={styles["text"]}>Volver atras</Link>
            </div>
        </section>
    )
}