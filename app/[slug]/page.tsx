import CivilizationDetailContainer from "@/containers/CivilizationDetailContainer/CivilizationDetailContainer";
import styles from "./page.module.scss"
export default function CivilizationDetail({ params }: { params: { slug: string } }) {
    return (
        <section className={styles["container-section-detail"]}>
            <CivilizationDetailContainer params={params} />
        </section>
    )
}
