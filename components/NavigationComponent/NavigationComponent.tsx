import Link from "next/link"
import styles from "./NavigationComponent.module.scss"
import data from "@/models/webTexts.json"
export default function NavigationComponent() {
    return (
        <section className={styles["container-section-navigation"]}>
            <div className={styles["wrapper"]}>
                <Link href={data.navigation.backUrl.url} className={styles["text"]}>
                    {data.navigation.backUrl.title}
                </Link>
            </div>
        </section>
    )
}