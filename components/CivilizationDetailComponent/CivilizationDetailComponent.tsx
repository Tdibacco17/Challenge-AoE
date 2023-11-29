import { useContext } from "react"
import styles from "./CivilizationDetailComponent.module.scss"
import { CivilizationDetailContext } from "@/context/CivilizationDetailContextProvider"
import { CivilizationDataContextInterface } from "@/types/civilizationTypes"
import LoadingCardDetails from "../LoadingCardDetails/LoadingCardDetails"
import data from "@/models/webTexts.json"
import ErrorOcurredComponent from "../ErrorOcurredComponent/ErrorOcurredComponent"
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
                                        <p>{data.civilization.details.totalGamesPlayed}</p>
                                        <p>{civilizationData.total}</p>
                                    </div>
                                    <div className={styles["wrapper"]}>
                                        <p>{data.civilization.details.totalGamesWon}</p>
                                        <p>{civilizationData.wins}</p>
                                    </div>
                                </div>
                            </div>
                            : <ErrorOcurredComponent text={data.errorOcurred} />}
                    </>
                )
            }
        </>
    )
}