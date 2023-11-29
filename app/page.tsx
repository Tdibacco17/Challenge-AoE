import CivilizationsListContainer from '@/containers/CivilizationsListContainer/CivilizationsListContainer'
import styles from './page.module.scss'
export default function Home() {
  return (
    <section className={styles["container-section-home"]}>
        <CivilizationsListContainer />
    </section>
  )
}
