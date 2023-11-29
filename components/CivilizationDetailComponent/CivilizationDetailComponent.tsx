import { useContext } from "react"
import styles from "./CivilizationDetailComponent.module.scss"
import { CivilizationDetailContext } from "@/context/CivilizationDetailContextProvider"
import { CivilizationDataContextInterface } from "@/types/civilizationTypes"
import LoadingCardDetails from "../LoadingCardDetails/LoadingCardDetails"
export default function CivilizationDetailComponent({ loading }: { loading: boolean }) {
    const { civilizationData } = useContext(CivilizationDetailContext) as CivilizationDataContextInterface

    return (
        <>
            {
                loading ? (
                    <LoadingCardDetails />
                ) : (
                    <>
                        {civilizationData ?
                            <div className={styles["container-card-detail"]}>
                                <p className={styles["title"]}>{civilizationData && civilizationData?.name}</p>
                                <div className={styles["description"]}>
                                    <div className={styles["wrapper"]}>
                                        <p>Play Rate</p>
                                        <p>{civilizationData.total}</p>
                                    </div>
                                    <div className={styles["wrapper"]}>
                                        <p>Win Rate</p>
                                        <p>{civilizationData.wins}</p>
                                    </div>
                                </div>
                            </div>
                            : <p className={styles["text-error"]}>Ocurrio un error inesperado</p>}
                    </>
                )
            }
        </>
    )
}