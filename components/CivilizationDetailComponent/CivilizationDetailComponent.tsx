import { useContext } from "react"
import styles from "./CivilizationDetailComponent.module.scss"
import { CivilizationDetailContext } from "@/context/CivilizationDetailContextProvider"
import { CivilizationDataContextInterface } from "@/types/CivilizationTypes"
export default function CivilizationDetailComponent() {
    const { civilizationData } = useContext(CivilizationDetailContext) as CivilizationDataContextInterface

    return (
        <>
            {civilizationData &&
                <div className={styles["container-card-detail"]}>
                    <p>{civilizationData && civilizationData?.name}</p>
                    <div>
                        <p>{civilizationData.total}</p>
                        <p>{civilizationData.wins}</p>
                    </div>
                </div>}
        </>

    )
}