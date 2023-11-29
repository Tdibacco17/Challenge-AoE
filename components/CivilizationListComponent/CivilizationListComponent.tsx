import { CivilizationDataContextInterface, CivilizationInterface } from "@/types/civilizationTypes"
import styles from "./CivilizationListComponent.module.scss"
import { CivilizationsContext } from "@/context/CivilizationsContextProvider"
import { useContext } from "react"
import Link from "next/link"
import LoadingListComponent from "../LoadingListComponent/LoadingListComponent"
import data from "@/models/webTexts.json"
import ErrorOcurredComponent from "../ErrorOcurredComponent/ErrorOcurredComponent"
export default function CivilizationListComponent({ loading }: { loading: boolean }) {
    const { civilizationsData } = useContext(CivilizationsContext) as CivilizationDataContextInterface
    return (
        <div className={styles["container-list"]}>
            {
                loading ? (
                    <LoadingListComponent />
                ) : (
                    <>
                        {civilizationsData ?
                            civilizationsData.map((civilizationData: CivilizationInterface, index: number) => {
                                return <Link
                                    href={`/${civilizationData.name}`}
                                    className={`${styles["item-list"]} ${index === 0 && styles["first"]}`}
                                    key={index}
                                >
                                    {civilizationData.name}
                                </Link>
                            })
                            : <ErrorOcurredComponent text={data.errorOcurred} />}
                    </>
                )
            }
        </div>
    )
}